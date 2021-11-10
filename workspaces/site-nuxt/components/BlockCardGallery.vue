<script>
	export default {
		name: 'BlockCardGallery',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				cards: [],
				loaded: false,
			};
		},
		computed: {
			mobileOnly() {
				return this.block.gridType === 'grid';
			},
		},
		created() {
			this.parseCards();
		},
		mounted() {
			this.$nextTick(() => {
				this.loaded = true;
			});
		},
		methods: {
			/** Parses the cards data. Moved from a computed value to a method as computed value was not parsing in time */
			parseCards() {
				const cardArr = [];
				this.block.cards.forEach((card) => {
					let cardImage = null;
					if (card.cardImage[0].originalWebp) {
						cardImage = card.cardImage[0].originalWebp;
					} else if (card.cardImage[0].url) {
						cardImage = card.cardImage[0].url;
					}
					cardArr.push({
						image: cardImage,
						imageWidth: card.cardImage[0].width,
						imageHeight: card.cardImage[0].height,
						extension: card.cardImage[0].extension,
						caption: card.cardCaption,
						link: card.cardLink.url ? card.cardLink.url : null,
					});
				});
				this.cards = cardArr;
			},
		},
	};
</script>

<template>
	<div>
		<BaseLayoutGrid v-if="block.gridType === 'rows'" columns="1">
			<BaseCardSimple v-for="(card, index) in cards" :key="index">
				<div class="flex flex-wrap justify-center items-end h-full">
					<BaseImage v-if="card.image" :src="card.image" class="w-24 block" alt="" />
					<BaseHeading
						v-if="card.caption"
						:heading-level="3"
						theme="h6"
						class="w-full mt-8 text-center"
					>
						<BaseLink v-if="card.link" :url="card.link">{{ card.caption }}</BaseLink>
						<span v-else>{{ card.caption }}</span>
					</BaseHeading>
				</div>
			</BaseCardSimple>
		</BaseLayoutGrid>

		<div v-else>
			<BaseCarousel v-if="loaded" :mobile-only="mobileOnly">
				<div v-for="(card, index) in cards" :key="index" class="swiper-slide">
					<BaseCardSimple>
						<div class="flex flex-wrap justify-center items-end h-full">
							<BaseImage
								v-if="card.image"
								:src="card.image"
								class="block"
								:class="{ 'flex-grow': card.extension === 'svg' }"
								alt=""
							/>
							<BaseHeading
								v-if="card.caption"
								:heading-level="3"
								theme="h6"
								class="w-full mt-8 text-center"
							>
								<BaseLink v-if="card.link" :url="card.link">{{ card.caption }}</BaseLink>
								<span v-else>{{ card.caption }}</span>
							</BaseHeading>
						</div>
					</BaseCardSimple>
				</div>
			</BaseCarousel>
		</div>
	</div>
</template>
