import Info from '@/components/views/Info';


export default {
    title: 'Code Challenge/info',
    component: Info,
};

export const Information = (args) => ({
    props: Object.keys(args),
    components: { Info },
    template: `
    <Info :date="date" :version="version" :options="options" :selected="selected" />
    `,
});
Information.args = {
    date: "2/7/2000",
    version: "13.0.1",
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