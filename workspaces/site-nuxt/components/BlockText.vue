<script>
	export default {
		name: 'BlockText',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			classes() {
				let styles = '';

				const styleKeys = ['font', 'textColor', 'textSize', 'textAlignment'];

				const reducer = (accumulator, currentVal) => {
					if (this.block[currentVal] != null) {
						switch (currentVal) {
							case 'font':
								accumulator += ` font-${this.block.font}`;
								break;
							case 'textSize':
								accumulator += ` text-${this.block.textSize}`;
								break;
							case 'textAlignment':
								accumulator += ` text-${this.block.textAlignment}`;
								break;
							case 'textColor':
								accumulator += ` text-${this.block.textColor}`;
								break;
						}
					}
					return accumulator;
				};

				styles = styleKeys.reduce(reducer, styles);

				return styles;
			},
		},
	};
</script>

<template>
	<p :class="classes"><span v-html="block.plainText" /></p>
</template>
