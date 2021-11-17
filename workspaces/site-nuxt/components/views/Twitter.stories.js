

import Twitter from '@/components/views/Twitter';

export default {
    title: 'Code Challenge/Twitter',
    component: Twitter,
};

export const Page = (args) => ({
    props: Object.keys(args),
    components: { Twitter },
    template:
        `<Twitter :comment="comment" :like="like" :share="share" :name="name" :avatar="avatar" :content="content" :userName="userName"/>`
    ,
});
Page.args = {
    comment: 2,
    like: 2,
    share: 2,
    name: 'test',
    avatar: 'https://source.unsplash.com/random',
    userName: 'test',
    content: `Oh no! You're all in trouble now.I'm speaking at the 
    @DotAllConf 2021. Guess what the topic is ? No peeking at the website.#craftcms`
};