<script>
	import { directive } from 'vue-awesome-swiper';

	/** A base carousel component with a slot for elements to be slides */

	export default {
		name: 'BaseCarousel',
		directives: {
			swiper: directive,
		},
		props: {
			/** Display the carousel only on mobile sizes, on larger sizes displays slides in a grid */
			mobileOnly: {
				type: Boolean,
				default: false,
			},
			/** Sets the carousel to loop or not */
			loop: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				swiperOptions: {
					loop: this.loop,
					slidesPerView: 1.35,
					spaceBetween: 20,
					centeredSlides: true,
					a11y: {
						prevSlideMessage: 'Previous slide',
						nextSlideMessage: 'Next slide',
					},
					keyboard: {
						enabled: true,
					},
					breakpoints: {
						720: {
							slidesPerView: 3.5,
							spaceBetween: 30,
							centeredSlides: false,
						},
						1140: {
							slidesPerView: 3.5,
							spaceBetween: 40,
							centeredSlides: false,
						},
					},
				},
			};
		},
	};
</script>

<template>
	<section>
		<div
			v-show="mobileOnly && $mq !== 'sm'"
			class="md:grid md:grid-cols-2 md:gap-10 md:items-stretch | lg:grid-cols-3 | 2xl:grid-cols-4"
		>
			<!-- @slot The content slot for slides. NOTE: The elements must have a ".swiper-slide" class on them to work -->
			<slot />
		</div>

		<div v-show="!mobileOnly || (mobileOnly && $mq === 'sm')" class="carousel">
			<div v-swiper:carousel="swiperOptions" class="swiper">
				<div class="pb-14 swiper-wrapper">
					<!-- @slot The content slot for slides. NOTE: The elements must have a ".swiper-slide" class on them to work -->
					<slot />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
	.carousel {
		cursor: ew-resize;
	}
</style>
