<script>
	import { mapState, mapActions } from 'vuex';

	export default {
		data() {
			return {
				slug: this.$route.path,
			};
		},
		head() {
			const metaData = [];
			const data = {
				title: this.metaTitleContainer ?? 'Foster Commerce',
			};

			if (this.metaTagContainer) {
				const metaContainer = Object.entries(this.metaTagContainer);

				for (let tag of metaContainer) {
					tag = tag[1];

					if (typeof tag === 'object' && tag.content) {
						metaData.push(tag);
					} else if (tag.length) {
						metaData.push(...tag);
					}
				}
			}

			data.meta = [...metaData];

			if (this.metaScriptContainer) {
				const script = this.metaScriptContainer?.googleTagManager?.script;

				if (script) {
					data.script = [
						{
							hid: 'gtm',
							innerHTML: script,
							type: 'text/javascript',
						},
					];
				}
			}

			return data;
		},
		computed: {
			...mapState([
				'metaTitleContainer',
				'metaScriptContainer',
				'metaLinkContainer',
				'metaTagContainer',
				'metaJsonLdContainer',
			]),
		},
	};
</script>

<template>
	<div id="main-app" class="relative overflow-x-hidden">
		<TheHeader />
		<main>
			<Nuxt />
		</main>
		<TheFooter />
		<TheClipMasks />
	</div>
</template>
