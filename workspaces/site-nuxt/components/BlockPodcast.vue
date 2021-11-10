<script>
	export default {
		name: 'BlockPodcast',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			src() {
				return this.block.mediaUrl;
			},
		},
	};
</script>

<template>
	<BasePodcastPlayer :src="src" />
</template>
