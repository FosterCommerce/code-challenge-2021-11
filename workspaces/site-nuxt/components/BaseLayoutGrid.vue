<script>
	/** A base grid component with controls for columns and grid gap */

	export default {
		name: 'BaseLayoutGrid',
		props: {
			/** The number of grid columns to display the content in */
			columns: {
				type: [String, Number],
				required: false,
				default: 3,
				validator: (propValue) => {
					const columns = parseInt(propValue);
					return columns >= 1 && columns <= 12;
				},
			},
			/** The amount if gap between grid cells */
			gap: {
				type: String,
				required: false,
				default: 'medium',
				validator: (propValue) => ['none', 'small', 'medium', 'large'].includes(propValue),
			},
			/** The HTML element to use as the parent element  */
			element: {
				type: String,
				required: false,
				default: 'div',
				validator: (propValue) =>
					['div', 'section', 'article', 'header', 'footer'].includes(propValue),
			},
		},
		computed: {
			columnCalc() {
				const columnMap = {};
				const columns = parseInt(this.columns);
				if (columns === 2) {
					columnMap.sm = 1;
					columnMap.md = 2;
					columnMap.lg = 2;
				} else if (columns === 3) {
					columnMap.sm = 1;
					columnMap.md = 2;
					columnMap.lg = 3;
				} else if (columns === 4) {
					columnMap.sm = 2;
					columnMap.md = 3;
					columnMap.lg = 4;
				} else if (columns >= 5 && columns < 8) {
					columnMap.sm = columns - 2;
					columnMap.md = columns - 1;
					columnMap.lg = columns;
				} else if (columns >= 8) {
					columnMap.sm = columns - 4;
					columnMap.md = columns - 2;
					columnMap.lg = columns;
				} else {
					columnMap.sm = 1;
					columnMap.md = 1;
					columnMap.lg = 1;
				}
				return columnMap;
			},
			columnClasses() {
				return `sm:grid-cols-${this.columnCalc.sm} md:grid-cols-${this.columnCalc.md} lg:grid-cols-${this.columnCalc.lg}`;
			},
			gapClass() {
				switch (this.gap) {
					case 'small':
						return 'gap-4';
					case 'medium':
						return 'gap-12';
					case 'large':
						return 'gap-24';
					default:
						return 'gap-0';
				}
			},
		},
	};

	/** Note: Do not remove this comment block.
	 * These values are here so Tailwind JIT mode does not purge them.
	 * See : https://tailwindcss.com/docs/just-in-time-mode#known-limitations
	 *
	 * sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4
	 * sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8
	 * sm:grid-cols-9 sm:grid-cols-10 sm:grid-cols-11 sm:grid-cols-12
	 * md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4
	 * md:grid-cols-5 md:grid-cols-6 md:grid-cols-7 md:grid-cols-8
	 * md:grid-cols-9 md:grid-cols-10 md:grid-cols-11 md:grid-cols-12
	 * lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4
	 * lg:grid-cols-5 lg:grid-cols-6 lg:grid-cols-7 lg:grid-cols-8
	 * lg:grid-cols-9 lg:grid-cols-10 lg:grid-cols-11 lg:grid-cols-12
	 */
</script>

<template>
	<component :is="element" :class="`grid grid-cols-1 items-stretch ${columnClasses} ${gapClass}`">
		<!-- @slot The main content slot -->
		<slot />
	</component>
</template>
