import BaseQuote from '@/components/BaseQuote';

export default {
	title: 'Base/Typography/Quote',
	component: BaseQuote,
};

export const Quote = (args) => ({
	props: Object.keys(args),
	template: `
    <BaseQuote :quote="quote" :cite="cite" />
  `,
});

Quote.argTypes = {
	quote: {
		control: 'text',
	},
	cite: {
		control: 'text',
	},
};

Quote.args = {
	quote: "<p>Here's a thing someone said once</p>",
	cite: 'This guy said it, Probably',
};
