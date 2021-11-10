import BaseCallout from '@/components/BaseCallout';

export default {
	title: 'Base/UI/Callout',
	component: BaseCallout,
};

export const Callout = (args) => ({
	props: Object.keys(args),
	computed: {
		content() {
			return this.default;
		},
		buttonTheme() {
			if (this.theme === 'secondary') {
				return 'primary';
			} else {
				return 'secondary';
			}
		},
		showButton() {
			return this.button;
		},
	},
	template: `
		<BaseCallout :theme="theme">
			<p :class="{ 'text-3xl font-medium': theme === 'primary', 'text-4xl': theme === 'secondary', 'mb-3': showButton }">{{ content }}</p>
			<BaseButton v-if="showButton" :theme="buttonTheme" :rounded="true">Learn More</BaseButton>
		</BaseCallout>
  `,
});

Callout.argTypes = {
	default: {
		control: 'text',
	},
	theme: {
		control: {
			type: 'select',
			options: ['primary', 'secondary'],
		},
	},
	button: {
		control: 'boolean',
	},
};

Callout.args = {
	default: 'Learn about how we do things',
	theme: 'primary',
	button: true,
};
