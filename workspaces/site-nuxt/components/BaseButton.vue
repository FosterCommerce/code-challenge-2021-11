<script>
	/** Renders a button or link styled as a button */

	export default {
		name: 'BaseButton',
		props: {
			/** Optional | will render an <a> with button styling */
			url: {
				type: String,
				default: null,
			},
			/** Optional | will open the url link (if supplied) in a new window */
			newWindow: {
				type: Boolean,
				default: false,
			},
			/** Optional | if this is to render a button element, the type of button it should be */
			type: {
				type: String,
				default: 'button',
				validator: (propValue) => ['button', 'submit', 'reset'].includes(propValue),
			},
			/** the color theme the button */
			theme: {
				type: String,
				default: 'primary',
				validator: (propValue) => ['primary', 'secondary', 'tertiery'].includes(propValue),
			},
			/** Whether or not the button will be pill shape or just rounded corners */
			rounded: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			/** Uses the helper library to determine if the URL is internal or not */
			internal() {
				if (!this.url) {
					return false;
				} else {
					return this.$helpers.isInternal(this.url);
				}
			},
			/** Uses the helper library to format the URL into a URI if applicable */
			linkHref() {
				if (!this.url) {
					return '';
				} else {
					return this.$helpers.formatUri(this.url);
				}
			},
			/** Sets the taget value for links */
			target() {
				return this.newWindow ? '_blank' : '';
			},
			/** Styling classes string
			btn-primary btn-secondary btn-tertiery 
			 */
			styling() {
				return `inline-block px-8 py-3 font-body transition-colors duration-300 cursor-pointer
				btn-${this.theme} ${this.rounded ? 'rounded-full' : 'rounded-md'} || button`;
			},
		},
	};
</script>

<template>
	<button v-if="!url" :class="styling" :type="type" v-on="$listeners">
		<!-- @slot The label content slot -->
		<slot />
	</button>
	<nuxt-link v-else-if="url && internal" :to="linkHref" :target="target" :class="styling">
		<!-- @slot The label content slot -->
		<slot />
	</nuxt-link>
	<a v-else :href="url" :target="target" :class="styling">
		<!-- @slot The label content slot -->
		<slot />
	</a>
</template>

<style lang="postcss" scoped>
	.btn-primary {
		@apply bg-highlight-primary text-white;

		&:hover {
			@apply bg-highlight-secondary;
		}
	}

	.btn-secondary {
		@apply bg-white text-highlight-primary;

		&:hover {
			@apply text-primary;
		}

		&:focus-visible {
			@apply ring-white ring-offset-highlight-primary !important;
		}
	}

	.btn-tertiery {
		@apply bg-highlight-tertiery text-secondary;

		&:hover {
			@apply bg-tertiery text-white;
		}
	}
</style>
