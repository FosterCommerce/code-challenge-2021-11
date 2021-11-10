import BaseInput from '@/components/BaseInput';

export default {
	title: 'Base/Input/Input',
	component: BaseInput,
};

export const Input = (args) => ({
	props: Object.keys(args),
	data() {
		return {
			value: '',
		};
	},
	template: `
  <div>
    <BaseInput
			:type="type"
			:label="label"
			:placeholder="placeholder"
			:required="required"
			:instructions="instructions"
			:error="error"
			v-model="value"
		/>

    <div class="mt-12">
    	<span>v-model: {{ value }}</span>
    </div>
  </div>`,
});

Input.argTypes = {
	type: {
		control: {
			type: 'select',
			options: ['text', 'email', 'tel', 'url', 'search'],
		},
	},
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
};

Input.args = {
	type: 'text',
	label: 'First Name',
	placeholder: "What's your name?",
	required: false,
	instructions: 'Type the letters that create your name',
	error: 'Oops! Something went wrong.',
};
