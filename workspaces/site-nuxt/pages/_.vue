<script>
	/** This component acts as a controller to get the appropriate components/views component
	 * to render the page entry type */

	import PagesGeneral from '@/components/views/PagesGeneral.vue';
	import PagesBlog from '@/components/views/PagesBlog.vue';
	import PagesContact from '@/components/views/PagesContact.vue';

	export default {
		components: {
			PagesGeneral,
			PagesBlog,
			PagesContact,
		},
		async asyncData({ route, store }) {
			const { data: queryData } = await store.dispatch('queryAPI', {
				name: 'EntriesPages',
				variables: {
					limit: 1,
					uri: route.params.pathMatch,
				},
			});

			const data = {
				entry: queryData?.entries[0],
			};

			await store.dispatch('setSeoData', queryData?.entries[0]?.seomatic);

			if (data.entry?.typeHandle === 'blog') {
				const { data: blogQueryData } = await store.dispatch('queryAPI', {
					name: 'EntriesBlog',
					variables: {
						type: data.entry.blogTypes !== 'both' ? data.entry.blogTypes : '*',
					},
				});

				data.entry.entries = blogQueryData.entries;
			}

			return data;
		},
		data() {
			return {
				entry: null,
			};
		},
		computed: {
			/** Calculates the page view component to call based on the Craft section handle and entry type handle
			 * of the entry we have fetched */
			pageViewComponent() {
				const section =
					this.entry?.sectionHandle.charAt(0).toUpperCase() + this.entry?.sectionHandle.slice(1);
				const type =
					this.entry?.typeHandle.charAt(0).toUpperCase() + this.entry?.typeHandle.slice(1);

				return section + type;
			},
		},
	};
</script>

<template>
	<div>
		<component :is="pageViewComponent" :entry="entry" />
	</div>
</template>
