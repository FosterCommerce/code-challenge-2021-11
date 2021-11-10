<script>
	export default {
		name: 'BasePreview',
	};
</script>

<template>
	<div class="relative || wrapper">
		<div class="absolute bottom-0 inset-x-0 z-30 px-4 pb-4 xl:px-10 xl:pb-10">
			<!-- @slot The content slot -->
			<slot />
		</div>
		<div v-if="$slots.eyebrow || $scopedSlots.eyebrow" class="absolute left-4 top-4 z-30">
			<!-- @slot The eyebrow slot -->
			<slot name="eyebrow" />
		</div>
		<div v-if="$slots.media || $scopedSlots.media" class="absolute inset-0 z-20">
			<!-- @slot The media slot -->
			<slot name="media" />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.wrapper {
		padding-top: 100%;

		&::before {
			@apply absolute inset-0 z-10 rounded-lg;

			content: '';
			background-image: linear-gradient(45deg, #f0e8dc 0%, #e9d1b2 100%);
		}
	}
</style>
