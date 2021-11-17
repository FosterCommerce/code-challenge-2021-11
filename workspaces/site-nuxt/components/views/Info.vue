<script>
	export default {
		name: 'Info',
		data: {
			selected: null,
		},
		props: {
			/** Optional | will render an <a> with button styling */
			date: {
				type: String,
				default: '',
			},
			version: {
				type: String,
				default: '',
			},

			options: {
				type: Array,
				default: [],
			},
			selected: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				selectedItem: this.selected.label,
				isShown: false,
			};
		},
		methods: {
			selectItem(option) {
				this.selectedItem = option.label;
				this.$emit('option-changed', this.selectedItem);
			},
			showOptions() {
				this.isShown = !this.isShown;
			},
		},
	};
</script>

<template>
	<div
		class="
			flex
			relative
			z-20
			mx-auto
			max-w-[1230px]
			px-8
			pb-16
			sm:mx-w-10
			overflow-hidden
			sm:border-none
		"
	>
		<div class="flex-col items-center mx-5 md:pl-4 md:border-l md:border-secondary"
			><div class="font-medium leading-6 text-center text-md text-secondary font-body"
				>Version
			</div>
			<div class="text-lg font-medium leading-10 text-center">{{ version }} </div></div
		>
		<div class="flex-col items-center mx-5 md:pl-4 md:border-l md:border-secondary">
			<div class="font-medium leading-6 text-center text-md text-secondary font-body"
				>Last Update</div
			>
			<div class="text-lg font-medium leading-10 text-center">{{ date }}</div>
		</div>
		<div class="flex flex-col items-center mx-5 md:pl-4 md:border-l md:border-secondary">
			<div class="font-medium leading-6 text-center text-md text-secondary font-body"
				>Compatibility</div
			>
			<div class="relative">
				<div class="flex text-lg font-medium leading-10 text-center">
					{{ selectedItem }}
					<img @click="showOptions()" class="ml-3" src="../../assets/images/arrow_down.svg" />
				</div>
				<div v-if="isShown" class="bg-white">
					<div v-for="option in options" :key="option.id">
						<div class="flex items-center hover:bg-highlight-tertiery" @click="selectItem(option)">
							{{ option.label }}
							<div v-if="option.label == selectedItem">
								<img class="ml-3" src="../../assets/images/tick.svg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.title {
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
	}
	.paragraph {
		line-height: 32px;
	}
	.price {
		line-height: 108px;
	}
	.compatibility {
		text-align-last: center;
	}
</style>
