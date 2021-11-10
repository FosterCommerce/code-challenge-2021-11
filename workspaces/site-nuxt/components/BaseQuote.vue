<script>
	/** BaseQuote component | accepts two props (quote and cite) */

	export default {
		name: 'BaseQuote',
		props: {
			/** The quote as an HTML string */
			quote: {
				type: String,
				required: true,
			},
			/** Who said it? */
			cite: {
				type: String,
				default: null,
			},
		},
	};
</script>

<template>
	<figure>
		<blockquote class="pl-4 border-l-4 border-highlight-primary | lg:pl-6 lg:py-2">
			<div class="space-y-4 text-xl font-medium | lg:text-2xl" v-html="quote" />
			<figcaption v-if="cite" class="mt-6">— {{ cite }}</figcaption>
		</blockquote>
	</figure>
</template>
