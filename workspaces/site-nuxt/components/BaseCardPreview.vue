<script>
	export default {
		name: 'BaseCardPreview',
		props: {
			/** The alignment of the card */
			alignment: {
				type: String,
				required: false,
				default: 'vertical',
				validator: (propValue) => ['vertical', 'horizontal'].includes(propValue),
			},
			order: {
				type: Number,
				required: true,
				default: 2,
			},
			zValue: {
				type: String,
				required: true,
				default: '30',
			},
		},
	};
</script>

<template>
	<article
		:class="`align-${alignment} relative flex flex-col justify-start items-start px-8 pb-8 | lg:px-10 lg:pb-10 ${
			alignment === 'horizontal'
				? 'md:flex-row md:justify-between lg:px-16 lg:pb-14 align-horizontal'
				: ''
		}`"
	>
		<div
			:class="`order-${order}  m-auto || content ${alignment === 'horizontal' ? 'md:pl-12' : ''}`"
		>
			<!-- @slot The content slot -->
			<slot />
		</div>
		<div
			:class="`relative z-${zValue} w-full order-1 pointer-events-none ${
				alignment === 'horizontal' ? 'md:w-[330px]' : ''
			}`"
		>
			<!-- @slot The preview slot -->
			<slot name="preview" />
		</div>
	</article>
</template>

<style lang="postcss" scoped>
	article::before {
		content: '';
		z-index: -1;
		box-shadow: 0 56px 40px -30px rgba(190, 152, 104, 0.15);

		@apply absolute top-12 left-0 right-0 bottom-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur;
	}

	.content {
		& >>> a:not(.button) {
			@apply inline outline-none !important;

			&::before {
				content: '';
				@apply absolute top-12 left-0 right-0 bottom-0 z-20 border-2 border-transparent transition-colors duration-300;
			}

			&:hover::before {
				@apply border-highlight-primary;
			}
		}
	}

	@screen md {
		article {
			&::before {
				@apply top-24;
			}

			&.align-horizontal::before {
				@apply top-0;

				.content >>> a:not(.button)::before {
					@apply top-0;
				}
			}
		}

		.content >>> a:not(.button)::before {
			@apply top-24;
		}
	}

	@screen lg {
		article.align-horizontal {
			&::before {
				@apply top-6;
			}

			.content >>> a:not(.button)::before {
				@apply top-6;
			}
		}
	}

	@screen xl {
		article.align-horizontal {
			&::before {
				@apply top-12;
			}

			.content >>> a:not(.button)::before {
				@apply top-12;
			}
		}
	}
</style>
