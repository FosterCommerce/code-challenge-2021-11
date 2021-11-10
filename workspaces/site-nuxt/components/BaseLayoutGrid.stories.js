import BaseLayoutGrid from '@/components/BaseLayoutGrid';
import BaseCardSimple from '@/components/BaseCardSimple';
import BaseImage from '@/components/BaseImage';

export default {
	title: 'Base/Layout/Grid',
	component: BaseLayoutGrid,
};

const maxonLogo = require('@/assets/images/maxon-logo.svg');

export const Grid = (args) => ({
	components: {
		BaseLayoutGrid,
		BaseCardSimple,
		BaseImage,
	},
	props: Object.keys(args),
	data() {
		return {
			logo: maxonLogo,
			cards: 12,
		};
	},
	template: `
		<BaseLayoutGrid :columns="columns" :gap="gap" :element="element">
			<BaseCardSimple v-for="index in cards" :key="index">
				<div class="flex justify-center items-center h-full">
					<BaseImage :src="logo" alt="Maxon Logo" />
				</div>
			</BaseCardSimple>
		</BaseLayoutGrid>
  `,
});

Grid.argTypes = {
	columns: {
		control: {
			type: 'range',
			min: 1,
			max: 12,
			step: 1,
		},
	},
	gap: {
		control: {
			type: 'select',
			options: ['none', 'small', 'medium', 'large'],
		},
	},
	element: {
		control: {
			type: 'select',
			options: ['div', 'section', 'article', 'header', 'footer'],
		},
	},
};

Grid.args = {
	columns: 3,
	gap: 'medium',
	element: 'div',
};
