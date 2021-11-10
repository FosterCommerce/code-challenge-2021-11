<script>
	/** Renders a link component either as a <nuxt-link> or <a>. */

	export default {
		name: 'BaseLink',
		props: {
			/** The URL the link should go to */
			url: {
				type: String,
				required: true,
			},
			/** Classes assigned to the link for styling that override the default styling */
			classes: {
				type: String,
				required: false,
				default: '',
			},
		},
		computed: {
			/** Uses the helper library to determine if the URL is internal or not */
			internal() {
				return this.$helpers.isInternal(this.url);
			},
			linkHref() {
				if (!this.url) {
					return '';
				} else {
					return this.$helpers.formatUri(this.url);
				}
			},
			/** Compute the styling classes */
			styling() {
				return this.classes
					? this.classes
					: 'text-highlight-primary hover:text-highlight-secondary transition-colors duration-300';
			},
		},
	};
</script>

<template>
	<nuxt-link v-if="internal" :to="linkHref" :class="styling" @click.native="$emit('click')">
		<!-- @slot The label content slot -->
		<slot />
	</nuxt-link>
	<a v-else :href="linkHref" :class="styling" @click="$emit('click')">
		<!-- @slot The label content slot -->
		<slot />
	</a>
</template>
