import BaseButton from '@/components/BaseButton';

export default {
	title: 'Base/Input/Button',
	component: BaseButton,
};

export const Button = (args) => ({
	components: { BaseButton },
	props: Object.keys(args),
	computed: {
		label() {
			return this.default;
		},
	},
	template: `<BaseButton :theme="theme" :rounded="rounded" :url="url">{{ label }}</BaseButton>`,
});

Button.argTypes = {
	// button text
	default: {
		control: 'text',
	},
	theme: {
		control: {
			type: 'select',
			options: ['primary', 'secondary', 'tertiery'],
		},
	},
	rounded: {
		control: 'boolean',
	},
	url: {
		control: 'text',
	},
};

Button.args = {
	default: 'Learn More',
	theme: 'primary',
	rounded: true,
	url: '',
};
