import BaseRichText from '@/components/BaseRichText';

export default {
	title: 'Base/Typography/Rich Text',
	component: BaseRichText,
};

export const RichText = (args) => ({
	props: Object.keys(args),
	template: `
    <BaseRichText :body="body" :class="classes" />
  `,
});

RichText.argTypes = {
	body: {
		control: 'text',
	},
	classes: {
		control: 'text',
	},
};

RichText.args = {
	body: '<p>Easy to learn and extremely powerful, Cinema 4D is the perfect package for all 3D artists who want to achieve breathtaking results fast and hassle-free. Beginners and seasoned professionals alike can take advantage of Cinema 4D’s wide range of tools and features to quickly achieve stunning results. Cinema 4D’s legendary reliability also makes it the perfect application for demanding, fast-paced 3D production.</p>',
	classes: '',
};
