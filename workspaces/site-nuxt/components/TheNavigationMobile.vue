<script>
	import { mapState } from 'vuex';

	/** The global mobile navigation */

	export default {
		name: 'TheNavigationMobile',
		data() {
			return {
				slug: this.$route.path,
			};
		},
		computed: {
			...mapState(['primaryNav', 'softwareNav']),
		},
		methods: {
			closeNav() {
				this.$emit('click');
			},
			/** Determines if a link is currently the selected/active one based on the current route */
			isActive(uri) {
				return `/${uri}` === this.$route.fullPath;
			},
		},
	};
</script>

<template>
	<nav
		id="primary-nav-mobile"
		role="navigation"
		aria-labelledby="primary-nav-burger-toggle"
		class="fixed z-40 inset-0 p-6 bg-body bg-top bg-no-repeat bg-cover | wrapper"
	>
		<nuxt-link to="/" class="inline-block mb-6" @click.native="closeNav">
			<BaseIcon
				file="fosterLogo"
				alt="Foster Commerce Logo"
				class="inline-block w-[90px] h-[66px] text-transparent"
			/>
		</nuxt-link>

		<div class="flex flex-col justify-between items-start md:grid md:grid-cols-2 md:gap-4 | navs">
			<div v-if="primaryNav.length">
				<h4
					class="hidden mb-4 pl-3 text-sm text-tertiery border-l-[4px] border-transparent md:block"
				>
					Foster Commerce
				</h4>
				<ul class="space-y-6 | md:space-y-5">
					<li v-for="link in primaryNav" :key="link.id">
						<BaseLink
							:url="`${link.type ? '/' : ''}${link.nodeUri}`"
							:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
							:classes="`inline-block pl-3 font-medium text-2xl leading-none border-l-[4px] ${
								isActive(link.nodeUri)
									? 'text-highlight-primary border-highlight-primary'
									: 'text-tertiery border-transparent transition-colors duration-300 hover:text-highlight-primary hover:border-highlight-primary'
							}`"
							@click="closeNav"
						>
							{{ link.title }}
						</BaseLink>
					</li>
				</ul>
			</div>

			<div v-if="softwareNav && softwareNav.length">
				<h4 class="mb-4 pl-3 text-sm text-secondary border-l-[4px] border-transparent">
					Craft plugins
				</h4>
				<ul class="space-y-5">
					<li v-for="link in softwareNav" :key="link.id">
						<BaseLink
							:url="`${link.type ? '/' : ''}${link.nodeUri}`"
							:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
							classes="inline-block pl-3 font-medium text-2xl text-secondary leading-none border-l-[4px] border-transparent transition-colors duration-300 hover:text-highlight-primary hover:border-highlight-primary"
							@click="closeNav"
						>
							{{ link.title }}
						</BaseLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="postcss" scoped>
	.wrapper {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzUwIDg0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxlbGxpcHNlIGN4PSI3NDIuMzg1IiBjeT0iNTYuNDI5IiByeD0iMTE3Mi41IiByeT0iNTc0LjIzNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTEuMjIxNiA3NDIuMzg1IDU2LjQyOSkiIGZpbGw9IiNGQkY4RjYiIC8+Cjwvc3ZnPg==');
	}

	.navs {
		height: calc(100vh - 160px);
	}

	@screen md {
		height: auto;
	}
</style>
