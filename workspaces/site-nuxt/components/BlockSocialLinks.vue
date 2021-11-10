<script>
	export default {
		name: 'BlockSocialLinks',
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
		computed: {
			links() {
				const linkArr = [];
				this.block.socialMediaLinks.forEach((link) => {
					linkArr.push({
						url: link.accountLink,
						type: link.accountType,
						title: link.accountType.charAt(0).toUpperCase() + link.accountType.slice(1),
					});
				});
				return linkArr;
			},
		},
	};
</script>

<template>
	<ul v-if="links.length" class="flex space-x-6 lg:space-x-5">
		<li v-for="(link, index) in links" :key="index">
			<BaseLink
				:url="link.url"
				target="_blank"
				:title="link.title"
				classes="text-tertiery opacity-40 transition-colors duration-300 hover:text-highlight-secondary"
			>
				<BaseIcon :file="link.type" classes="w-7 h-7 | lg:w-5 lg:h-5" />
				<span class="sr-only">{{ link.title }}</span>
			</BaseLink>
		</li>
	</ul>
</template>
