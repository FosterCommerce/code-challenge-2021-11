<script>
	export default {
		name: 'BlockHeading',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			level() {
				return parseInt(this.block.headingTag.slice(1));
			},
		},
	};
</script>

<template>
	<BaseHeading :heading-level="level" :theme="block.headingTheme">
		<span v-html="$helpers.removeParagraphs(block.heading)" />
	</BaseHeading>
</template>
