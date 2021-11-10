<script>
	export default {
		name: 'BaseLayoutColumns',
		props: {
			/** The layout distribution of the main content area and aside area */
			layout: {
				type: String,
				required: false,
				default: 'halves',
				validator: (propValue) => ['halves', 'thirds', 'quarters'].includes(propValue),
			},
			/** The main content alignment */
			align: {
				type: String,
				required: false,
				default: 'left',
				validator: (propValue) => ['left', 'right'].includes(propValue),
			},
			/** The columns vertical alignment */
			valign: {
				type: String,
				required: false,
				default: 'start',
				validator: (propValue) => ['start', 'center', 'end'].includes(propValue),
			},
			/** The amount if gap between columns */
			gap: {
				type: String,
				required: false,
				default: 'medium',
				validator: (propValue) =>
					['none', 'small', 'medium', 'large', 'xlarge'].includes(propValue),
			},
			/** The HTML element to use as the parent element  */
			element: {
				type: String,
				required: false,
				default: 'div',
				validator: (propValue) =>
					['div', 'section', 'article', 'header', 'footer'].includes(propValue),
			},
			/** Breakpoint when the columns are displayed */
			breakpoint: {
				type: String,
				required: false,
				default: 'md',
				validator: (propValue) => ['md', 'lg', 'xl'].includes(propValue),
			},
		},
	};
</script>

<template>
	<component
		:is="element"
		:class="`wrapper space-y-4 break-${breakpoint} cols-layout-${layout} cols-align-${align} cols-gap-${gap} items-${valign}`"
	>
		<div class="content">
			<!-- @slot The main content slot -->
			<slot />
		</div>
		<aside class="aside">
			<!-- @slot The aside content slot -->
			<slot name="aside" />
		</aside>
	</component>
</template>

<style lang="postcss" scoped>
	.wrapper {
		/* Halves Layout */

		&.cols-layout-halves {
			@apply grid-cols-2;

			&.cols-align-left {
				grid-template-areas: 'content aside';
			}

			&.cols-align-right {
				grid-template-areas: 'aside content';
			}
		}

		/* Thirds Layout */

		&.cols-layout-thirds {
			@apply grid-cols-3;

			&.cols-align-left {
				grid-template-areas: 'content content aside';
			}

			&.cols-align-right {
				grid-template-areas: 'aside content content';
			}
		}

		/* Quarters Layout */

		&.cols-layout-quarters {
			@apply grid-cols-4;

			&.cols-align-left {
				grid-template-areas: 'content content content aside';
			}

			&.cols-align-right {
				grid-template-areas: 'aside content content content';
			}
		}

		/* Gaps */

		&.cols-gap-small {
			@apply gap-4;
		}
		&.cols-gap-medium {
			@apply gap-8;
		}
		&.cols-gap-large {
			@apply gap-12;
		}
		&.cols-gap-xlarge {
			@apply gap-16;
		}
	}

	.content {
		grid-area: content;
	}

	.aside {
		grid-area: aside;
	}

	@screen md {
		.wrapper.break-md {
			@apply grid space-y-0;
		}
	}

	@screen lg {
		.wrapper.break-lg {
			@apply grid space-y-0;
		}

		.wrapper.break-md,
		.wrapper.break-lg,
		.wrapper.break-xl {
			/* Gaps */

			&.cols-gap-small {
				@apply gap-4;
			}
			&.cols-gap-medium {
				@apply gap-14;
			}
			&.cols-gap-large {
				@apply gap-24;
			}
			&.cols-gap-xlarge {
				@apply gap-32;
			}
		}
	}

	@screen xl {
		.wrapper.break-xl {
			@apply grid space-y-0;
		}
	}
</style>
