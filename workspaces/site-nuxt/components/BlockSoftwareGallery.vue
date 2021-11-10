<script>
	import EntriesSoftware from '@/queries/EntriesSoftware.gql';

	export default {
		name: 'BlockSoftwareGallery',
		apollo: {
			$loadingKey: 'loading',
			entries: {
				query: EntriesSoftware,
				prefetch: true,
			},
		},
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				loading: 0,
			};
		},
		computed: {
			/** Gets the entries if they are set in the block, if not uses the all query data */
			cards() {
				const cardArr = [];
				this.block.softwareEntries.forEach((entry) => {
					cardArr.push(this.formatCardData(entry));
				});

				if (cardArr.length === 0 && !this.loading) {
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
				if (entry.image[0].originalWebp) {
					cardImage = entry.image[0].originalWebp;
				} else if (entry.image[0].url) {
					cardImage = entry.image[0].url;
				}

				return {
					title: entry.title,
					image: cardImage,
					nodes: entry.summary.nodes,
					link: entry.externalUrl ? entry.externalUrl : null,
				};
			},
		},
	};
</script>

<template>
	<div>
		<!-- Row Layout -->
		<BaseLayoutGrid v-if="block.gridType === 'rows'" columns="1">
			<BaseCardGraphic v-for="(card, index) in cards" :key="index" alignment="horizontal">
				<div class="space-y-5">
					<BaseHeading :heading-level="3" theme="h2">{{ card.title }}</BaseHeading>
					<component
						:is="$helpers.blockName(node.type)"
						v-for="(node, child) in card.nodes"
						:key="child"
						:block="node"
						class="text-tertiery"
					/>
				</div>
				<template v-if="card.link" v-slot:footer>
					<BaseButton theme="tertiery" :rounded="false" :url="card.link">View Plugin</BaseButton>
				</template>
				<template v-if="card.image" v-slot:media>
					<BaseImage :src="card.image" :alt="`${card.title} Logo`" />
				</template>
			</BaseCardGraphic>
		</BaseLayoutGrid>

		<!-- Grid Layout -->
		<BaseLayoutGrid v-else-if="block.gridType === 'grid'" columns="3">
			<BaseCardGraphic v-for="(card, index) in cards" :key="index" alignment="vertical">
				<div class="space-y-5">
					<BaseHeading :heading-level="3" theme="h2">{{ card.title }}</BaseHeading>
					<component
						:is="$helpers.blockName(node.type)"
						v-for="(node, child) in card.nodes"
						:key="child"
						:block="node"
						class="text-tertiery"
					/>
				</div>
				<template v-if="card.link" v-slot:footer>
					<BaseButton theme="tertiery" :rounded="false" :url="card.link">View Plugin</BaseButton>
				</template>
				<template v-if="card.image" v-slot:media>
					<BaseImage :src="card.image" :alt="`${card.title} Logo`" />
				</template>
			</BaseCardGraphic>
		</BaseLayoutGrid>

		<!-- Slider Layout -->
		<BaseCarousel v-else :mobile-only="mobileOnly">
			<BaseCardGraphic v-for="(card, index) in cards" :key="index" alignment="vertical">
				<div class="space-y-5">
					<BaseHeading :heading-level="3" theme="h2">{{ card.title }}</BaseHeading>
					<component
						:is="$helpers.blockName(node.type)"
						v-for="(node, child) in card.nodes"
						:key="child"
						:block="node"
						class="text-tertiery"
					/>
				</div>
				<template v-if="card.link" v-slot:footer>
					<BaseButton theme="tertiery" :rounded="false" :url="card.link">View Plugin</BaseButton>
				</template>
				<template v-if="card.image" v-slot:media>
					<BaseImage :src="card.image" :alt="`${card.title} Logo`" />
				</template>
			</BaseCardGraphic>
		</BaseCarousel>
	</div>
</template>
