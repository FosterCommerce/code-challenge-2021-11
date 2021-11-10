<script>
	export default {
		name: 'BaseCodeBlock',
		props: {
			/** The code content to display */
			content: {
				type: String,
				required: true,
			},
			/** The language of the code content */
			language: {
				type: String,
				required: false,
				default: 'javascript',
				validator: (propValue) =>
					['javascript', 'css', 'markup', 'php', 'twig', 'graphql', 'json', 'bash', 'sql'].includes(
						propValue
					),
			},
			/** The caption below the code block */
			caption: {
				type: String,
				required: false,
				default: null,
			},
		},
	};
</script>

<template>
	<figure>
		<client-only>
			<prism :lang="language">{{ content }}</prism>
		</client-only>
		<figcaption v-if="caption" class="block mt-1 pl-2 font-mono text-sm text-secondary">
			{{ caption }}
		</figcaption>
	</figure>
</template>

<style lang="postcss" scoped>
	/* Override default styling to match design */
	>>> :not(pre) > code[class*='language-'],
	>>> pre[class*='language-'] {
		@apply bg-highlight-body rounded-xl;
	}
	>>> div.code-toolbar > .toolbar {
		@apply space-x-1;

		> .toolbar-item > a,
		> .toolbar-item > button,
		> .toolbar-item > span {
			@apply px-2 py-1 text-sm bg-body rounded-md shadow-none;
		}
	}
	@screen md {
		>>> div.code-toolbar > .toolbar {
			@apply opacity-100;
		}
	}
</style>
