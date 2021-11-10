import BaseCardGraphic from '@/components/BaseCardGraphic';
import BaseImage from '@/components/BaseImage';
import BaseHeading from '@/components/BaseHeading';
import BaseButton from '@/components/BaseButton';

export default {
	title: 'Base/UI/Cards/Graphic',
	component: BaseCardGraphic,
};

const shipStationLogo = require('@/assets/images/shipstation-logo.svg');

export const Linked = (args) => ({
	components: {
		BaseCardGraphic,
		BaseImage,
		BaseHeading,
	},
	props: Object.keys(args),
	data() {
		return {
			logo: shipStationLogo,
		};
	},
	computed: {
		slotHeading() {
			return this.heading;
		},
		slotSummary() {
			return this.summary;
		},
	},
	template: `
		<div class="max-w-[300px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardGraphic :alignment="alignment">
				<div class="space-y-5">
					<BaseHeading :heading-level="3" theme="h2">
						<a href="https://fostercommerce.com">{{ heading }}</a>
					</BaseHeading>
					<p class="text-tertiery">{{ summary }}</p>
				</div>
				<template v-slot:media>
					<BaseImage :src="logo" alt="ShipStation Logo" />
				</template>
			</BaseCardGraphic>
		</div>
  `,
});

Linked.argTypes = {
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

Linked.args = {
	heading: 'ShipStation Connect',
	summary: "Seamless integration of your customer's data to ship products faster.",
	alignment: 'vertical',
};

export const Button = (args) => ({
	components: {
		BaseCardGraphic,
		BaseImage,
		BaseHeading,
		BaseButton,
	},
	props: Object.keys(args),
	data() {
		return {
			logo: shipStationLogo,
		};
	},
	computed: {
		slotHeading() {
			return this.heading;
		},
		slotSummary() {
			return this.summary;
		},
	},
	template: `
		<div class="max-w-[300px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
			<BaseCardGraphic :alignment="alignment">
				<div class="space-y-5">
					<BaseHeading :heading-level="3" theme="h2">{{ heading }}</BaseHeading>
					<p class="text-tertiery">{{ summary }}</p>
				</div>
				<template v-slot:footer>
					<BaseButton theme="tertiery" :rounded="false" url="https://fostercommerce.com">View Plugin</BaseButton>
				</template>
				<template v-slot:media>
					<BaseImage :src="logo" alt="ShipStation Logo" />
				</template>
			</BaseCardGraphic>
		</div>
  `,
});

Button.argTypes = {
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

Button.args = {
	heading: 'ShipStation Connect',
	summary: "Seamless integration of your customer's data to ship products faster.",
	alignment: 'vertical',
};
