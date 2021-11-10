import BaseHeading from '@/components/BaseHeading';

export default {
	title: 'Base/Typography/Heading',
	component: BaseHeading,
};

export const Heading = (args) => ({
	components: { BaseHeading },
	props: Object.keys(args),
	computed: {
		heading() {
			return this.default;
		},
	},
	template: `<BaseHeading :heading-level="headingLevel" :theme="theme">{{ heading }}</BaseHeading>`,
});

Heading.argTypes = {
	default: {
		control: 'text',
	},
	headingLevel: {
		control: {
			type: 'range',
			min: 1,
			max: 6,
			step: 1,
		},
	},
	theme: {
		control: {
			type: 'select',
			options: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		},
	},
};

Heading.args = {
	default: 'Default Heading',
	headingLevel: 2,
	theme: null,
};
