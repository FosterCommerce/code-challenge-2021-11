<script>
	import BaseIcon from '@/components/BaseIcon';

	/** A callout component with a default slot for content and two theme options */

	export default {
		name: 'BaseCallout',
		components: { BaseIcon },
		props: {
			/** The theme it should use */
			theme: {
				type: String,
				default: 'primary',
				validator: (propValue) => ['primary', 'secondary'].includes(propValue),
			},
		},
	};
</script>

<template>
	<div class="relative">
		<div :class="`${theme} relative flex items-center justify-between z-40`">
			<div>
				<!-- @slot The main content slot -->
				<slot />
			</div>

			<BaseIcon
				v-if="theme === 'primary'"
				file="fosterLogo-white"
				classes="hidden w-20 h-20 md:inline"
			/>
		</div>

		<div
			v-if="theme === 'secondary'"
			class="absolute right-0 top-0 inline-block w-64 h-64 -mr-10 -mt-1"
		>
			<BaseIcon file="fosterLogo" classes="w-64 h-64" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.primary {
		box-shadow: 0 56px 40px -30px rgba(219, 115, 75, 0.4);

		@apply bg-highlight-primary rounded-2xl p-6 text-white;

		>>> h1,
		>>> h2,
		>>> h3,
		>>> h4,
		>>> h5,
		>>> h6,
		>>> ul,
		>>> ol,
		>>> p {
			@apply text-white !important;
		}
	}

	.secondary {
		box-shadow: 0 56px 40px -30px rgba(190, 152, 104, 0.15);

		@apply bg-white p-12 bg-opacity-50 font-display backdrop-filter backdrop-blur;
	}

	@screen md {
		.primary {
			@apply p-12;
		}
		.secondary {
			@apply p-16;
		}
	}
</style>
