import SoftwarePlugin from '@/components/views/SoftwarePlugin';

export default {
    title: 'Code Challenge/Software Page',
    component: SoftwarePlugin,
};

export const Page = ((args) => ({
    props: Object.keys(args),
    components: { SoftwarePlugin },
    template: `
    <div><SoftwarePlugin
    :secondQuote="secondQuote"
     :firstCode="firstCode"
     :secondBlock="secondBlock"
     :twitter="twitter"
     :firstBlock="firstBlock"
     :firstQuote="firstQuote"
      :list="list" 
     :hero="hero" 
     :info="info"
     :secondCode="secondCode"
      :aboutHeading="aboutHeading"
      :firstText="firstText"
      :secondText="secondText"
      :thirdText="thirdText"
       :aboutBody="aboutBody"
        :aboutImage="aboutImage" 
        :bodyCaption="bodyCaption"/>
        <div class="max-w-[366px]" :class="{'md:max-w-full': alignment === 'horizontal'}">
        <BaseCardPreview :alignment="alignment" :zValue="zValue" :order="order">
            <div class="space-y-3 lg:space-y-4 m-auto">
                <BaseHeading class="not-italic font-normal text-5xl" :heading-level="3" theme="h3"> Need help with something? </BaseHeading>
                <a
                href="https://plugins.craftcms.com/shipstationconnect"
                target=""
                class="not-italic font-normal text-5xl tracking-[0.02em]
                text-center font-display text-highlight-primary"
                >Contact our support team</a
            > 
                       </div>
            <template v-slot:preview>
                <BasePreview  >
                    <template v-slot:media>
                        <div class="relative w-full h-full">
                            <div class="absolute top-[24px] left-0 w-[165px]">
                                <BaseImage src="/assets/images/doll.png" />
                            </div>
                        </div>
                    </template>
                </BasePreview>
            </template>
        </BaseCardPreview>
    </div></div>        `,
}));
Page.args = {
    hero: {
        "linkName": "Buy Now",
        "link": " https://plugins.craftcms.com/shipstationconnect",
        "price": '59$',
        "title": 'ShipStation Connect',
        "image": "https://s3.us-east-2.amazonaws.com/fostercommerce-site/images/logo-shipstation.svg",
        "text": 'ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.'
    },
    info: {
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
    },
    aboutHeading: {
        heading: "About",
        headingLevel: 1,
        theme: 'h2'
    },
    aboutBody: {
        body: `<p>ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store. With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p>

        <p>ShipStation downloads your orderour customers.</p> `,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
    },
    aboutImage: {
        src: 'https://source.unsplash.com/random',
        desktopSrc: '',
        alt: 'Image alt text',
        caption: '',
    },
    bodyCaption: {
        body: `<p>This plugin automatically sends orders to ShipStation and updates an order's status in Craft when its shipping status is updated in ShipStation</p>`,
        classes: "not-italic font-bold text-xl leading-8 font-body py-5",
    },
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
    firstBlock: {
        body: `<p>ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store. With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p>`,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
        src: 'https://source.unsplash.com/random',
        desktopSrc: '',
        alt: 'Image alt text',
        caption: '',
        heading: "About",
        headingLevel: 1,
        theme: 'h2'
    },
    firstCode: {
        body: `<p>ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store. With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p>`,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
        src: 'https://source.unsplash.com/random',
        desktopSrc: '',
        alt: 'Image alt text',
        caption: '',
        heading: "About",
        headingLevel: 1,
        theme: 'h2',
        content: `// This is a function
const test = (args) => {
  return args + 1;
}`,

    },
    firstQuote: {
        quote: `<p class="not-italic font-medium font-body text-2xl leading-10">ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution </p>`,
    },
    secondQuote: {
        quote: `<p class="not-italic font-medium font-body text-2xl leading-10">ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution </p>`,
        cite: `test`,
    },
    firstText: {
        body: `<p>ShipStation is a powerful, yet easy to use web-based, multi-channel, multi-carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store. With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p>`,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
    },
    secondText: {
        body: `<p> ShipStation is a powerful, yet easy to use web- based, multi- channel, multi - carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p >`,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
    },
    thirdText: {
        body: `<p> ShipStation is a powerful, yet easy to use web - based, multi - channel, multi - carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p >
    <p>ShipStation downloads your orders in real - time, allows you to create USPS, UPS, FedEx, DHL, Royal Mail, Canada Post, Australia Post, and more shipping labels and packing slips in batch, and communicates tracking information to your customers.</p> `,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
    },
    secondCode: {
        body: `<p> ShipStation is a powerful, yet easy to use web - based, multi - channel, multi - carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p >
    <p>ShipStation downloads your orders in real - time, allows you to create USPS, UPS, FedEx, DHL, Royal Mail, Canada Post, Australia Post, and more shipping labels and packing slips in batch, and communicates tracking information to your customers.</p> `,
        classes: "text-xl font-medium leading-8 font-body text-tertiery py-5",
        src: 'https://source.unsplash.com/random',
        desktopSrc: '',
        alt: 'Image alt text',
        caption: '',
        heading: "About",
        headingLevel: 1,
        theme: 'h2',
        content: `// This is a function
const test = (args) => {
    return args + 1;
}`,
    },
    secondBlock: {
        body: `<p> ShipStation is a powerful, yet easy to use web - based, multi - channel, multi - carrier shipping solution designed to facilitate the order fulfillment process for your Craft Commerce store.With its rich and robust feature set, and more than 75 marketplace integrations, ShipStation is ideal for any size business with any number of users or locations.</p>`,
        classes: "text-sm  font-medium leading-8 font-body text-tertiery py-5",
        src: 'https://source.unsplash.com/random',
        desktopSrc: '',
        alt: 'Image alt text',
        caption: '',
        heading: "About",
        headingLevel: 1,
        theme: 'h2'
    },
    twitter: {
        comment: 2,
        like: 2,
        share: 2,
        name: 'test',
        avatar: 'https://source.unsplash.com/random',
        userName: 'test',
        content: `Oh no! You're all in trouble now.I'm speaking at the 
        @DotAllConf 2021. Guess what the topic is ? No peeking at the website.#craftcms`
    },

    heading: 'Commerce Minded',
    subheading: 'Commerce Minded?',
    summary: 'Subscribe to get insights, ideas and inspiration for all things ecommerce (and Craft)',
    alignment: 'horizontal',
    zValue: "[-2]",
    order: 1,


}
