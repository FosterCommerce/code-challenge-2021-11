<script>
	/** A simple square base card component. Links can be included in the content slot to make the
	 * entire card clickable */

	export default {
		name: 'BaseCardSimple',
	};
</script>

<template>
	<article
		class="
			relative
			flex flex-nowrap
			justify-center
			items-center
			bg-white bg-opacity-50
			backdrop-filter backdrop-blur
			||
			card
		"
	>
		<span class="w-0 || shim" />
		<div class="w-full h-full p-10 || content">
			<!-- @slot The content slot -->
			<slot />
		</div>
	</article>
</template>

<style lang="postcss" scoped>
	.card {
		box-shadow: 0 56px 40px -30px rgba(190, 152, 104, 0.15);
	}

	.shim {
		padding-bottom: 100%;
	}

	.content {
		& >>> a:not(.button) {
			@apply inline outline-none !important;

			&::before {
				content: '';
				@apply absolute inset-0 z-30 border-2 border-transparent transition-colors duration-300;
			}

			&:hover::before {
				@apply border-highlight-primary;
			}
		}
	}
</style>
