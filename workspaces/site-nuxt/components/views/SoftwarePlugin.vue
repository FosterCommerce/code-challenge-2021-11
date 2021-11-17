<script>
	import BaseHeading from '../BaseHeading.vue';
	import BaseRichText from '../BaseRichText.vue';
	import Nav from './Nav.vue';
	import BaseImage from '../BaseImage.vue';
	import BaseCodeBlock from '../BaseCodeBlock.vue';
	import BaseQuote from '../BaseQuote.vue';
	import Hero from './Hero.vue';
	import Info from './Info.vue';
	import Twitter from './Twitter.vue';
	import BaseCardPreview from '../BaseCardPreview.vue';
	import BasePreview from '../BasePreview.vue';

	export default {
		name: 'SoftwarePlugin',
		components: {
			Hero,
			BaseCodeBlock,
			Twitter,
			Info,
			BaseHeading,
			Nav,
			BaseImage,
			BaseRichText,
			BaseQuote,
		},
		props: {
			hero: {
				type: Object,
				default: () => null,
			},
			info: {
				type: Object,
				default: () => null,
			},
			aboutHeading: {
				type: Object,
				default: () => null,
			},
			aboutBody: {
				type: Object,
				default: () => null,
			},
			aboutImage: {
				type: Object,
				default: () => null,
			},
			bodyCaption: {
				type: Object,
				default: () => null,
			},
			firstBlock: {
				type: Array,
				default: () => null,
			},
			list: {
				type: Array,
				default: () => null,
			},
			firstCode: {
				type: Object,
				default: () => null,
			},
			firstQuote: {
				type: Object,
				default: () => null,
			},
			secondQuote: {
				type: Object,
				default: () => null,
			},
			thirdText: {
				type: Object,
				default: () => null,
			},
			firstText: {
				type: Object,
				default: () => null,
			},
			secondText: {
				type: Object,
				default: () => null,
			},
			secondCode: {
				type: Object,
				default: () => null,
			},
			secondBlock: {
				type: Object,
				default: () => null,
			},
			twitter: {
				type: Object,
				default: () => null,
			},
		},
	};
</script>
<style scoped>
	.sb-show-main.sb-main-padded {
		padding: 0 !important;
	}
</style>

<template>
	<main>
		<!-- first hero section -->
		<section class="max-w-full hero">
			<Hero
				:link="hero.link"
				:linkName="hero.linkName"
				:title="hero.title"
				:text="hero.text"
				:price="hero.price"
				:image="hero.image"
			/>
			<Info
				:date="info.date"
				:version="info.version"
				:options="info.options"
				:selected="info.selected"
			/>
			<div class="px-10 mx-auto md:max-w-xl sm:max-w-md lg:max-w-4xl">
				<Nav :list="list" />
			</div>
		</section>

		<!-- Body section -->
		<section class="mx-auto md:max-w-xl sm:max-w-md xs:max-w-sm lg:max-w-4xl">
			<!-- first block section in body -->
			<div class=""
				><BaseHeading
					class="px-10 my-5"
					:headingLevel="aboutHeading.headingLevel"
					:theme="aboutHeading.theme"
					>{{ aboutHeading.heading }}</BaseHeading
				>
				<BaseRichText class="px-10 my-5" :body="aboutBody.body" :class="aboutBody.classes" />
			</div>
			<div class="mx-auto">
				<BaseImage
					:src="aboutImage.src"
					:alt="aboutImage.alt"
					:desktop-src="aboutImage.desktopSrc"
				/>
			</div>
			<BaseRichText class="px-10 my-5" :body="bodyCaption.body" :class="bodyCaption.classes" />

			<!-- first block section in body with code -->
			<div class="items-center justify-between my-5 md:flex lg:flex xl:flex">
				<div class="w-2/5 sm:w-full xs:w-full"
					><BaseHeading
						class="my-5"
						:headingLevel="firstCode.headingLevel"
						:theme="firstCode.theme"
						>{{ firstCode.heading }}</BaseHeading
					>
					<BaseRichText :body="firstCode.body" :class="firstCode.classes" />
				</div>
				<BaseCodeBlock
					class="w-2/5 sm:w-full xs:w-full"
					:content="firstCode.content"
					:language="firstCode.language"
				/>
			</div>

			<!-- text section -->
			<div>
				<BaseRichText
					class="w-4/5 px-10 mx-auto my-5"
					:body="firstText.body"
					:class="firstText.classes"
				/>
				<BaseQuote class="px-10 mx-auto my-5" :quote="firstQuote.quote" />
				<BaseRichText
					class="px-10 mx-auto my-5"
					:body="secondText.body"
					:class="secondText.classes"
				/>

				<!-- twitter clone section -->
				<Twitter
					class="mx-auto"
					:comment="twitter.comment"
					:like="twitter.like"
					:share="twitter.share"
					:name="twitter.name"
					:avatar="twitter.avatar"
					:content="twitter.content"
					:userName="twitter.userName"
				/>

				<!-- text section -->
				<BaseRichText
					class="px-10 mx-auto my-5"
					:body="thirdText.body"
					:class="thirdText.classes"
				/>

				<!-- quote section -->
				<BaseQuote class="px-10 mx-auto my-5" :quote="secondQuote.quote" :cite="secondQuote.cite" />
			</div>

			<!-- last block section -->
			<div class="flex justify-between my-5 xs:flex-col">
				<BaseImage
					class="w-2/5 mr-1"
					:src="secondBlock.src"
					:alt="secondBlock.alt"
					:desktop-src="secondBlock.desktopSrc"
				/>
				<div class="max-w-2/5">
					<div class="max-w-sm"
						><BaseHeading
							class="my-5"
							:headingLevel="secondBlock.headingLevel"
							:theme="secondBlock.theme"
							>{{ secondBlock.heading }}</BaseHeading
						>
						<BaseRichText :body="secondBlock.body" :class="secondBlock.classes" />
					</div>
				</div>
			</div>

			<!-- code block section -->
			<div>
				<BaseCodeBlock :content="secondCode.content" :language="secondCode.language" />
				<div
					><BaseHeading
						class="my-5"
						:headingLevel="secondCode.headingLevel"
						:theme="secondCode.theme"
						>{{ secondCode.heading }}</BaseHeading
					>
					<BaseRichText :body="secondCode.body" :class="secondCode.classes" />
				</div>
			</div>
		</section>
	</main>
</template>
<style scoped>
	body {
		padding: 0 !important;
	}
	.hero {
		background: #fbf8f6;
	}
</style>
