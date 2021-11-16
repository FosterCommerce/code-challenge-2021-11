import SoftwarePlugin from '@/components/views/SoftwarePlugin';

export default {
	title: 'Code Challenge/Software Page',
	component: SoftwarePlugin,
};

export const Page = (args) => ({
	components: { SoftwarePlugin },
	props: Object.keys(args),
	template: `<SoftwarePlugin
	 			:pluginTitle="pluginTitle"
				:pluginPrice="pluginPrice"
				:pluginDescription="pluginDescription"
				:pluginVersion="pluginVersion"
				:pluginLastUpdate="pluginLastUpdate"
				:pluginAbout="pluginAbout"
				:pluginCompatibility="pluginCompatibility"
				:pluginCompatibilities="pluginCompatibilities"
	 		/>`,
});

Page.argTypes = {
	// title of software plugin
	pluginTitle: {
		control: 'text',
	},
	// short description of software plugin
	pluginDescription: {
		control: 'text',
	},
	// price of software plugin
	pluginPrice: {
		control: 'text',
	},
	// version of software plugin
	pluginVersion: {
		control: 'text',
	},
	// date of software plugin last update
	pluginLastUpdate: {
		control: 'date',
	},
	// about information of software plugin
	pluginAbout: {
		control: 'object',
	},
};

Page.args = {
	pluginTitle: 'ShipStation Connect',
	pluginDescription: `ShipStation is a powerful,
		 yet easy to use web-based, multi-channel, 
		 multi-carrier shipping solution designed to 
		 facilitate the order fulfillment process for your
		  Craft Commerce store.`,
	pluginPrice: '$59',
	pluginVersion: '1.3.6',
	pluginLastUpdate: new Date('2021-7-9'),
	pluginAbout: [
		'ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store. With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations',
		'ShipStation downloads your orders in real-time, allows you to create USPS, UPS, FedEx, DHL, Royal Mail, Canada Post, Australia Post, and more shipping labels and packing slips in batch, and communicates tracking information to your customers.',
	],
	pluginCompatibility: {
		label: 'Craft 2',
		id: 1,
	},
	pluginCompatibilities: [
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
