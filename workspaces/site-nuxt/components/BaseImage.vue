<script>
	/** Base Image | Defaults to using src prop at all screen sizes unless a desktop src is provided. Optional slot for caption */
	export default {
		name: 'BaseImage',
		props: {
			/** The source url or file path for the image */
			src: {
				type: String,
				required: true,
				default: null,
			},
			/** Optional image source URL for desktop devices */
			desktopSrc: {
				type: String,
				default: null,
			},
			/** Image alt text */
			alt: {
				type: String,
				required: false,
				default: ' ',
			},
			/** Classes to be applied directly to the image tag */
			imgClasses: {
				type: String,
				default: null,
			},
			/** Mask shape for the image */
			mask: {
				type: String,
				required: false,
				default: 'auto',
				validator: (propValue) => ['auto', 'rounded'].includes(propValue),
			},
		},
	};
</script>

<template>
	<figure>
		<div :class="`mask-${mask}`">
			<picture class="block">
				<source v-if="desktopSrc" media="(min-width: 720px)" :srcset="desktopSrc" />
				<img :srcset="src" :alt="alt" :class="imgClasses" />
			</picture>
		</div>
		<figcaption
			v-if="$slots.caption && $scopedSlots.caption"
			class="block mt-1 text-sm text-center text-tertiery | lg:text-base"
		>
			<!-- @slot The caption content slot -->
			<slot name="caption"></slot>
		</figcaption>
	</figure>
</template>

<style lang="postcss" scoped>
	img,
	picture {
		min-width: 100%;
	}

	.mask-rounded {
		clip-path: url(#maskRounded);
	}
</style>
