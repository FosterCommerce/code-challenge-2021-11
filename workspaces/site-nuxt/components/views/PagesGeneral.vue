<script>
	/** The general page view template */
	import HeroFloat from '@/components/HeroFloat.vue';
	import HeroPhone from '@/components/HeroPhone.vue';
	import HeroPlain from '@/components/HeroPlain.vue';
	import HeroRocket from '@/components/HeroRocket.vue';
	export default {
		name: 'PagesGeneral',
		components: {
			HeroFloat,
			HeroPhone,
			HeroPlain,
			HeroRocket,
		},
		props: {
			/** The pages entry data object */
			entry: {
				type: Object,
				required: true,
			},
		},
		computed: {
			/** Calculates the page heading */
			pageHeading() {
				return this.entry.heading ? this.entry.heading : this.entry.title;
			},
			subHeading() {
				// testing computed for live preview.
				return this.entry.subheading;
			},
		},
	};
</script>

<template>
	<article>
		<!-- The page hero -->
		<component :is="$helpers.heroName(entry.heroDesign)" :heading="pageHeading">
			<h2
				v-if="entry.subheading"
				class="text-secondary text-lg !leading-normal | md:text-xl | lg:text-2xl | xl:text-[28px]"
			>
				{{ subHeading }}
			</h2>
			<BaseButton v-if="entry.button.url" :url="entry.button.url" rounded>
				{{ entry.button.text }}
			</BaseButton>
		</component>

		<!-- The page content -->
		<GlobalPageBuilder :nodes="entry.contentRows" />
	</article>
</template>
