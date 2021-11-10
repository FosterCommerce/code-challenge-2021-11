<script>
	import { ValidationObserver, ValidationProvider } from 'vee-validate';
	import { nanoid } from 'nanoid';
	import BaseButton from '@/components/BaseButton';

	/** A base "Formlet" component consisting of a single input and a submit button. */

	export default {
		name: 'BaseFormlet',
		components: {
			ValidationObserver,
			ValidationProvider,
			BaseButton,
		},
		props: {
			/** The type of input to render */
			type: {
				type: String,
				required: false,
				default: 'text',
				validator: (propValue) => ['text', 'email', 'tel', 'url', 'search'].includes(propValue),
			},
			/** Placeholder rendered inside of the input, also used for A11y label */
			placeholder: {
				type: String,
				required: true,
			},
			/** The label text of the button */
			buttonLabel: {
				type: String,
				required: false,
				default: 'Submit',
			},
			/** Disable the button */
			disable: {
				type: Boolean,
			},
		},
		data() {
			return {
				// unique ID for the input. used to programmatically link instructions, label, and errors
				inputId: nanoid(),
				value: '',
			};
		},
		computed: {
			fieldRules() {
				let rules = 'required';
				if (this.type === 'email') {
					rules += '|email';
				}
				return rules;
			},
		},
		methods: {
			submitInput() {
				this.$emit('submit', this.value);
			},
		},
	};
</script>

<template>
	<ValidationObserver v-slot="{ handleSubmit }">
		<form class="relative -mb-6 pb-6" @submit.prevent="handleSubmit(submitInput)">
			<label :id="`${inputId}-hint`" :for="inputId" class="sr-only">{{ placeholder }}</label>
			<ValidationProvider v-slot="{ errors, touched }" :name="placeholder" :rules="fieldRules">
				<div
					class="flex flex-nowrap justify-between items-center h-[60px] px-1 bg-white rounded-full"
				>
					<input
						:id="inputId"
						v-model="value"
						v-bind="$attrs"
						:type="type"
						:placeholder="placeholder"
						:required="true"
						:aria-describedby="`${errors.length ? `${inputId}-error` : `${inputId}-hint`}`"
						class="
							w-2/3
							h-12
							mr-1
							pl-5
							text-xs
							md:text-lg
							rounded-full
							md:w-auto md:flex-grow md:pl-6
						"
					/>
					<BaseButton :rounded="true" type="submit" class="flex-shrink" :disabled="disable">
						<span class="lg:hidden">OK!</span>
						<span class="hidden lg:display-block">{{ buttonLabel }}</span>
					</BaseButton>
				</div>

				<div
					v-if="errors.length && touched"
					:id="`${inputId}-error`"
					class="absolute bottom-0 px-5 text-xs text-red-800 | md:px-6"
					role="alert"
				>
					{{ errors[0] }}
				</div>
			</ValidationProvider>
		</form>
	</ValidationObserver>
</template>
