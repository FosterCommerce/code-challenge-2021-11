import BaseRadioList from '@/components/BaseRadioList';

export default {
	title: 'Base/Input/Radio List',
	component: BaseRadioList,
};

export const RadioList = (args) => ({
	props: Object.keys(args),
	data() {
		return {
			value: null,
		};
	},
	template: `
		<div>
			<BaseRadioList :options="options" :label="label" :instructions="instructions" :error="error" v-model="value" />
			<div class="mt-12">v-model: {{ value }}</div>
		</div>
  `,
});

RadioList.argTypes = {
	options: {
		control: 'object',
	},
	label: {
		control: 'text',
	},
	instructions: {
		control: 'text',
	},
	error: {
		control: 'text',
	},
};

RadioList.args = {
	options: [
		{
			value: 'General',
			label: 'General',
		},
		{
			value: 'Project inquiry',
			label: 'Project inquiry',
		},
		{
			value: 'Support',
			label: 'Support',
		},
	],
	label: 'Reason for message',
	instructions: 'Select one option below',
	error: 'Oops! We need this information',
};
