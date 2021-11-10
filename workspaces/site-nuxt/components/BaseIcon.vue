<script>
	export default {
		name: 'BaseIcon',
		props: {
			/** The name of the SVG icon file in the assets/sprite/svg/icons directory you want to use */
			file: {
				type: String,
				required: true,
			},
			/** Alternate text for the icon */
			alt: {
				type: String,
				required: false,
				default: '',
			},
			/** Classes to apply to the component for styling (color, size) */
			classes: {
				type: String,
				required: false,
				default: '',
			},
		},
	};
</script>

<template>
	<span class="relative inline-block" :class="classes">
		<svg-icon
			:name="`icons/${file}`"
			:title="alt"
			fill="currentColor"
			class="absolute inset-0 block w-full h-full fill-current"
			:class="classes"
		></svg-icon>
	</span>
</template>
