<script>
	export default {
		name: 'Hero',
		props: {
			/** Optional | will render an <a> with button styling */
			price: {
				type: String,
				default: '',
			},
			title: {
				type: String,
				default: '',
			},
			image: {
				type: String,
				default: '',
			},
			/** Optional | will open the url link (if supplied) in a new window */
			text: {
				type: String,
				default: '',
			},
			linkName: {
				type: String,
				default: '',
			},
			link: {
				type: String,
				default: '',
			},
		},
	};
</script>
<template>
	<div
		class="
			relative
			z-20
			mx-auto
			max-w-[1230px]
			px-8
			pb-4
			md:flex md:justify-between md:items-center
		"
	>
		<!-- relative
			z-20
			mx-auto
			max-w-[1230px]
			px-8
			pb-4
			md:flex md:justify-between md:items-center -->
		<div
			class="
				sm:w-1|
				space-y-3
				|
				md:relative md:z-20 md:w-3/5
				|
				lg:w-2/3 lg:space-y-4
				|
				xl:space-y-6
			"
		>
			<div>
				<h1
					class="
						lg:font-normal
						title
						mx-w-100
						overflow-hidden
						lg:text-7xl
						font-display
						leading-4.8|
						sm:text-6xl
					"
				>
					{{ title }}</h1
				>
			</div>
			<div class="max-w-[721px] space-y-3 | lg:max-w-[721px] lg:space-y-4 | xl:space-y-6">
				<div class="mb-4 font-medium paragraph text-md leading-2 font-body text-secondary">
					{{ text }}
				</div>
			</div>
		</div>
		<article
			class="relative pt-20 align-vertical xs:flex xs:justify-center sm:flex sm:justify-center"
		>
			<div class="relative z-20 bg-white bg-opacity-50 backdrop-filter backdrop-blur sm:max-w-sm"
				><div class="p-10 || content"
					><div class="text-center"
						><div class="space-y-5"
							><h3 class="md:text-7xl">{{ price }}</h3>
						</div>
					</div>
					<div
						class="flex items-center justify-center inline-block px-8 py-3 mt-6 transition-colors duration-300 rounded-md  cursor-pointerbg-highlight-tertiery font-body bg-highlight-tertiery"
						><a :href="link" target="" class="mr-1 text-center text-highlight-secondary">
							{{ linkName }}
						</a>
						<img src="../../assets/images/arrow.svg" /> </div></div
			></div>
			<div class="absolute top-0 z-10 md:left-12 sm:left-18"
				><figure
					><div class="mask-auto"
						><picture class="block"
							><!---->
							<img :srcset="image" alt="ShipStation Connect Logo" /></picture
					></div>
					<!----></figure
				></div
			>
		</article>
		<!-- </article> -->
	</div>
</template>

<style lang="postcss" scoped>
	.title {
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
	}
	.paragraph {
		line-height: 32px;
	}
	.price {
		line-height: 108px;
	}
</style>
