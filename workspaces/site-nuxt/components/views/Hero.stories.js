import Hero from '@/components/views/Hero';


export default {
    title: 'Code Challenge/Hero',
    component: Hero,
};

export const Section = (args) => ({
    props: Object.keys(args),
    components: { Hero },
    template: `<div>
    <Hero :linkName="linkName" :title="title" :price="price" :text="text" :image="image"/>
    `,
});
Section.args = {
    title: 'ShipStation Connect',
    linkName: "Buy Now",
    link: " https://plugins.craftcms.com/shipstationconnect",
    price: "59$",
    image: "https://s3.us-east-2.amazonaws.com/fostercommerce-site/images/logo-shipstation.svg",
    text: 'ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.',
};