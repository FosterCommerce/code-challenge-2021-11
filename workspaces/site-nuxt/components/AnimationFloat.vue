<script>
	/*
	 * The animation of the character floating in the clouds
	 */

	export default {};
</script>

<template>
	<div class="flex flex-col relative justify-center">
		<div class="character flex justify-center items-start top-0">
			<picture class="w-3/5">
				<source srcset="~/assets/images/doll.webp" type="image/webp" />
				<img src="~/assets/images/doll.png" alt="Floating girl looking at a mobile phone" />
			</picture>
		</div>

		<div class="cloud-1 absolute top-[66%] left-[5%] lg:left-[2%] w-1/4 max-w-[220px]">
			<picture class="w-full">
				<source srcset="~/assets/images/cloud_1.webp" type="image/webp" />
				<img src="~/assets/images/cloud_1.png" alt="" />
			</picture>
		</div>

		<div class="cloud-2 absolute top-[1%] right-[6%] w-1/4 max-w-[220px]">
			<picture>
				<source srcset="~/assets/images/cloud_2.webp" type="image/webp" />
				<img src="~/assets/images/cloud_2.png" alt="" />
			</picture>
		</div>

		<div class="absolute top-[-1%] left-[12%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute left-[87%] top-[40%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute left-[32%] top-[64%] w-[10px] h-[10px]">
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

	.cloud-1 {
		animation: float 10s ease-in-out 1.25s infinite;
		transition: all 0.8s;
	}

	.cloud-2 {
		animation: float 10s ease-in-out 2.75s infinite;
		transition: all 0.8s;
	}

	@media (prefers-reduced-motion) {
		.character {
			animation: none;
		}

		.cloud-1 {
			animation: none;
		}

		.cloud-2 {
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
