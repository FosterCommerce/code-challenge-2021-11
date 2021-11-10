import BaseLayoutColumns from '@/components/BaseLayoutColumns';
import BaseHeading from '@/components/BaseHeading';

export default {
	title: 'Base/Layout/Columns',
	component: BaseLayoutColumns,
};

export const Columns = (args) => ({
	components: {
		BaseLayoutColumns,
		BaseHeading,
	},
	props: Object.keys(args),
	template: `
		<BaseLayoutColumns :layout="layout" :align="align" :gap="gap" :element="element">
			<div class="h-full p-8 bg-white bg-opacity-50">
				<BaseHeading :heading-level="2" class="mb-4">Primary Content</BaseHeading>
				<div class="space-y-3">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at autem
						delectus deserunt doloremque doloribus explicabo iure maiores molestias mollitia numquam
						odit officia, perspiciatis quas, saepe, sequi vel?
					</p>
					<p>
						Adipisci, aliquam amet atque corporis doloremque hic impedit ipsum iste laboriosam magnam
						magni provident quia quidem quisquam quo repellat suscipit vitae. Odit?
					</p>
				</div>
			</div>
			<template v-slot:aside>
				<div class="h-full p-8 bg-white">
					<BaseHeading :heading-level="4" class="mb-4">Aside Content</BaseHeading>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aspernatur eius illum nobis. Aliquam dolor dolorum earum fugiat hic,
						molestias nesciunt officia perspiciatis quod soluta? Dignissimos esse excepturi
						maxime placeat voluptas?
					</p>
				</div>
			</template>
		</BaseLayoutColumns>
  `,
});

Columns.argTypes = {
	layout: {
		control: {
			type: 'select',
			options: ['halves', 'thirds', 'quarters'],
		},
	},
	align: {
		control: {
			type: 'select',
			options: ['left', 'right'],
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

Columns.args = {
	layout: 'thirds',
	align: 'left',
	gap: 'medium',
	element: 'section',
};
