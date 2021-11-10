<script>
	/** This page renders the blog articles */

	export default {
		async asyncData({ route, store }) {
			const { data: queryData } = await store.dispatch('queryAPI', {
				name: 'EntriesBlog',
				variables: {
					limit: 1,
					slug: route.params.slug,
				},
			});

			await store.dispatch('setSeoData', queryData?.entries[0]?.seomatic);

			return {
				loading: 0,
				entry: queryData?.entries[0],
			};
		},
		data() {
			return {
				loading: 0,
				entry: null,
			};
		},
		computed: {
			subheading() {
				let result = null;
				if (this.entry.subheading) {
					result = this.entry.subheading;
				} else if (this.entry.episodeNumber) {
					result = `Episode ${this.entry.episodeNumber}. Commerce Minded. Hosted by Stephen Callender.`;
				}
				return result;
			},
		},
	};
</script>

<template>
	<article v-if="!loading">
		<HeroPlain :heading="entry.title">
			<BaseHeading v-if="subheading" heading-level="2" theme="h5">
				{{ subheading }}
			</BaseHeading>
		</HeroPlain>

		<div class="max-w-[1236px] mx-auto px-8">
			<BaseLayoutColumns
				v-if="entry.typeHandle === 'podcast' && entry.mediaUrl"
				layout="quarters"
				gap="xlarge"
				class="mb-8 | md:mb-16 | lg:mb-20"
			>
				<BasePodcastPlayer :src="entry.mediaUrl" />
			</BaseLayoutColumns>

			<BaseLayoutColumns layout="quarters" gap="xlarge">
				<GlobalContentBuilder :nodes="entry.contentBlocks.nodes" />
				<template v-slot:aside>
					<div v-if="entry.resources.length" class="pt-6 | md:pt-0">
						<BaseHeading heading-level="4" theme="h6" class="mb-6">Resources</BaseHeading>
						<ul class="space-y-4">
							<li v-for="(link, index) in entry.resources" :key="index">
								<BaseLink :url="link.resourcelink.url">{{ link.resourcelink.text }}</BaseLink>
							</li>
						</ul>
					</div>
				</template>
			</BaseLayoutColumns>
		</div>
	</article>
</template>
