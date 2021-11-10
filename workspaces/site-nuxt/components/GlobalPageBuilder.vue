<script>
	/** The global page builder component */
	export default {
		name: 'GlobalPageBuilder',
		props: {
			/** The Neo page builder blocks */
			nodes: {
				type: Array,
				default: () => [],
			},
		},
	};
</script>

<template>
	<div>
		<component
			:is="$helpers.rowName(node.type)"
			v-for="(node, index) in nodes"
			:key="index"
			:row="node"
		/>
	</div>
</template>
