<script>
	/** A content row component for the page builder */

	export default {
		name: 'RowContentBlocks',
		props: {
			/** The row object */
			row: {
				type: Object,
				required: true,
			},
		},
		computed: {
			/** Get the max width of the content area based on the 'width' field */
			contentWidth() {
				return this.$helpers.elementWidthClass(this.row.width);
			},
			/** Get the wrapper classes */
			wrapperClasses() {
				return this.row.width === 'full' ? 'mx-0 px-0 max-w-full' : 'mx-auto px-8 max-w-[1230px]';
			},
			/** If the row is full width, then it's children may need padding */
			padding() {
				return this.row.width === 'full';
			},
		},
	};
</script>

<template>
	<component :is="row.elementType" :class="wrapperClasses">
		<GlobalContentBuilder
			:nodes="row.contentBlocks.nodes"
			:padding="padding"
			:class="contentWidth"
		/>
	</component>
</template>
