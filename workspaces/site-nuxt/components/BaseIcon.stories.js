import BaseIcon from '@/components/BaseIcon';

export default {
	title: 'Base/UI/Icon',
	component: BaseIcon,
};

export const Icon = (args) => ({
	components: { BaseIcon },
	props: Object.keys(args),
	template: `<BaseIcon :file="file" :alt="alt" :classes="classes" />`,
});

Icon.argTypes = {
	file: {
		control: {
			type: 'select',
			options: [
				'arrow-down',
				'arrow-left',
				'arrow-right',
				'arrow-up',
				'caret-down',
				'caret-left',
				'caret-right',
				'caret-up',
				'x',
				'microphone',
				'facebook',
				'linkedin',
				'twitter',
			],
		},
	},
	alt: {
		control: 'text',
	},
	classes: {
		control: 'text',
	},
};

Icon.args = {
	file: 'arrow-down',
	alt: '',
	classes: 'w-8 h-8',
};
