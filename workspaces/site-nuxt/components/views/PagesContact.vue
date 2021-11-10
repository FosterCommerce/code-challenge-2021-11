<script>
	/** The contact page view template */

	export default {
		name: 'PagesContact',
		props: {
			/** The pages entry data object */
			entry: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				currentForm: '',
			};
		},
		computed: {
			/** Calculates the page heading */
			pageHeading() {
				return this.entry.heading ? this.entry.heading : this.entry.title;
			},
			/** Creates the form toggle options based on the forms that are included in the entry */
			toggleOptions() {
				return this.entry.forms.map((form) => {
					return {
						label: form.title,
						value: form.handle,
					};
				});
			},
		},
		created() {
			// Set the first form in the page as the default
			this.currentForm = this.entry.forms[0].handle ?? '';
		},
		methods: {
			/** Calls each referenced child form's resetForm() method */
			resetForms() {
				this.$refs.form.forEach((form) => {
					form.resetForm();
				});
			},
		},
	};
</script>

<template>
	<div>
		<!-- The page hero -->
		<HeroPlain :heading="pageHeading">
			<BaseHeading heading-level="2" theme="h5">{{ entry.subheading }}</BaseHeading>
		</HeroPlain>

		<!-- The pages forms -->
		<div v-if="entry.forms.length" class="mx-auto px-8 py-8 max-w-[1230px]">
			<BaseLayoutColumns
				layout="halves"
				align="left"
				valign="start"
				gap="large"
				element="section"
				breakpoint="lg"
			>
				<BaseToggle
					v-if="entry.forms.length > 1"
					v-model="currentForm"
					:initial-value="currentForm"
					:options="toggleOptions"
					label="What can we help with?"
					@change="resetForms"
				/>
				<div v-for="form in entry.forms" :key="form.id">
					<Form v-show="form.handle === currentForm" ref="form" :form="form" />
				</div>
				<template v-slot:aside>
					<div class="hidden | lg:block">
						<AnimationPhone />
					</div>
				</template>
			</BaseLayoutColumns>
		</div>

		<!-- The page content -->
		<GlobalPageBuilder :nodes="entry.contentRows" />
	</div>
</template>
