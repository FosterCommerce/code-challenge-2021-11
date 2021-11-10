<script>
	/*
	 * The animation of the phone
	 */

	export default {};
</script>

<template>
	<div class="relative flex flex-col justify-center">
		<div class="relative z-20 character">
			<picture class="w-full">
				<source srcset="~/assets/images/phone.webp" type="image/webp" />
				<img src="~/assets/images/phone.png" alt="A floating phone" />
			</picture>
		</div>

		<div class="cloud-1 absolute z-30 top-[50%] left-[5%] lg:left-[2%] w-[20%] max-w-[220px]">
			<picture class="w-full">
				<source srcset="~/assets/images/cloud_1.webp" type="image/webp" />
				<img src="~/assets/images/cloud_1.png" alt="" />
			</picture>
		</div>

		<div class="cloud-2 absolute z-30 top-[20%] right-[10%] w-1/4 max-w-[220px]">
			<picture>
				<source srcset="~/assets/images/cloud_2.webp" type="image/webp" />
				<img src="~/assets/images/cloud_2.png" alt="" />
			</picture>
		</div>

		<div class="absolute z-10 top-0 left-[19%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute z-10 right-[6%] top-[52%] w-[10px] h-[10px]">
			<picture>
				<source srcset="~/assets/images/star.webp" type="image/webp" />
				<img src="~/assets/images/star.png" alt="" />
			</picture>
		</div>

		<div class="absolute z-10 left-[8%] top-[89%] w-[10px] h-[10px]">
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
