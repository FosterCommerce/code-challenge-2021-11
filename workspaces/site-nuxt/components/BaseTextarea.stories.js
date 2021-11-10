import BaseTextarea from '@/components/BaseTextarea';

export default {
	title: 'Base/Input/Textarea',
	component: BaseTextarea,
};

export const Textarea = (args) => ({
	props: Object.keys(args),
	data() {
		return {
			value: '',
		};
	},
	template: `
    <div>
      <BaseTextarea
				:label="label"
				:placeholde="placeholder"
				:required="required"
				:instructions="instructions"
				:error="error"
				:rows="rows"
				v-model="value"
			/>
      <div class="mt-12">v-model: {{ value }}</div>
    </div>
  `,
});

Textarea.argTypes = {
	label: {
		control: 'text',
	},
	placeholder: {
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
	rows: {
		control: {
			type: 'range',
			min: 2,
			max: 10,
			step: 1,
		},
	},
};

Textarea.args = {
	label: 'Your comments',
	placeholder: 'What are your thoughts?',
	required: false,
	instructions: 'Use the keyboard to write stuff.',
	error: 'Oops! Something went wrong!',
	rows: 6,
};
