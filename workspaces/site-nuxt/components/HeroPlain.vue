<script>
	/** A plain hero header component (no animation or graphic) */

	export default {
		name: 'HeroPlain',
		props: {
			/** The heading to display */
			heading: {
				type: String,
				required: true,
			},
		},
	};
</script>

<template>
	<header class="mx-auto max-w-[1230px] px-8 pt-[100px] pb-16 | lg:pt-[140px] | xl:pt-[190px]">
		<div class="space-y-3">
			<BaseHeading heading-level="1" theme="h1">{{ heading }}</BaseHeading>
			<!-- @slot The default slot for content -->
			<slot />
		</div>
	</header>
</template>
