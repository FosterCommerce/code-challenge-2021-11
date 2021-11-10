<script>
	/** A base card component for including logo graphics with two orientations (vertical or horizontal). */

	export default {
		name: 'BaseCardGraphic',
		props: {
			/** The alignment of the graphic */
			alignment: {
				type: String,
				required: false,
				default: 'vertical',
				validator: (propValue) => ['vertical', 'horizontal'].includes(propValue),
			},
		},
	};
</script>

<template>
	<article
		:class="`align-${alignment} relative ${
			alignment === 'horizontal' ? 'md:pt-0 md:pr-24' : ''
		} pt-24`"
	>
		<div class="relative z-20 bg-white bg-opacity-50 backdrop-filter backdrop-blur || card">
			<div class="p-10 || content">
				<div
					:class="`text-center ${alignment === 'horizontal' ? 'md:col-span-2 md:text-left' : ''}`"
				>
					<!-- @slot The content slot -->
					<slot />
				</div>
				<footer
					v-if="$scopedSlots.footer"
					:class="`mt-6 text-center ${
						alignment === 'horizontal'
							? 'md:col-span-1 md:justify-self-end md:place-self-center md:mt-0 md:text-right'
							: ''
					}`"
				>
					<!-- @slot The footer slot -->
					<slot name="footer" />
				</footer>
			</div>
		</div>
		<div
			:class="`absolute top-0 left-1/2 z-10 || media ${
				alignment === 'horizontal' ? 'md:top-1/2 md:left-auto md:right-0' : ''
			}`"
		>
			<!-- @slot The media slot -->
			<slot name="media" />
		</div>
	</article>
</template>

<style lang="postcss" scoped>
	.card {
		box-shadow: 0 56px 40px -30px rgba(190, 152, 104, 0.15);
	}
	.content {
		& >>> a:not(.button) {
			@apply inline outline-none !important;

			&::before {
				content: '';
				@apply absolute inset-0 z-30 border-2 border-transparent transition-colors duration-300;
			}

			&:hover::before {
				@apply border-highlight-primary;
			}
		}
	}

	.media {
		transform: translate(-50%, 0);
	}

	@screen md {
		.align-horizontal {
			.media {
				transform: translate(0, -50%);
			}
			.content {
				@apply grid grid-cols-3 gap-2;
			}
		}

		.align-vertical {
			@apply flex justify-center items-stretch;
			.card {
				@apply flex justify-center items-stretch;
			}
			.content {
				@apply flex flex-col flex-wrap justify-between items-stretch;
			}
		}
	}

	@screen lg {
		.align-horizontal .content {
			@apply p-20;
		}
	}
</style>
