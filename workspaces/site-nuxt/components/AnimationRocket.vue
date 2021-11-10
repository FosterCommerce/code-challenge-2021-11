<script>
	/*
	 * The animation of the character riding a rocket
	 */

	export default {};
</script>

<template>
	<div class="relative flex flex-col justify-center pt-4">
		<div class="character">
			<picture class="w-full">
				<source srcset="~/assets/images/rocket.webp" type="image/webp" />
				<img src="~/assets/images/rocket.png" alt="A girl riding on a rocket" />
			</picture>
		</div>

		<div class="cloud absolute top-0 left-[20%] w-1/5">
			<picture>
				<source srcset="~/assets/images/cloud_3.webp" type="image/webp" />
				<img src="~/assets/images/cloud_3.png" alt="" />
			</picture>
		</div>

		<div class="absolute top-[33%] left-[19%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute right-[8%] top-[5%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute right-0 top-[89%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.character {
		z-index: 2;
		animation: float 10s ease-in-out infinite;
	}

	.cloud {
		animation: float 10s ease-in-out 1.25s infinite;
		transition: all 0.8s;
	}

	@media (prefers-reduced-motion) {
		.character {
			animation: none;
		}

		.cloud {
			animation: none;
		}
	}

	@keyframes float {
		0% {
			transform: translate3d(0, 0, 0);
		}
		20% {
			transform: translate3d(-10px, -5px, 0);
		}
		40% {
			transform: translate3d(0, -10px, 0);
		}
		60% {
			transform: translate3d(10px, 0, 0);
		}
		80% {
			transform: translate3d(-5px, 5px, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
