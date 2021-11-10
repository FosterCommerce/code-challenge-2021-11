<script>
	/** A wrapper component for the simplecast podcast player */

	export default {
		name: 'BasePodcastPlayer',
		props: {
			/** The source URL of the episode */
			src: {
				type: String,
				required: true,
			},
		},
	};
</script>

<template>
	<iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless :src="src"></iframe>
</template>
