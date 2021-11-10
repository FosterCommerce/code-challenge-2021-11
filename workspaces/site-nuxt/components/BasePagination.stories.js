import BasePagination from '@/components/BasePagination';

export default {
	title: 'Base/UI/Pagination',
	component: BasePagination,
};

export const Pagination = (args) => ({
	components: { BasePagination },
	props: Object.keys(args),
	template: `<BasePagination :page="page" :num-pages="numPages" />`,
});

Pagination.argTypes = {
	page: {
		control: {
			type: 'number',
		},
	},
	numPages: {
		control: {
			type: 'number',
		},
	},
};

Pagination.args = {
	page: 2,
	numPages: 3,
};
