<script>
	/** This is an abstract 'block' component used to wrap around all the blocks in the global content builder
	 * to allow for margin and width overrides within the content builder without tampering with the inner
	 * block components classes */

	export default {
		name: 'Block',
		props: {
			/** The Tailwind margin class string overrides */
			margin: {
				type: String,
				required: false,
				default: '',
			},
			/** The Tailwind width class string overrides */
			width: {
				type: String,
				required: false,
				default: '',
			},
			/** Do we need to add extra horizontal padding? */
			padding: {
				type: Boolean,
				required: false,
			},
			/** If this is a Vizy text node */
			isTextNode: {
				type: Boolean,
				required: false,
			},
		},
		computed: {
			/** Computes the wrapping element class */
			wrapperClasses() {
				let classStr = '';
				const marginClasses = this.margin ? this.$helpers.elementMarginClass(this.margin) : null;

				// If the element has a width set, or if the parent is full width and the node type is a Vizy text node
				if (this.$helpers.elementWidthClass(this.width) || (this.isTextNode && this.padding)) {
					classStr = 'mx-auto max-w-[1230px]';
				}

				// If we need to set a vertical margin other than auto
				if (marginClasses) {
					classStr += ` ${marginClasses}`;
				}

				// If we need to add horizontal padding
				if (this.padding && this.width !== 'full' && this.width !== 'auto') {
					classStr += ' px-8';
				}

				return classStr;
			},
			/** Computes the block elements override classes */
			blockClasses() {
				let classStr = '';

				// If the element has a width set, or if the parent is full width and the node type is a Vizy text node
				if (this.isTextNode && this.padding) {
					classStr = 'max-w-[825px]';
				} else {
					classStr = this.width ? this.$helpers.elementWidthClass(this.width) : '';
				}

				return classStr;
			},
		},
	};
</script>

<template>
	<div :class="wrapperClasses">
		<div :class="blockClasses">
			<slot />
		</div>
	</div>
</template>
