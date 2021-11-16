import SoftwarePluginDropdown from '@/components/SoftwarePluginDropdown';

export default {
	title: 'Code Challenge/SoftwarePluginDropdown',
	component: SoftwarePluginDropdown,
};

export const Dropdown = (args) => ({
	props: Object.keys(args),
	template: `
		<SoftwarePluginDropdown 
            :selected="selected"
            :options="options"
          />
  `,
});

Dropdown.argTypes = {
	selected: {
		control: 'object',
	},
	options: {
		control: 'object',
	},
};

Dropdown.args = {
	selected: {
		label: 'Craft 2',
		id: 1,
	},
	options: [
		{
			label: 'Craft 2',
			id: 1,
		},
		{
			label: 'Craft 3',
			id: 2,
		},
	],
};
