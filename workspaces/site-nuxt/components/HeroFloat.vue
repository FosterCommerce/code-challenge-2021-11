<script>
	/** The floating woman hero header component */

	export default {
		name: 'HeroFloat',
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
		class="relative pt-[100px] bg-no-repeat bg-bottom bg-cover md:pb-[50px] lg:pb-[100px] curve"
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
			<div class="space-y-6 | md:relative md:z-20 md:w-3/5 | lg:w-2/3 lg:space-y-8 | xl:space-y-12">
				<!-- Heading Block -->
				<div class="max-w-[330px] | md:max-w-[420px] | lg:max-w-[540px] | xl:max-w-[720px]">
					<BaseHeading heading-level="1" theme="h1">{{ heading }}</BaseHeading>
				</div>

				<!-- Animation Block (mobile) -->
				<div class="-mx-8 | md:hidden">
					<AnimationFloat />
				</div>

				<!-- Content slot block -->
				<div class="max-w-[375px] space-y-6 | lg:max-w-[436px] lg:space-y-8 | xl:space-y-12">
					<!-- @slot The default slot for content -->
					<slot />
				</div>
			</div>

			<div
				class="
					hidden
					md:relative md:z-10 md:block md:w-2/5 md:pointer-events-none
					lg:w-1/3
					animation
				"
			>
				<AnimationFloat />
			</div>
		</div>
	</header>
</template>

<style lang="postcss" scoped>
	.curve {
		background-image: url('~assets/images/curve-left-down-mbl.svg');
	}

	@screen md {
		.curve {
			background-image: url('~assets/images/curve-left-down-lrg.svg');
		}

		.animation {
			transform: scale(1.8) translate(20%, 6%);
			transform-origin: right;
		}
	}

	@screen lg {
		.animation {
			transform: scale(2) translate(20%, 6%);
			transform-origin: right;
		}
	}

	@screen xl {
		.animation {
			transform: scale(2.25) translate(20%, 10%);
			transform-origin: right;
		}
	}
</style>
