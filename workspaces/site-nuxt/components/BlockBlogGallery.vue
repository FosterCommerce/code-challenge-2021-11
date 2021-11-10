<script>
	import EntriesBlog from '@/queries/EntriesBlog.gql';

	export default {
		name: 'BlockBlogGallery',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				loading: 0,
				entries: []
			};
		},
		computed: {
			/** Sets the entry type handles to query */
			entryTypes() {
				if (this.block.blogTypes === 'both') {
					return '*';
				} else {
					return this.block.blogTypes;
				}
			},
			/** Formats the entries data into cards after the Apollo fetch has been made */
			cards() {
				const cardArr = [];
				if (!this.loading && this.entries) {
					this.entries.forEach((entry) => {
						cardArr.push(this.formatCardData(entry));
					});
				}
				return cardArr;
			},
			mobileOnly() {
				return this.block.gridType === 'grid';
			},
		},
		methods: {
			/** Formats an entries data into something that is more easily consumed by the base components */
			formatCardData(entry) {
				let cardImage = null;
				if (entry.previewImage[0].ratio1x1Webp) {
					cardImage = entry.previewImage[0].ratio1x1Webp;
				} else if (entry.previewImage[0].url) {
					cardImage = entry.previewImage[0].url;
				}

				return {
					title: entry.title,
					image: cardImage,
					summary: entry.previewSummary,
					link: entry.url,
					type: entry.typeHandle,
				};
			},
		},
	};
</script>

<template>
	<div>
		<BaseLayoutGrid v-if="block.gridType === 'rows'" columns="1">
			<BaseCardPreview v-for="(card, index) in cards" :key="index" alignment="horizontal">
				<!-- Podcast -->
				<div v-if="card.type === 'podcast'" class="space-y-8">
					<BaseHeading :heading-level="3" theme="h6">{{ card.title }}</BaseHeading>
					<BaseButton :url="card.link" :rounded="false" theme="tertiery">Listen now</BaseButton>
				</div>
				<!-- Article -->
				<BaseHeading v-else :heading-level="4" theme="h6">
					<BaseLink :url="card.link">{{ card.title }}</BaseLink>
				</BaseHeading>
				<template v-slot:preview>
					<BasePreview>
						<template v-slot:media>
							<div class="overflow-hidden rounded-lg">
								<BaseImage
									:src="card.image"
									:alt="`${card.type === 'podcast' ? 'Commerce Minded' : card.title}`"
								/>
							</div>
						</template>
					</BasePreview>
				</template>
			</BaseCardPreview>
		</BaseLayoutGrid>

		<BaseCarousel v-else :mobile-only="mobileOnly">
			<BaseCardPreview v-for="(card, index) in cards" :key="index" alignment="vertical">
				<!-- Podcast -->
				<div v-if="card.type === 'podcast'" class="space-y-8">
					<BaseHeading :heading-level="3" theme="h6">{{ card.title }}</BaseHeading>
					<BaseButton :url="card.link" :rounded="false" theme="tertiery">Listen now</BaseButton>
				</div>
				<!-- Article -->
				<BaseHeading v-else :heading-level="4" theme="h6">
					<BaseLink :url="card.link">{{ card.title }}</BaseLink>
				</BaseHeading>
				<template v-slot:preview>
					<BasePreview>
						<template v-slot:media>
							<div class="overflow-hidden rounded-lg">
								<BaseImage
									:src="card.image"
									:alt="`${card.type === 'podcast' ? 'Commerce Minded' : card.title}`"
								/>
							</div>
						</template>
					</BasePreview>
				</template>
			</BaseCardPreview>
		</BaseCarousel>
	</div>
</template>
