<script>
	/** The is the homepage layout template */

	import EntryHome from '@/queries/EntryHome.gql';

	export default {
		async asyncData({ store }) {
			const { data: queryData } = await store.dispatch('queryAPI', {
				name: 'EntryHome',
				variables: {
					limit: 1,
				},
			});

			await store.dispatch('setSeoData', queryData?.entry?.seomatic);

			return {
				loading: 0,
				entry: queryData?.entry,
			};
		},
		data() {
			return {
				loading: 0,
				entry: null,
			};
		},
		computed: {
			pageHeading() {
				return this.entry.heading ? this.entry.heading : this.entry.title;
			},
		},
	};
</script>

<template>
	<article v-if="!loading">
		<!-- The page hero -->
		<component :is="$helpers.heroName(entry.heroDesign)" :heading="pageHeading">
			<h2
				v-if="entry.subheading"
				class="text-secondary text-lg !leading-normal | md:text-xl | lg:text-2xl | xl:text-[28px]"
			>
				{{ entry.subheading }}
			</h2>
			<BaseButton v-if="entry.button.url" :url="entry.button.url" rounded>
				{{ entry.button.text }}
			</BaseButton>
		</component>

		<!-- The page content -->
		<GlobalPageBuilder :nodes="entry.contentRows" />
	</article>
</template>

<style lang="postcss" scoped>
	.character {
		z-index: 2;
		animation: float 10s ease-in-out infinite;
	}

	.cloud-1 {
		animation: float 10s ease-in-out 1.25s infinite;
		transition: all 0.8s;
	}

	.cloud-2 {
		animation: float 10s ease-in-out 2.75s infinite;
		transition: all 0.8s;
	}

	.hero {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwLjEgNzcxMC43IiBmaWxsPSIjZmZmZmZmIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDc2ODcuNkwwLDc2ODcuNkMwLDc3MjAuMiwwLDc3MTYuNSwwLDc2ODcuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMC4xLDBDMC4xLDE5Ny4xLDAsNzU5MC42LDAsNzcxMC43YzM3Mi4yLTIxOS40LDEwMTEuNS0zMjAuOSwxNDQwLjEtMjQxLjljMC0xMzEuNCwwLTczMDQuMSwwLTc0NjguOEgwLjF6Ii8+Cgk8L2c+Cjwvc3ZnPgo=');
		background-position-y: 130%;

		@screen sm {
			background-position-y: 110%;
		}

		@screen md {
			background-position-y: 0;
			background-position: bottom;
		}
	}
</style>
