import BaseCardSimple from '@/components/BaseCardSimple';
import BaseImage from '@/components/BaseImage';
import BaseHeading from '@/components/BaseHeading';

export default {
	title: 'Base/UI/Cards/Simple',
	component: BaseCardSimple,
};

const maxonLogo = require('@/assets/images/maxon-logo.svg');
const chartGraphic = require('@/assets/images/chart-line.svg');

export const Image = () => ({
	components: {
		BaseCardSimple,
		BaseImage,
	},
	data() {
		return {
			logo: maxonLogo,
		};
	},
	template: `
		<div class="max-w-[282px]">
			<BaseCardSimple>
				<div class="flex justify-center items-center h-full">
					<BaseImage :src="logo" alt="Maxon Logo" />
				</div>
			</BaseCardSimple>
		</div>
  `,
});

export const ImageAndHeading = (args) => ({
	components: {
		BaseCardSimple,
		BaseImage,
		BaseHeading,
	},
	props: Object.keys(args),
	data() {
		return {
			logo: chartGraphic,
		};
	},
	computed: {
		heading() {
			return this.default;
		},
	},
	template: `
		<div class="max-w-[295px]">
			<BaseCardSimple>
				<div class="flex flex-wrap justify-center items-end h-full">
					<BaseImage :src="logo" class="w-24 block" alt="Chart Graphic" />
					<BaseHeading :heading-level="3" theme="h6" class="w-full mt-8 text-center"><a href="#">{{ heading }}</a></BaseHeading>
				</div>
			</BaseCardSimple>
		</div>
  `,
});

ImageAndHeading.argTypes = {
	default: {
		control: 'text',
	},
};

ImageAndHeading.args = {
	default: 'Ecommerce',
};
