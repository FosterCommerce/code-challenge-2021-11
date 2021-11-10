import BaseLink from '@/components/BaseLink';
import BaseIcon from '@/components/BaseIcon';

export default {
	title: 'Base/Typography/Link',
	component: BaseLink,
};

export const Link = (args) => ({
	props: Object.keys(args),
	components: { BaseIcon },
	computed: {
		text() {
			return this.default;
		},
	},
	template: `
  <BaseLink :url="url" :classes="classes">{{ text }}</BaseLink>`,
});

Link.argTypes = {
	default: {
		control: 'text',
	},
	url: {
		control: 'text',
	},
	classes: {
		control: 'text',
	},
};

Link.args = {
	default: 'Our Approach',
	url: 'http://localhost:3003/about',
	classes: '',
};
