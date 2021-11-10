<script>
	import BaseSelect from '@/components/BaseSelect';
	import BaseRadioList from '@/components/BaseRadioList';

	/** Base Toggle component | renders radio buttons on desktop and a select on mobile */

	export default {
		name: 'BaseToggle',
		components: {
			BaseSelect,
			BaseRadioList,
		},
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			/** Optional value to pass in */
			initialValue: {
				type: [String, Number],
				required: false,
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
				value: this.initialValue,
			};
		},
		watch: {
			value() {
				this.$emit('change', this.value);
			},
		},
	};
</script>

<template>
	<div>
		<BaseSelect
			v-model="value"
			:options="options"
			:label="label"
			class="md:hidden"
			:instructions="instructions"
			:error="error"
		/>
		<BaseRadioList
			v-model="value"
			:initial-value="value"
			:options="options"
			:label="label"
			class="hidden md:block"
			:instructions="instructions"
			:error="error"
		/>
	</div>
</template>
