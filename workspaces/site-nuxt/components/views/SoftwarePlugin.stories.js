import SoftwarePlugin from '@/components/views/SoftwarePlugin';

export default {
	title: 'Code Challenge/Software Page',
	component: SoftwarePlugin,
};

export const Page = () => ({
	components: { SoftwarePlugin },
	template: `<SoftwarePlugin />`,
});
