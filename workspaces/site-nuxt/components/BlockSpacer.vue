<script>
	export default {
		name: 'BlockSpacer',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			styles() {
				let classes = '';
				switch (this.block.height) {
					case 'none':
						classes = 'none';
						break;
					case 'small':
						classes += 'h-3 lg:h-4';
						break;
					case 'large':
						classes += 'h-8 md:h-10 lg:h-14';
						break;
					default:
						classes += 'h-5 md:h-8 lg:h-10';
				}
				return classes;
			},
		},
	};
</script>

<template>
	<div class="spacer" :class="styles" />
</template>
