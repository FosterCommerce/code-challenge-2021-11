import BasePodcastPlayer from '@/components/BasePodcastPlayer';

export default {
	title: 'Base/Media/Podcast Player',
	component: BasePodcastPlayer,
};

export const PodcastPlayer = (args) => ({
	props: Object.keys(args),
	template: `
    <BasePodcastPlayer :src="src" />
  `,
});

PodcastPlayer.argTypes = {
	src: {
		control: 'text',
	},
};

PodcastPlayer.args = {
	src: 'https://player.simplecast.com/6eaf042a-d31e-4875-882a-ce1f4a9d1ec3?dark=false',
};
