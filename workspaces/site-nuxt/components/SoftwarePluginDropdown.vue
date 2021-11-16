<script>
	/** Renders Software Plugin Dropdown
	 * Import required Base Components
	 */
	import BaseRichText from '@/components/BaseRichText';

	export default {
		name: 'SoftwarePluginDropdown',
		components: {
			BaseRichText,
		},
		props: {
			/** A pre-selected plugin option   */
			selected: {
				type: Object,
				required: true,
			},
			/** Array of plugin options */
			options: {
				type: Array,
				required: true,
				default: () => [],
			},
		},
		data() {
			return {
				active: false,
				selectedPlugin: this.selected,
			};
		},
		methods: {
			selectOption(option) {
				/** Selects specific id from options */
				this.selectedPlugin = option;
				this.$emit('option-changed', this.selectedPlugin);
			},
		},
	};
</script>

<template>
	<div class="relative">
		<div class="space-x-2 flex items-center">
			<BaseRichText
				:body="selectedPlugin.label"
				:classes="'text-primary text-lg xl:text-[32px] font-medium leading-[40px]'"
			/>
			<svg-icon
				@click="active = !active"
				:name="`icons/caret-down`"
				fill="currentColor"
				class="fill-current text-tertiery cursor-pointer block w-[20.09px] h-[11.23px]"
			/>
		</div>
		<ul
			class="
				transition-opacity
				absolute
				top-12
				-left-6
				w-[196px]
				p-2
				z-20
				bg-white bg-opacity-50
				backdrop-filter backdrop-blur
				||
				card
			"
			:class="active ? 'opacity-1' : 'opacity-0'"
		>
			<li v-for="option in options" :key="option.id">
				<div
					@click="selectOption(option)"
					class="
						px-5
						py-2
						flex
						items-center
						justify-between
						cursor-pointer
						rounded-lg
						transition-all
						hover:bg-highlight-tertiery
					"
				>
					<BaseRichText
						:body="option.label"
						:classes="
							option.id === selectedPlugin.id
								? 'text-primary text-lg xl:text-2xl font-medium leading-8 opacity-40'
								: 'text-primary text-lg xl:text-2xl font-medium leading-8'
						"
					/>
					<svg-icon
						v-if="option.id === selectedPlugin.id"
						:name="`icons/check`"
						fill="currentColor"
						class="w-3 h-3 xl:w-[15.09px] xl:h-[11.23px]"
					/>
				</div>
			</li>
		</ul>
	</div>
</template>
