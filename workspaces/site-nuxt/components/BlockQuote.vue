<script>
	export default {
		name: 'BlockQuote',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			quoteContent() {
				let content = '';
				this.block.quote.nodes.forEach((node) => {
					content += node.html;
				});
				return content;
			},
			citation() {
				return this.block.citation;
			},
		},
	};
</script>

<template>
	<BaseQuote :quote="quoteContent" :cite="citation" />
</template>
