<script>
	/** This component renders headings to be used across the site. */

	export default {
		name: 'BaseHeading',
		props: {
			/** Which heading is rendered? h1, h2, h3, etc... */
			headingLevel: {
				type: [Number, String],
				default: 2,
				validator: (propValue) => [1, 2, 3, 4, 5, 6].includes(parseInt(propValue)),
			},
			/** Used to control how the heading displays as different heading levels. this allows to set an h3 styled as an h2 or h1, etc... */
			theme: {
				type: String,
				default: null,
				validator: (propValue) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(propValue),
			},
		},
		computed: {
			/** Used to set the appropriate "theme" class to a heading. Defaults to match the heading level if no theme is provided. */
			headingClass() {
				let themeClass;

				if (this.theme) {
					themeClass = this.theme;
				} else {
					switch (parseInt(this.headingLevel)) {
						case 2:
							return 'h2';
						case 3:
							return 'h3';
						case 4:
							return 'h4';
						case 5:
							return 'h5';
						case 6:
							return 'h6';
						default:
							return 'h1';
					}
				}

				return themeClass;
			},
		},
	};
</script>

<template>
	<component :is="`h${headingLevel}`" :class="headingClass">
		<!-- @slot The main content slot -->
		<slot />
	</component>
</template>

<style lang="postcss" scoped>
	.h1 {
		@apply font-display font-semibold text-[32px] leading-tight tracking-wider;
	}

	.h2 {
		@apply text-primary text-2xl font-bold;
	}

	.h3 {
		@apply font-display text-3xl;
	}

	.h4 {
		@apply text-secondary text-xl;
	}

	.h5 {
		@apply text-secondary text-lg;
	}

	.h6 {
		@apply text-primary;
	}

	.h3,
	.h4,
	.h5,
	.h6 {
		@apply font-medium;
	}

	.h1,
	.h2,
	.h3,
	.h4,
	.h5,
	.h6 {
		>>> a {
			@apply text-highlight-primary transition-colors duration-300;

			&:hover {
				@apply text-highlight-secondary;
			}
		}
	}

	@screen md {
		.h1 {
			@apply text-4xl;
		}
	}

	@screen lg {
		.h1 {
			@apply text-5xl;
		}

		.h2 {
			@apply text-2xl;
		}

		.h3 {
			@apply text-3xl;
		}

		.h4 {
			@apply text-2xl;
		}

		.h5 {
			@apply text-xl;
		}

		.h6 {
			@apply text-lg;
		}
	}

	@screen xl {
		.h1 {
			@apply text-7xl;
		}

		.h2 {
			@apply text-3xl;
		}

		.h3 {
			@apply text-5xl;
		}
	}
</style>
