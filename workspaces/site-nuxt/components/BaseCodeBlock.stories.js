import BaseCodeBlock from '@/components/BaseCodeBlock';

export default {
	title: 'Base/Typography/Code Block',
	component: BaseCodeBlock,
};

export const CodeBlock = (args) => ({
	props: Object.keys(args),
	template: `
    <BaseCodeBlock :content="content" :language="language" />
  `,
});

CodeBlock.argTypes = {
	content: {
		control: 'text',
	},
	language: {
		control: {
			type: 'select',
			options: ['javascript', 'css', 'markup', 'php', 'twig', 'graphql', 'json', 'bash', 'sql'],
		},
	},
};

CodeBlock.args = {
	content: `// This is a function
const test = (args) => {
  return args + 1;
}`,
	language: 'javascript',
};
