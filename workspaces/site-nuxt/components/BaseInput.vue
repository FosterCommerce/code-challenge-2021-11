<script>
	import { nanoid } from 'nanoid';

	/** A base text input that can be set to multiple types. */

	export default {
		name: 'BaseInput',
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			/** The type of input to render */
			type: {
				type: String,
				required: false,
				default: 'text',
				validator: (propValue) => ['text', 'email', 'tel', 'url', 'search'].includes(propValue),
			},
			/** What's rendered in the UI as the label for the input */
			label: {
				type: String,
				required: true,
			},
			/** Optional: placeholder rendered inside of the input */
			placeholder: {
				type: String,
				default: null,
			},
			/** Is this field required? */
			required: {
				type: Boolean,
				default: false,
			},
			/** Instructions on the type of input expected */
			instructions: {
				type: String,
				default: null,
			},
			/** The initial value */
			value: {
				type: String,
				required: false,
				default: '',
			},
			/** The error related to this input field */
			error: {
				type: String,
				default: null,
			},
		},
		data() {
			return {
				// unique ID for the input. used to programmatically link instructions, label, and errors
				inputId: '',
				name: '',
			};
		},
		mounted() {
			this.inputId = nanoid();
		},
	};
</script>

<template>
	<div class="relative flex flex-col pb-6">
		<label :for="inputId" class="mb-1 leading-tight">
			{{ label }} <span v-if="required">*</span>
		</label>

		<span v-if="instructions" :id="`${inputId}-hint`" class="text-xs opacity-50">
			{{ instructions }}
		</span>

		<input
			v-bind="$attrs"
			:id="inputId"
			:value="value"
			:type="type"
			class="rounded px-5 h-[60px] w-full text-lg mt-2"
			:placeholder="placeholder"
			:required="required"
			:aria-describedby="`${error ? `${inputId}-error` : `${inputId}-hint`}`"
			@input="$emit('input', $event.target.value)"
		/>

		<span
			v-if="error"
			:id="`${inputId}-error`"
			class="absolute bottom-0 text-xs text-red-800 top-full -mt-4"
			role="alert"
		>
			{{ error }}
		</span>
	</div>
</template>
