<script>
	export default {
		name: 'BlockRichText',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<template>
	<BaseRichText :body="block.html" />
</template>
