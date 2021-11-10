<script>
	import { mapState } from 'vuex';

	/** The global site footer */

	export default {
		name: 'TheFooter',
		data() {
			return {
				slug: this.$route.path,
			};
		},
		computed: {
			...mapState(['footerNav', 'softwareNav', 'socialNav']),
			copyright() {
				const year = new Date().getFullYear();
				return `© ${year} All rights reserved, Foster Commerce`;
			},
		},
	};
</script>

<template>
	<footer class="relative mt-12 pt-14 pl-6 pr-6 pb-6 lg:pt-20 xl:pt-28 xl:pb-8">
		<div class="absolute inset-0 bg-top bg-no-repeat opacity-20 | branded" />

		<nuxt-link to="/" class="flex justify-center items-center mb-[70px] | xl:mb-[142px]">
			<BaseIcon
				file="fosterLogo-full"
				alt="Foster Commerce Logo"
				class="relative inline-block w-[205px] h-[54px] text-transparent | xl:w-[288px] xl:h-[72px]"
			/>
		</nuxt-link>

		<div class="relative flex flex-col justify-between items-center space-y-[70px] lg:hidden">
			<ul v-if="socialNav.length" class="inline-flex justify-between items-center space-x-6">
				<li v-for="link in socialNav" :key="link.id">
					<BaseLink
						:url="`${link.type ? '/' : ''}${link.nodeUri}`"
						:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
						classes="text-tertiery opacity-40 transition-colors duration-300 hover:text-highlight-secondary"
					>
						<BaseIcon v-if="link.icon" :file="link.icon" classes="w-12 h-12" />
						<span class="sr-only">{{ link.title }}</span>
					</BaseLink>
				</li>
			</ul>

			<BaseIcon
				file="craftLogo-certified"
				alt="Craft Partner. Verified for Enterprise"
				class="inline-block w-[236px] h-[58px] text-transparent"
			/>
		</div>

		<div class="relative hidden lg:grid lg:grid-cols-4 lg:gap-12 lg:max-w-[1170px] lg:mx-auto">
			<ul v-if="footerNav.length" class="xl:space-y-2">
				<li v-for="link in footerNav" :key="link.id">
					<BaseLink
						:url="`${link.type ? '/' : ''}${link.nodeUri}`"
						:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
						classes="text-lg text-tertiery border-b border-transparent transition-colors duration-300 hover:text-highlight-secondary hover:border-highlight-secondary xl:text-xl"
					>
						{{ link.title }}
					</BaseLink>
				</li>
			</ul>

			<ul v-if="softwareNav.length" class="xl:space-y-2">
				<li v-for="link in softwareNav" :key="link.id">
					<BaseLink
						:url="`${link.type ? '/' : ''}${link.nodeUri}`"
						:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
						classes="text-lg text-tertiery border-b border-transparent transition-colors duration-300 hover:text-highlight-secondary hover:border-highlight-secondary xl:text-xl"
					>
						{{ link.title }}
					</BaseLink>
				</li>
			</ul>

			<ul v-if="socialNav.length" class="xl:space-y-2">
				<li v-for="link in socialNav" :key="link.id">
					<BaseLink
						:url="`${link.type ? '/' : ''}${link.nodeUri}`"
						:target="`${parseInt(link.newWindow) ? '_blank' : ''}`"
						classes="text-lg text-tertiery border-b border-transparent transition-colors duration-300 hover:text-highlight-secondary hover:border-highlight-secondary xl:text-xl"
					>
						<BaseIcon v-if="link.icon" :file="link.icon" classes="w-4 h-4 mr-2 opacity-60" />
						<span class="inline-block">{{ link.title }}</span>
					</BaseLink>
				</li>
			</ul>

			<BaseIcon
				file="craftLogo-certified"
				alt="Craft Partner. Verified for Enterprise"
				class="inline-block w-[192px] h-[48px] text-transparent | xl:w-[238px] xl:h-[58px]"
			/>
		</div>

		<small class="block mt-[70px] text-tertiery text-center | xl:mt-[110px]">{{ copyright }}</small>
	</footer>
</template>

<style lang="postcss" scoped>
	.branded {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg1IiBoZWlnaHQ9IjM2OCIgdmlld0JveD0iMCAwIDQ4NSAzNjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDE3LjU3NyAyMjUuNTFINDg0Ljc2OUwzMjAuNTQ5IDBMNTQuODQ2MiAzNjhIMTIxLjYzNEwyNTcuMzQ1IDE4MS4xMTdMMjg5Ljk3OCAyMjUuNTFMMzU3LjM1NSAyMjUuNzY4TDI5MC42OSAxMzQuN0wzMjAuOTA1IDkyLjYxMzNMNDE3LjU3NyAyMjUuNTFaIiBmaWxsPSIjRDhBRjdDIi8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDI3NC4yMzFINjYuNjk2OEwyNjMuNjE1IDBIMTk2LjkxOUwwIDI3NC4yMzFaIiBmaWxsPSIjRDhBRjdDIi8+Cjwvc3ZnPgo=');
		background-size: 850px auto;
	}

	@screen lg {
		.branded {
			background-size: 1700px auto;
		}
	}
</style>
