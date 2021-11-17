import Nav from '@/components/views/Nav';


export default {
    title: 'Code Challenge/Nav',
    component: Nav,
};

export const Navigation = (args) => ({
    props: Object.keys(args),
    components: { Nav },
    template: `
      <Nav :list="list"/>
    `,
});
Navigation.args = {
    list: [{
        name: "About",
        link: "#",
        needsArrow: false,
    }, {
        name: "Changlog",
        link: "#",
        needsArrow: false,

    },
    {
        name: "Documentation",
        link: "#",
        needsArrow: true,

    },
    {
        name: "Repository",
        link: "#",
        needsArrow: true,

    }],
};