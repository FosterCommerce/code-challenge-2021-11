<script>
	/** The blog landing page view template */

	export default {
		name: 'PagesBlog',
		props: {
			/** The pages entry data object */
			entry: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				loading: 0,
				filter: this.entry.blogTypes,
				filterOptions: [
					{
						label: 'Everything',
						value: 'both',
					},
					{
						label: 'Articles',
						value: 'article',
					},
					{
						label: 'Podcasts',
						value: 'podcast',
					},
				],
				currentPage: 1,
				pageSize: this.entry.resultsPerPage ? this.entry.resultsPerPage : 15,
			};
		},
		computed: {
			/** Calculates the page heading */
			pageHeading() {
				return this.entry.heading ? this.entry.heading : this.entry.title;
			},
			entries() {
				return this.entry.entries ? this.entry.entries : [];
			},
			/** Filters the blog entries by entry type */
			filteredEntries() {
				let results = this.entries;
				if (this.filter !== 'both') {
					results = this.entries.filter((entry) => {
						return entry.typeHandle === this.filter;
					});
				}
				return results;
			},
			/** Paginates the blog entries */
			paginatedEntries() {
				const size = this.pageSize;
				const current = this.currentPage;
				const first = (current - 1) * size;
				const last = current * size;
				return this.filteredEntries.slice(first, last);
			},
			/** Gets the total number of pages */
			numPages() {
				return Math.ceil(this.filteredEntries.length / this.pageSize);
			},
		},
		methods: {
			/** Sets the current page for pagination */
			movePage(args) {
				const numPages = args.jump ? args.jump : 1;
				if (args.direction === 'forward') {
					this.currentPage += numPages;
				} else {
					this.currentPage -= numPages;
				}
			},
			/** Resets the pagination back to the first page */
			resetPagination() {
				this.currentPage = 1;
			},
		},
	};
</script>

<template>
	<div>
		<!-- The page hero -->
		<HeroPlain :heading="pageHeading">
			<BaseHeading heading-level="2" theme="h5">{{ entry.subheading }}</BaseHeading>
			<div v-if="entry.blogTypes === 'both'" class="!mt-6 | lg:!mt-10 lg:w-1/2">
				<BaseToggle
					v-model="filter"
					:initial-value="filter"
					:options="filterOptions"
					field-label="entryTypes"
					@change="resetPagination"
				/>
			</div>
		</HeroPlain>

		<!-- The paginated entry results -->
		<div v-if="!loading && paginatedEntries.length" class="mx-auto max-w-[1230px] px-8 pb-16">
			<BaseLayoutGrid columns="3" gap="medium" element="div">
				<BaseCardPreview
					v-for="blogEntry in paginatedEntries"
					:key="blogEntry.id"
					alignment="vertical"
				>
					<BaseHeading :heading-level="3" theme="h6">
						<BaseLink
							:url="blogEntry.url"
							classes="!text-black hover:!text-highlight-secondary transition-colors duration-300"
						>
							{{ blogEntry.title }}
						</BaseLink>
					</BaseHeading>

					<template v-slot:preview>
						<BasePreview v-if="blogEntry.typeHandle === 'podcast'">
							<BaseHeading :heading-level="4" theme="h2">Commerce Minded</BaseHeading>
							<template v-if="blogEntry.episodeNumber" v-slot:eyebrow>
								<h5
									class="px-3 pb-1 pt-[6px] font-bold text-tertiery leading-none bg-body rounded-md"
									:aria-label="`Episode Number ${blogEntry.episodeNumber}`"
								>
									#{{ blogEntry.episodeNumber }}
								</h5>
							</template>
							<template v-slot:media>
								<PreviewPodcast />
							</template>
						</BasePreview>

						<BasePreview v-else>
							<BaseHeading v-if="!blogEntry.previewImage.length" :heading-level="3" theme="h2">
								Breaking news
							</BaseHeading>
							<template v-slot:media>
								<div v-if="blogEntry.previewImage.length" class="overflow-hidden rounded-lg">
									<BaseImage
										:src="blogEntry.previewImage[0].ratio1x1Webp"
										:alt="blogEntry.previewImage[0].altText"
									/>
								</div>
								<div v-else class="relative w-full h-full">
									<div class="absolute top-[40px] right-[-10px] w-[115px]">
										<img src="~/assets/images/cloud_2.png" alt="Image of a cloud" />
									</div>
								</div>
							</template>
						</BasePreview>
					</template>
				</BaseCardPreview>
			</BaseLayoutGrid>

			<!-- The pagination links -->
			<footer v-if="numPages > 1" class="mt-16">
				<BasePagination :page="currentPage" :num-pages="numPages" @paginate="movePage" />
			</footer>
		</div>
	</div>
</template>
