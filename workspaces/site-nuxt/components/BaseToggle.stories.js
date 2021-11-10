import BaseToggle from '@/components/BaseToggle';

export default {
	title: 'Base/Input/Toggle',
	component: BaseToggle,
};

export const Toggle = (args) => ({
	props: Object.keys(args),
	data() {
		return {
			value: null,
		};
	},
	template: `
    <div>
      <BaseToggle
				:options="options"
				:label="label"
				:instructions="instructions"
				:error="error"
				v-model="value"
			/>
			<div class="mt-12">v-model: {{ value }}</div>
    </div>
  `,
});

Toggle.argTypes = {
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

Toggle.args = {
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
	label: 'Select an option',
	instructions: 'Select one option below',
	error: 'Oops! We need this information',
};
