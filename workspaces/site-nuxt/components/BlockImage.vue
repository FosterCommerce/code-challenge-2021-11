<script>
	export default {
		name: 'BlockImage',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			imageSrc() {
				return this.block.image[0].originalWebp;
			},
			imageAlt() {
				return this.block.image[0].altText;
			},
			mask() {
				return this.block.imageShape ?? 'auto';
			},
		},
	};
</script>

<template>
	<BaseImage :src="imageSrc" :alt="imageAlt" :mask="mask" class="py-2">
		<template v-if="block.caption" v-slot:caption>
			{{ block.caption }}
		</template>
	</BaseImage>
</template>
