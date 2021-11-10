<script>
	export default {
		name: 'BlockButton',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			url() {
				return this.block.button.url;
			},
			newWindow() {
				return this.block.button.target !== '';
			},
			text() {
				return this.block.button.text;
			},
			theme() {
				return this.block.theme === 'light' ? 'secondary' : 'primary';
			},
		},
	};
</script>

<template>
	<div>
		<BaseButton :url="url" :new-window="newWindow" :theme="theme" :rounded="true">
			{{ text }}
		</BaseButton>
	</div>
</template>
