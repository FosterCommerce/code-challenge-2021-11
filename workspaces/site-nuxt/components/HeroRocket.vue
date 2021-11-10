<script>
	/** The woman on a rocket hearo header component */

	export default {
		name: 'HeroRocket',
		props: {
			/** The heading to display */
			heading: {
				type: String,
				required: true,
			},
		},
	};
</script>

<template>
	<header
		class="relative pt-[100px] bg-no-repeat bg-bottom bg-cover md:pb-[50px] lg:pb-[160px] curve"
	>
		<div
			class="
				relative
				z-20
				mx-auto
				max-w-[1230px]
				px-8
				pb-16
				md:flex md:justify-between md:items-center md:min-h-[420px]
				lg:min-h-[580px]
				xl:min-h-[680px]
			"
		>
			<div
				class="
					space-y-6
					md:relative md:z-20 md:order-2 md:w-2/5
					lg:w-[38%] lg:space-y-8
					xl:w-[44%] xl:space-y-12
				"
			>
				<!-- Heading Block -->
				<div class="max-w-[330px] | md:max-w-[420px] | lg:max-w-[360px] | xl:max-w-[540px]">
					<BaseHeading heading-level="1" theme="h1">{{ heading }}</BaseHeading>
				</div>

				<!-- Content slot block -->
				<div
					class="max-w-[375px] space-y-6 lg:max-w-[360px] lg:space-y-8 xl:max-w-none xl:space-y-12"
				>
					<!-- @slot The default slot for content -->
					<slot />
				</div>
			</div>

			<div
				class="
					relative
					z-10
					mt-6
					md:order-1 md:w-3/5 md:pointer-events-none
					lg:w-[50%]
					xl:w-[44%]
					animation
				"
			>
				<AnimationRocket />
			</div>
		</div>
	</header>
</template>

<style lang="postcss" scoped>
	.curve {
		background-image: url('~assets/images/curve-right-down-mbl.svg');
	}

	@screen md {
		.curve {
			background-image: url('~assets/images/curve-right-down-lrg.svg');
		}

		.animation {
			transform: scale(1.2) translate(-24%, 6%);
			transform-origin: left;
		}
	}

	@screen lg {
		.animation {
			transform: scale(1.4) translate(-20%, 10%);
		}
	}

	@screen xl {
		.animation {
			transform: scale(1.6) translate(-30%, 10%);
		}
	}
</style>
