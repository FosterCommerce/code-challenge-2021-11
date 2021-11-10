import BaseImage from '@/components/BaseImage';

export default {
	title: 'Base/Media/Image',
	component: BaseImage,
};

export const Image = (args) => ({
	props: Object.keys(args),
	computed: {
		captionText() {
			return this.caption;
		},
	},
	template: `
  <div>
    <BaseImage :src="src" :alt="alt" :desktop-src="desktopSrc">
			<template v-slot:caption>
				{{ captionText }}
			</template>
		</BaseImage>
  </div>
  `,
});

Image.argTypes = {
	src: {
		control: 'text',
	},
	desktopSrc: {
		control: 'text',
	},
	alt: {
		control: 'text',
	},
	caption: {
		control: 'text',
	},
};

Image.args = {
	src: 'https://source.unsplash.com/random',
	desktopSrc: '',
	alt: 'Image alt text',
	caption: '',
};
