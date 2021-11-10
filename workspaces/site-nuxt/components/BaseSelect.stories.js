import BaseSelect from '@/components/BaseSelect';

export default {
	title: 'Base/Input/Select',
	component: BaseSelect,
};

export const Select = (args) => ({
	props: Object.keys(args),
	data() {
		return {
			value: null,
		};
	},
	template: `
    <div>
      <BaseSelect
				:label="label"
				:required="required"
				:instructions="instructions"
				:error="error"
				:options="options"
				:theme="theme"
				v-model="value"
			/>
      <div class="mt-12">v-model: {{ value }}</div>
    </div>
  `,
});

Select.argTypes = {
	label: {
		control: 'text',
	},
	required: {
		control: 'boolean',
	},
	instructions: {
		control: 'text',
	},
	error: {
		control: 'text',
	},
	options: {
		control: 'object',
	},
	theme: {
		control: {
			type: 'select',
			options: ['primary', 'secondary'],
		},
	},
};

Select.args = {
	label: 'Choose an option',
	required: false,
	instructions: 'Use the dropdown below to make a selection',
	error: 'Oops! Something went wrong.',
	options: [
		{
			label: 'General',
			value: 1,
		},
		{
			label: 'Specific',
			value: 2,
		},
	],
	theme: 'primary',
};
