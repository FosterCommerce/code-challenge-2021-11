<script>
	export default {
		name: 'BaseModal',
		methods: {
			closeModal() {
				this.$emit('close');
			},
		},
	};
</script>

<template>
	<section class="relative bg-white bg-opacity-50 backdrop-filter backdrop-blur">
		<button
			class="absolute top-[10px] right-[10px] inline-block | md:top-[28px] md:right-[28px]"
			aria-label="Close"
			type="button"
			@click="closeModal"
		>
			<BaseIcon file="x" alt="Close" classes="w-4 h-4 md:w-5 md:h-5" />
		</button>

		<div
			class="wrapper"
			:class="{
				'md:grid md:grid-cols-3 md:items-stretch': $slots.branding || $scopedSlots.branding,
			}"
		>
			<div class="p-8 | md:p-12 || content">
				<!-- @slot The main content slot -->
				<slot />
			</div>

			<div
				v-if="$slots.branding || $scopedSlots.branding"
				class="
					hidden
					relative
					md:flex md:flex-col md:justify-between md:items-center md:bg-white md:pt-8
					branding
				"
			>
				<BaseIcon
					file="fosterLogo"
					classes="inline-block w-32 h-32 lg:w-40 lg:h-40"
					alt="Foster Commerce Logo"
				/>
				<!-- @slot The branding content slot -->
				<slot name="branding" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
	section {
		box-shadow: 0 20px 25px -5px rgba(183, 86, 51, 0.1);
	}

	.wrapper {
		grid-template-areas: 'branding main main';
	}
	.content {
		grid-area: main;
	}
	.branding {
		grid-area: branding;
	}
</style>
