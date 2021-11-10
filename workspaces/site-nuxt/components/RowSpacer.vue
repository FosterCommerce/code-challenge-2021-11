<script>
	/** A vertical spacer row component for the page builder */
	export default {
		name: 'RowSpacer',
		props: {
			/** The row object */
			row: {
				type: Object,
				required: true,
			},
		},
		computed: {
			/** Get the height of the spacer based on the 'height' field */
			spacerHeight() {
				let height = '';
				switch (this.row.height) {
					case 'small':
						height = 'h-6 lg:h-8';
						break;
					case 'large':
						height = 'h-16 md:h-28 lg:h-48';
						break;
					default:
						height = 'h-12 md:h-16 lg:h-32';
				}
				return height;
			},
		},
	};
</script>

<template>
	<div :class="spacerHeight" />
</template>
