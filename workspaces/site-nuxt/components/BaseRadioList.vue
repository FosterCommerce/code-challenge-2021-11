<script>
	import { nanoid } from 'nanoid';

	/** Base Radio component | Binds to @change events */

	export default {
		name: 'BaseRadioList',
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			/** Optional value to pass in */
			initialValue: {
				type: [String, Number],
				default: null,
			},
			/** An array of objects with the properties value and label */
			options: {
				type: Array,
				required: true,
			},
			/** Label of the radio field itself */
			label: {
				type: String,
				required: false,
				default: null,
			},
			/** Instructions on the type of select expected */
			instructions: {
				type: String,
				default: null,
			},
			/** The error related to this select field */
			error: {
				type: String,
				default: null,
			},
		},
		data() {
			return {
				// unique ID for the input. used to programmatically link instructions, label, and errors
				inputId: '',
				value: this.initialValue,
			};
		},
		mounted() {
			this.inputId = nanoid();
		},
	};
</script>

<template>
	<fieldset class="relative pb-6">
		<legend v-if="label" :class="`${instructions ? '' : 'mb-2'}`">{{ label }}</legend>

		<span v-if="instructions" :id="`${inputId}-hint`" class="block text-xs opacity-50 mb-2">
			{{ instructions }}
		</span>

		<div class="flex flex-row bg-white rounded-full h-[60px] p-[6px] text-tertiery">
			<div
				v-for="(option, index) in options"
				:key="index"
				class="flex-grow radio-btn text-center h-full"
				role="radiogroup"
			>
				<input
					:id="`${inputId}-${index}`"
					type="radio"
					:value="option.value"
					:checked="option.value === value"
					:name="`${inputId}`"
					class="absolute opacity-0 h-0 w-0"
					:aria-describedby="`${error ? `${inputId}-error` : `${inputId}-hint`}`"
					@change="$emit('change', $event.target.value)"
				/>
				<label
					:for="`${inputId}-${index}`"
					class="flex items-center justify-center w-full h-full rounded-full cursor-pointer"
				>
					{{ option.label }}
				</label>
			</div>
		</div>

		<span
			v-if="error"
			:id="`${inputId}-error`"
			class="absolute bottom-0 text-xs text-red-800 mt-2"
			role="alert"
			>{{ error }}</span
		>
	</fieldset>
</template>

<style lang="postcss" scoped>
	.radio-btn {
		input:checked + label {
			@apply bg-highlight-primary text-white;
		}

		input:focus + label {
			@apply ring-2 ring-highlight-secondary ring-offset-2 outline-none !important;
		}
	}
</style>
