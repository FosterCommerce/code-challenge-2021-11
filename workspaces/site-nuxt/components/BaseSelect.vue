<script>
	import { nanoid } from 'nanoid';

	/** Base Select | V-model binds to @change */

	export default {
		name: 'BaseSelect',
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			/** An array options to be rendered in the select list */
			options: {
				type: Array,
				required: true,
				default: () => [],
			},
			/** Optional value to pass in */
			value: {
				type: [String, Number],
				default: null,
			},
			/** One of either select-primary or select-secondary */
			theme: {
				type: String,
				default: 'primary',
				validator: (propValue) => ['primary', 'secondary', 'tertiery'].includes(propValue),
			},
			/** What's rendered in the UI as the label for the select */
			label: {
				type: String,
				required: false,
				default: null,
			},
			/** Is this field required? */
			required: {
				type: Boolean,
				default: false,
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
				selectId: nanoid(),
			};
		},
		computed: {
			// This removes the native change events allowing us to emit the select value to the parent for v-model usage.
			listeners() {
				const { change, ...listeners } = this.$listeners;
				return listeners;
			},
			currentVal() {
				if (this.value) {
					return this.value;
				} else {
					return this.options[0].value;
				}
			},
		},
	};
</script>

<template>
	<div class="relative flex flex-col pb-6">
		<label v-if="label" :for="selectId"> {{ label }} <span v-if="required">*</span> </label>

		<span v-if="instructions" :id="`${selectId}-hint`" class="text-xs opacity-50">
			{{ instructions }}
		</span>

		<select
			:id="selectId"
			:class="`appearance-none bg-highlight-primary rounded-full px-5 h-[60px] text-white select-${theme} mt-2`"
			:value="currentVal"
			:required="required"
			:aria-describedby="`${error ? `${selectId}-error` : `${selectId}-hint`}`"
			v-on="listeners"
			@change="$emit('change', $event.target.value)"
		>
			<option v-for="(option, index) in options" :key="index" :value="option.value">
				{{ option.label }}
			</option>
		</select>

		<span
			v-if="error"
			:id="`${selectId}-error`"
			class="absolute top-full text-xs text-red-800 -mt-4"
			role="alert"
		>
			{{ error }}
		</span>
	</div>
</template>

<style lang="postcss" scoped>
	select {
		position: relative;

		&.select-primary {
			background: #de6f47
				url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='20' height='20' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
				no-repeat;
			background-position: right 1rem top 50%;
		}

		&.select-secondary {
			color: #de6f47;
			background: #fff
				url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='20' height='20' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='black' /></g></svg>")
				no-repeat;
			background-position: right 1rem top 50%;
		}
	}
</style>
