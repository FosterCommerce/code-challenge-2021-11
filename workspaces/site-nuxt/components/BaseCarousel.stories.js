import BaseCarousel from '@/components/BaseCarousel';
import BaseCardSimple from '@/components/BaseCardSimple';
import BaseImage from '@/components/BaseImage';

export default {
	title: 'Base/UI/Carousel',
	component: BaseCarousel,
	parameters: {
		layout: 'fullscreen',
	},
};

const maxonLogo = require('@/assets/images/maxon-logo.svg');

export const Carousel = (args) => ({
	components: {
		BaseCarousel,
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
		<BaseCarousel :mobile-only="mobileOnly">
			<div v-for="index in cards" :key="index" class="swiper-slide">
				<BaseCardSimple>
					<div class="flex justify-center items-center h-full">
						<BaseImage :src="logo" alt="Maxon Logo" />
					</div>
				</BaseCardSimple>
			</div>
		</BaseCarousel>
  `,
});

Carousel.argTypes = {
	mobileOnly: {
		control: 'boolean',
	},
};

Carousel.args = {
	mobileOnly: false,
};
