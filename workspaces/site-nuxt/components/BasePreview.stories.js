import BasePreview from '@/components/BasePreview';
import BaseHeading from '@/components/BaseHeading';
import BaseImage from '@/components/BaseImage';

import cloud1 from '@/assets/images/cloud_1.png';
import cloud2 from '@/assets/images/cloud_2.png';
import doll from '@/assets/images/doll.png';

export default {
	title: 'Base/UI/Previews',
	component: BasePreview,
};

// Article View

export const Article = (args) => ({
	components: {
		BaseHeading,
		BaseImage,
	},
	props: Object.keys(args),
	computed: {
		label() {
			return this.default;
		},
	},
	template: `
		<div class="max-w-[282px]">
			<BasePreview>
				<BaseHeading :heading-level="3" theme="h2">{{ label }}</BaseHeading>
				<template v-slot:media>
					<div class="relative w-full h-full">
						<div class="absolute top-[40px] right-[-10px] w-[115px]">
							<BaseImage src="/assets/images/cloud_2.png" alt="Image of a cloud" />
						</div>
					</div>
				</template>
			</BasePreview>
		</div>
  `,
});

Article.argTypes = {
	default: {
		control: 'text',
	},
};

Article.args = {
	default: 'Breaking news',
};

// Image View

export const Image = (args) => ({
	components: {
		BaseImage,
	},
	props: Object.keys(args),
	computed: {
		image() {
			return this.media;
		},
	},
	template: `
		<div class="max-w-[282px]">
			<BasePreview>
				<template v-slot:media>
					<div class="relative w-full h-full flex justify-center items-center overflow-hidden rounded-lg">
						<BaseImage :src="image" alt="Photo of Stephen" />
					</div>
				</template>
			</BasePreview>
		</div>
  `,
});

Image.argTypes = {
	media: {
		control: 'text',
	},
};

Image.args = {
	media:
		'https://image.simplecastcdn.com/images/aca0cf4b-bad7-484c-84f1-7fbae864eb35/16ac4fdf-0bd1-4271-b2a8-afdd09bb6865/1550517903-artwork.jpg',
};

// Podcast View

export const Episode = (args) => ({
	components: {
		BaseHeading,
		BaseImage,
	},
	props: Object.keys(args),
	computed: {
		label() {
			return this.default;
		},
		episode() {
			return this.eyebrow;
		},
	},
	template: `
		<div class="max-w-[282px]">
			<BasePreview>
				<BaseHeading :heading-level="3" theme="h2">{{ label }}</BaseHeading>
				<template v-slot:eyebrow>
					<h4 class="px-3 pb-1 pt-[6px] font-bold text-tertiery leading-none bg-body rounded-md" aria-label="Episode Number 21">{{ episode }}</h4>
				</template>
				<template v-slot:media>
					<div class="relative w-full h-full">
						<div class="absolute top-[32px] right-[-10px] w-[70px]">
							<BaseImage src="/assets/images/cloud_2.png" alt="Image of a cloud" />
						</div>
						<div class="absolute top-[78px] left-[-10px] w-[84px]">
							<BaseImage src="/assets/images/cloud_1.png" alt="Image of a cloud" />
						</div>
						<div class="absolute top-[24px] right-0 w-[165px]">
							<BaseImage src="/assets/images/doll.png" alt="Woman looking at a mobile phone" />
						</div>
					</div>
				</template>
			</BasePreview>
		</div>
  `,
});

Episode.argTypes = {
	default: {
		control: 'text',
	},
	eyebrow: {
		control: 'text',
	},
};

Episode.args = {
	default: 'Commerce Minded',
	eyebrow: '#24',
};
