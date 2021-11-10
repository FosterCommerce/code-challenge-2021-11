<script>
	export default {
		name: 'BlockCallout',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			contentNodes() {
				return this.block.richText.nodes;
			},
			theme() {
				return this.block.theme === 'light' ? 'secondary' : 'primary';
			},
		},
	};
</script>

<template>
	<BaseCallout :theme="theme">
		<div class="space-y-6 | lg:space-y-8">
			<component
				:is="$helpers.blockName(node.type)"
				v-for="(node, index) in contentNodes"
				:key="index"
				:block="node"
			/>
		</div>
	</BaseCallout>
</template>
