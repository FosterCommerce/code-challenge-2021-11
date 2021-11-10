import BaseCardPreview from '@/components/BaseCardPreview';
import BasePreview from '@/components/BasePreview';
import BaseImage from '@/components/BaseImage';
import BaseHeading from '@/components/BaseHeading';
import BaseButton from '@/components/BaseButton';
import BaseFormlet from '@/components/BaseFormlet';
import BaseIcon from '@/components/BaseIcon';

import cloud1 from '@/assets/images/cloud_1.png';
import cloud2 from '@/assets/images/cloud_2.png';
import doll from '@/assets/images/doll.png';

export default {
	title: 'Base/UI/Cards/Preview',
	component: BaseCardPreview,
};

export const Image = (args) => ({
	components: {
		BaseCardPreview,
		BasePreview,
		BaseHeading,
		BaseImage,
		BaseButton,
	},
	props: Object.keys(args),
	computed: {
		slotHeading() {
			return this.heading;
		},
	},
	template: `
		<div class="max-w-[366px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardPreview :alignment="alignment">
				<div class="space-y-8">
					<BaseHeading :heading-level="3" theme="h6">{{ heading }}</BaseHeading>
					<BaseButton :rounded="false" theme="tertiery">Listen now</BaseButton>
				</div>
				<template v-slot:preview>
					<BasePreview>
						<template v-slot:media>
							<div class="overflow-hidden rounded-lg">
								<BaseImage src="https://image.simplecastcdn.com/images/aca0cf4b-bad7-484c-84f1-7fbae864eb35/16ac4fdf-0bd1-4271-b2a8-afdd09bb6865/1550517903-artwork.jpg" alt="Commerce Minded" />
							</div>
						</template>
					</BasePreview>
				</template>
			</BaseCardPreview>
		</div>
  `,
});

Image.argTypes = {
	heading: {
		control: 'text',
	},
	alignment: {
		control: {
			type: 'select',
			options: ['vertical', 'horizontal'],
		},
	},
};

Image.args = {
	heading: 'Ecommerce Marketing and Tech with Lee Goldberg of Happy Cog',
	alignment: 'vertical',
};

export const Article = (args) => ({
	components: {
		BaseCardPreview,
		BasePreview,
		BaseHeading,
		BaseImage,
	},
	props: Object.keys(args),
	computed: {
		slotHeading() {
			return this.heading;
		},
		slotSummary() {
			return this.summary;
		},
	},
	template: `
		<div class="max-w-[366px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardPreview :alignment="alignment">
				<BaseHeading :heading-level="4" theme="h6">
					<a href="https://fostercommerce.com">{{ slotSummary }}</a>
				</BaseHeading>
				<template v-slot:preview>
					<BasePreview>
						<BaseHeading :heading-level="3" theme="h2">{{ slotHeading }}</BaseHeading>
						<template v-slot:media>
							<div class="relative w-full h-full">
								<div class="absolute top-[40px] right-[-10px] w-[115px]">
									<BaseImage src="/assets/images/cloud_2.png" alt="Image of a cloud" />
								</div>
							</div>
						</template>
					</BasePreview>
				</template>
			</BaseCardPreview>
		</div>
  `,
});

Article.argTypes = {
	heading: {
		control: 'text',
	},
	summary: {
		control: 'text',
	},
	alignment: {
		control: {
			type: 'select',
			options: ['vertical', 'horizontal'],
		},
	},
};

Article.args = {
	heading: 'Breaking news',
	summary: 'Craft Commerce Product Setup Walkthrough with Roger Glenn',
	alignment: 'vertical',
};

export const Episode = (args) => ({
	components: {
		BaseCardPreview,
		BasePreview,
		BaseHeading,
		BaseImage,
	},
	props: Object.keys(args),
	computed: {
		slotEyebrow() {
			return this.eyebrow;
		},
		slotHeading() {
			return this.heading;
		},
		slotSummary() {
			return this.summary;
		},
	},
	template: `
		<div class="max-w-[366px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardPreview :alignment="alignment">
				<BaseHeading :heading-level="4" theme="h6">
					<a href="https://fostercommerce.com">{{ slotSummary }}</a>
				</BaseHeading>
				<template v-slot:preview>
					<BasePreview>
						<BaseHeading :heading-level="3" theme="h2">{{ slotHeading }}</BaseHeading>
						<template v-slot:eyebrow>
							<h6 class="px-3 pb-1 pt-[6px] font-bold text-tertiery leading-none bg-body rounded-md" aria-label="Episode Number 21">{{ slotEyebrow }}</h6>
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
				</template>
			</BaseCardPreview>
		</div>
  `,
});

Episode.argTypes = {
	eyebrow: {
		control: 'text',
	},
	heading: {
		control: 'text',
	},
	summary: {
		control: 'text',
	},
	alignment: {
		control: {
			type: 'select',
			options: ['vertical', 'horizontal'],
		},
	},
};

Episode.args = {
	eyebrow: '#24',
	heading: 'Commerce Minded',
	summary: 'Ecommerce Marketing and Tech with Lee Goldberg of Happy Cog',
	alignment: 'vertical',
};

export const Newsletter = (args) => ({
	components: {
		BaseCardPreview,
		BasePreview,
		BaseImage,
		BaseFormlet,
		BaseIcon,
	},
	props: Object.keys(args),
	computed: {
		slotHeading() {
			return this.heading;
		},
		slotSubheading() {
			return this.subheading;
		},
		slotSummary() {
			return this.summary;
		},
	},
	template: `
		<div class="max-w-[366px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardPreview :alignment="alignment">
				<div class="space-y-3 lg:space-y-4">
					<BaseHeading :heading-level="3" theme="h3">{{ slotSubheading }}</BaseHeading>
					<p class="text-primary lg:text-xl">{{ slotSummary }}</p>
					<BaseFormlet type="email" placeholder="email" button-label="Submit" />
				</div>
				<template v-slot:preview>
					<BasePreview>
						<BaseIcon file="microphone" alt="Microphone Icon" classes="w-7 h-7" />
						<BaseHeading :heading-level="4" theme="h2">{{ slotHeading }}</BaseHeading>
						<h3 class="mt-1 text-xs text-highlight-primary font-bold">With Stephen Callender</h3>
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
				</template>
			</BaseCardPreview>
		</div>
  `,
});

Newsletter.argTypes = {
	heading: {
		control: 'text',
	},
	subheading: {
		control: 'text',
	},
	summary: {
		control: 'text',
	},
	alignment: {
		control: {
			type: 'select',
			options: ['vertical', 'horizontal'],
		},
	},
};

Newsletter.args = {
	heading: 'Commerce Minded',
	subheading: 'Commerce Minded?',
	summary: 'Subscribe to get insights, ideas and inspiration for all things ecommerce (and Craft)',
	alignment: 'horizontal',
};
