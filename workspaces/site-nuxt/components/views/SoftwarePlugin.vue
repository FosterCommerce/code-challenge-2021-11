<script>
	/** import used components */
	import BaseHeading from '@/components/BaseHeading';
	import BaseRichText from '@/components/BaseRichText';
	import BaseCardGraphic from '@/components/BaseCardGraphic';
	import BaseLayoutColumns from '@/components/BaseLayoutColumns';
	import BaseLayoutGrid from '@/components/BaseLayoutGrid';
	import SoftwarePluginDropdown from '@/components/SoftwarePluginDropdown';
	export default {
		name: 'SoftwarePlugin',
		components: {
			BaseHeading,
			BaseRichText,
			BaseCardGraphic,
			BaseLayoutColumns,
			BaseLayoutGrid,
			SoftwarePluginDropdown,
		},
		props: {
			/** title of software plugin */
			pluginTitle: {
				type: String,
				required: true,
			},
			/** short description of software plugin */
			pluginDescription: {
				type: String,
				required: true,
			},
			/** price of software plugin */
			pluginPrice: {
				type: String,
				required: true,
			},
			/** version of software plugin */
			pluginVersion: {
				type: String,
				required: true,
			},
			/** date of software plugin last update in DD/MM/YYYY */
			pluginLastUpdate: {
				type: Date,
				required: true,
			},
			/** software plugin about information */
			pluginAbout: {
				type: Array,
				required: true,
			},
			/** selected software plugin compatibility */
			pluginCompatibility: {
				type: Object,
				required: true,
			},
			/** software plugin compatibilities */
			pluginCompatibilities: {
				type: Array,
				required: true,
			},
		},
		computed: {
			lastUpdated() {
				/** returns formatted date */
				const formattedDate = this.formatLastUpdatedDate(this.pluginLastUpdate);
				return formattedDate;
			},
		},
		data() {
			return {
				active: false,
			};
		},
		methods: {
			/** accepts date in Date format
			 * returns date in DD/MM/YYYY format
			 */
			formatLastUpdatedDate(date) {
				const newDate = new Date(date);
				var dd = String(newDate.getDate());
				var mm = String(newDate.getMonth() + 1);
				var yyyy = newDate.getFullYear();

				return mm + '/' + dd + '/' + yyyy;
			},
		},
	};
</script>

<template>
	<main>
		<section class="bg-body py-16">
			<div class="space-y-24 px-6 xl:px-16">
				<BaseLayoutColumns
					layout="thirds"
					align="left"
					valign="center"
					gap="small"
					element="section"
				>
					<div class="space-y-10">
						<div class="h-full">
							<BaseHeading class="mb-4 text-7xl flex-wrap" :heading-level="3" :theme="'h3'">{{
								pluginTitle
							}}</BaseHeading>
							<div class="space-y-3">
								<BaseRichText
									:body="pluginDescription"
									:classes="'text-secondary text-lg xl:text-xl font-medium flex-wrap'"
								/>
							</div>
						</div>
						<BaseLayoutGrid :gap="'small'" :element="'div'">
							<div class="border-l-2 px-5 space-y-3 border-secondary">
								<BaseHeading class="mb-4" :heading-level="'2'" :theme="'h4'">Version</BaseHeading>
								<BaseRichText
									:body="pluginVersion"
									:classes="'text-primary text-lg xl:text-[32px] font-medium leading-[40px]'"
								/>
							</div>
							<div class="border-l-2 px-5 space-y-3 border-secondary">
								<BaseHeading class="mb-4" :heading-level="'2'" :theme="'h4'"
									>Last update</BaseHeading
								>
								<BaseRichText
									:body="lastUpdated"
									:classes="'text-primary text-lg xl:text-[32px] font-medium leading-[40px]'"
								/>
							</div>
							<div class="border-l-2 px-5 space-y-3 border-secondary">
								<BaseHeading class="mb-4 inline" :heading-level="'2'" :theme="'h4'"
									>Compatibility</BaseHeading
								>
								<!-- Dropdown -->
								<SoftwarePluginDropdown
									:selected="pluginCompatibility"
									:options="pluginCompatibilities"
								/>
							</div>
						</BaseLayoutGrid>
					</div>
					<template v-slot:aside>
						<BaseCardGraphic alignment="vertical">
							<div class="space-y-5">
								<BaseRichText
									:body="pluginPrice"
									:classes="'text-primary text-6xl xl:text-7xl font-light leading-[108px]'"
								/>
								<BaseButton
									:theme="'tertiery'"
									:rounded="false"
									:url="'https://fostercommerce.com'"
								>
									<span class="flex items-center">
										Buy now
										<svg-icon
											:name="`icons/arrow-diagonal`"
											fill="currentColor"
											class="w-3 h-3 xl:w-[17.12px] xl:h-8 inline-flex"
										/>
									</span>
								</BaseButton>
							</div>
							<template v-slot:media>
								<BaseImage
									:src="'assets/images/shipstation-logo.svg'"
									:imgClasses="'h-[225.99px] min-w-[225.99px] -mt-7'"
									alt="ShipStation Logo"
								/>
							</template>
						</BaseCardGraphic>
					</template>
				</BaseLayoutColumns>
				<section class="md:flex justify-center">
					<ul class="w-full md:flex md:items-center xl:w-10/12">
						<li>
							<BaseLink
								:url="'https://fostercommerce.com/about'"
								:classes="'underline text-highlight-primary mr-16 text-lg md:text-xl xl:text-2xl leading-10 tracking-[0.02em]'"
								>About</BaseLink
							>
						</li>
						<li>
							<BaseLink
								:url="'https://fostercommerce.com/about'"
								:classes="'text-tertiery text-lg md:text-xl xl:text-2xl leading-10 mr-16 tracking-[0.02em]'"
								>Changelog</BaseLink
							>
						</li>
						<li>
							<BaseLink
								:url="'https://fostercommerce.com/about'"
								:classes="'flex items-center text-tertiery text-lg md:text-xl xl:text-2xl leading-10 mr-16 tracking-[0.02em]'"
							>
								Documentation
								<svg-icon
									:name="`icons/arrow-diagonal`"
									fill="currentColor"
									class="w-3 h-3 xl:w-[17.12px] xl:h-8 inline"
								/>
							</BaseLink>
						</li>
						<li>
							<BaseLink
								:url="'https://fostercommerce.com/about'"
								:classes="'flex items-center text-tertiery text-xl xl:text-2xl leading-10 tracking-[0.02em]'"
							>
								Repository
								<svg-icon
									:name="`icons/arrow-diagonal`"
									fill="currentColor"
									class="w-3 h-3 xl:w-[17.12px] xl:h-8 inline"
								/>
							</BaseLink>
						</li>
					</ul>
				</section>
			</div>
		</section>
		<section class="bg-highlight-tertiery">
			<div class="py-10 px-6 xl:px-16 flex justify-center">
				<div class="w-full xl:w-10/12">
					<BaseHeading class="mb-6" :heading-level="'2'" :theme="'h2'">About</BaseHeading>
					<div class="space-y-8">
						<BaseRichText
							v-for="about in pluginAbout"
							:key="about.id"
							:body="about"
							:classes="'text-tertiery leading-8 font-medium text-lg xl:text-xl'"
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
