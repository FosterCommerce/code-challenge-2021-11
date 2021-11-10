import BaseModal from '@/components/BaseModal';
import BaseHeading from '@/components/BaseHeading';
import BaseInput from '@/components/BaseInput';
import BaseToggle from '@/components/BaseToggle';
import BaseTextarea from '@/components/BaseTextarea';
import BaseButton from '@/components/BaseButton';

import phoneCropped from '@/assets/images/phone_cropped.png';

export default {
	title: 'Base/UI/Modal',
	component: BaseModal,
};

export const Simple = () => ({
	components: {
		BaseModal,
		BaseHeading,
		BaseInput,
		BaseToggle,
		BaseTextarea,
		BaseButton,
	},
	data() {
		return {
			name: '',
			email: '',
			type: 'Commerce Solution',
			message: '',
			typeOptions: [
				{
					value: 'Commerce Solution',
					label: 'Commerce Solution',
				},
				{
					value: 'Custom Plugin',
					label: 'Custom Plugin',
				},
				{
					value: 'Other',
					label: 'Other',
				},
			],
		};
	},
	template: `
		<div class="md:p-6">
			<BaseModal>
				<header class="mb-3 space-y-1 md:mb-12 md:space-y-3">
					<BaseHeading :heading-level="2" theme="h3">Project Inquiry</BaseHeading>
					<p class="text-secondary text-lg font-medium">Let our team bring you the next level.</p>
				</header>
				<form action="#" class="space-y-1 md:space-y-3">
					<BaseInput v-model="name" type="text" label="Name" :required="true" placeholder="What's your name?" />
					<BaseInput v-model="email" type="email" label="Email" :required="true" placeholder="What's your email?" />
					<BaseToggle v-model="type" :options="typeOptions" label="Project type" field-label="projectType" />
					<BaseTextarea v-model="message" label="Message" placeholder="How can we help?" :required="true" />
					<BaseButton :rounded="true">Send</BaseButton>
				</form>
			</BaseModal>
		</div>
  `,
});

export const Branded = () => ({
	components: {
		BaseModal,
		BaseHeading,
		BaseInput,
		BaseToggle,
		BaseTextarea,
		BaseButton,
	},
	data() {
		return {
			name: '',
			email: '',
			type: 'Commerce Solution',
			message: '',
			typeOptions: [
				{
					value: 'Commerce Solution',
					label: 'Commerce Solution',
				},
				{
					value: 'Custom Plugin',
					label: 'Custom Plugin',
				},
				{
					value: 'Other',
					label: 'Other',
				},
			],
		};
	},
	template: `
		<div class="md:p-6">
			<BaseModal>
				<header class="mb-3 space-y-1 md:mb-12 md:space-y-3">
					<BaseHeading :heading-level="2" theme="h3">Project Inquiry</BaseHeading>
					<p class="text-secondary text-lg font-medium">Let our team bring you the next level.</p>
				</header>
				<form action="#" class="space-y-1 md:space-y-3">
					<BaseInput v-model="name" type="text" label="Name" :required="true" placeholder="What's your name?" />
					<BaseInput v-model="email" type="email" label="Email" :required="true" placeholder="What's your email?" />
					<BaseToggle v-model="type" :options="typeOptions" label="Project type" field-label="projectType" />
					<BaseTextarea v-model="message" label="Message" placeholder="How can we help?" :required="true" :rows="8" />
					<BaseButton :rounded="true">Send</BaseButton>
				</form>
				<template v-slot:branding>
					<BaseImage src="/assets/images/phone_cropped.png" class="absolute left-[-40px] right-0 bottom-0" alt="Image of a phone" />
				</template>
			</BaseModal>
		</div>
  `,
});
