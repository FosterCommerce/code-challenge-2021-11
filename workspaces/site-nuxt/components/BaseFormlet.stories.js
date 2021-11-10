import BaseFormlet from '@/components/BaseFormlet';

export default {
	title: 'Base/input/Formlet',
	component: BaseFormlet,
};

export const Formlet = (args) => ({
	components: {
		BaseFormlet,
	},
	props: Object.keys(args),
	template: `
		<BaseFormlet :type="type" :placeholder="placeholder" :button-label="buttonLabel" :error="error" />
  `,
});

Formlet.argTypes = {
	type: {
		control: {
			type: 'select',
			options: ['text', 'email', 'tel', 'url', 'search'],
		},
	},
	placeholder: {
		control: 'text',
	},
	buttonLabel: {
		control: 'text',
	},
	error: {
		control: 'text',
	},
};

Formlet.args = {
	type: 'email',
	placeholder: 'Email',
	buttonLabel: 'Submit',
	error: '',
};
