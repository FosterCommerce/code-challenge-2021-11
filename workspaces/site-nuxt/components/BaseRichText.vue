<script>
	/** Base rich text | renders content from WYSIWYG editors in Craft */

	export default {
		name: 'BaseRichText',
		props: {
			/** The text body content */
			body: {
				type: String,
				required: true,
			},
			/** Styling classes ot override the defaults */
			classes: {
				type: String,
				required: false,
				default: '',
			},
		},
		computed: {
			/** Compute the styling classes */
			styling() {
				return this.classes ? this.classes : 'text-base text-tertiery lg:text-lg';
			},
		},
	};
</script>

<template>
	<div class="rich-text" :class="styling" v-html="body" />
</template>

<style lang="postcss" scoped>
	.rich-text {
		>>> p {
			@apply mt-6;

			&:first-child {
				@apply mt-0;
			}
		}

		>>> strong {
			@apply font-bold;
		}

		>>> a {
			@apply text-highlight-primary transition-colors duration-300;

			&:hover {
				@apply text-highlight-secondary;
			}
		}

		>>> ul,
		>>> ol {
			@apply mt-6;

			&:first-child {
				@apply mt-0;
			}
		}

		>>> ul {
			@apply list-inside;
		}

		>>> ul li {
			@apply relative;

			padding-left: 1.6rem;

			&::before {
				@apply absolute bg-black rounded-full;

				top: 0.6rem;
				width: 0.4rem;
				height: 0.4rem;
				margin-left: -1.5rem;
				content: '';
			}
		}

		>>> ol {
			@apply list-none list-inside;

			counter-reset: item;
		}

		>>> ol li {
			@apply table;

			counter-increment: item;

			&::before {
				display: table-cell;
				padding-right: 0.8rem;
				content: counters(item, '.') '. ';
			}
		}

		>>> ol li li {
			margin: 0;
		}

		>>> ol li li::before {
			content: counters(item, '.') ' ';
		}

		>>> ul li,
		>>> ol li {
			@apply mb-2;

			&:last-child {
				@apply mb-0;
			}
		}
	}
</style>
