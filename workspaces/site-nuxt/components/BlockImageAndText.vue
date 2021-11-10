<script>
	export default {
		name: 'BlockImageAndText',
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
			imageSrc() {
				return this.block.image[0].originalWebp
					? this.block.image[0].originalWebp
					: this.block.image[0].url;
			},
			imageAlt() {
				return this.block.image[0].altText;
			},
			alignment() {
				return this.block.mediaAlignment === 'left' ? 'right' : 'left';
			},
			mask() {
				return this.block.imageShape ?? 'auto';
			},
		},
	};
</script>

<template>
	<BaseLayoutColumns layout="thirds" :align="alignment" valign="center" gap="medium">
		<div class="space-y-6 | lg:space-y-8">
			<Block
				v-for="(node, index) in contentNodes"
				:key="index"
				:margin="node.margin ? node.margin : ''"
				:width="node.blockWidth ? node.blockWidth : ''"
				:padding="false"
			>
				<component :is="$helpers.blockName(node.type)" :block="node" />
			</Block>
		</div>
		<template v-slot:aside>
			<BaseImage :src="imageSrc" class="max-w-[240px] md:max-w-none" :alt="imageAlt" :mask="mask" />
		</template>
	</BaseLayoutColumns>
</template>
