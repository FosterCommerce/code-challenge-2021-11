<script>
	/** The global content builder component */

	export default {
		name: 'GlobalContentBuilder',
		props: {
			/** The Vizy content builder field nodes */
			nodes: {
				type: Array,
				default: () => [],
			},
			/** Dow we need to add extra horizontal padding? */
			padding: {
				type: Boolean,
				required: false,
			},
		},
	};
</script>

<template>
	<div class="space-y-6 | lg:space-y-8 | wysiwyg">
		<Block
			v-for="(node, index) in nodes"
			:key="index"
			:margin="node.margin ? node.margin : ''"
			:width="node.blockWidth ? node.blockWidth : ''"
			:padding="padding"
			:is-text-node="$helpers.isTextNode(node.type)"
		>
			<component :is="$helpers.blockName(node.type)" :block="node" />
		</Block>
	</div>
</template>

<style lang="postcss" scoped>
	.wysiwyg {
		>>> .spacer {
			margin-top: -32px;
		}
	}
</style>
