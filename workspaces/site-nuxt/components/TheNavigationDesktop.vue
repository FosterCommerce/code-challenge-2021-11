<script>
	import { mapState } from 'vuex';

	/** The global desktop navigation */

	export default {
		name: 'TheNavigationDesktop',
		data() {
			return {
				slug: this.$route.path,
			};
		},
		computed: {
			...mapState(['primaryNav']),
		},
		methods: {
			/** Determines if a link is currently the selected/active one based on the current route */
			isActive(uri) {
				return `/${uri}` === this.$route.fullPath;
			},
		},
	};
</script>

<template>
	<nav>
		<ul class="flex justify-between items-center space-x-8 | xl:space-x-[60px]">
			<li
				v-for="link in primaryNav"
				:key="link.id"
				:class="{ 'pl-8 border-l border-secondary border-[#e1d6c8] xl:pl-[60px]': link.highlight }"
			>
				<BaseLink
					:url="`${link.type ? '/' : ''}${link.nodeUri}`"
					:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
					:classes="`inline-flex items-center py-1 text-lg leading-none border-b ${
						isActive(link.nodeUri)
							? 'text-highlight-secondary border-highlight-secondary'
							: 'text-secondary border-transparent transition-colors duration-300 hover:text-highlight-secondary hover:border-highlight-secondary'
					}`"
				>
					<BaseIcon v-if="link.icon" :file="link.icon" classes="w-5 h-5 mr-2" />
					<span class="inline-block">{{ link.title }}</span>
				</BaseLink>
			</li>
		</ul>
	</nav>
</template>
