<script>
	import { nanoid } from 'nanoid';

	/** Base textarea */

	export default {
		name: 'BaseTextarea',
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			/** What's rendered in the UI as the label for the textarea */
			label: {
				type: String,
				required: true,
			},
			/** Optional: placeholder rendered inside of the textarea */
			placeholder: {
				type: String,
				default: null,
			},
			/** Is this field required */
			required: {
				type: Boolean,
				default: false,
			},
			/** Instructions on the type of textarea expected */
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
			/** The error related to this textarea field */
			error: {
				type: String,
				default: null,
			},
			/** The number of rows for the inputs height */
			rows: {
				type: Number,
				default: 4,
			},
		},
		data() {
			return {
				// unique ID for the textarea. used to programmatically link instructions, label, and errors
				textareaId: '',
			};
		},
		mounted() {
			this.textareaId = nanoid();
		},
	};
</script>

<template>
	<div class="relative flex flex-col pb-6">
		<label :for="textareaId"> {{ label }} <span v-if="required">*</span> </label>

		<span v-if="instructions" :id="`${textareaId}-hint`" class="text-xs opacity-50">
			{{ instructions }}
		</span>

		<textarea
			:id="textareaId"
			:value="value"
			class="rounded w-full p-5 text-lg mt-2"
			:placeholder="placeholder"
			:rows="rows"
			:required="required"
			:aria-describedby="`${error ? `${textareaId}-error` : `${textareaId}-hint`}`"
			@input="$emit('input', $event.target.value)"
		/>
		<span
			v-if="error"
			:id="`${textareaId}-error`"
			class="absolute top-full text-xs text-red-800 -mt-4"
			role="alert"
		>
			{{ error }}
		</span>
	</div>
</template>
