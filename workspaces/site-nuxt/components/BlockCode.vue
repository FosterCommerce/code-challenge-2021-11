<script>
	export default {
		name: 'BlockCode',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			codeBlock() {
				return this.block.codeBlock;
			},
		},
	};
</script>

<template>
	<BaseCodeBlock :content="codeBlock" :language="block.codeLanguage" :caption="block.caption" />
</template>
