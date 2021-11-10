# Storybook
[Storybook](https://storybook.js.org/) is included in this build and should be taken advantage of when building out
Vue components as development space, accessibility and content stress test for components. It also allows us to
document the components in a design system without too much work providing us with a library other developers on the
project can use when building out their own components.

## Usage
Once you have the project installed locally you need to run the following command in terminal from the projects root
directory:

```bash
$ yarn workspace site-nuxt storybook
```

This will start up Storybook in dev mode, allowing you to browse and create new components in the UI library.

### Creating Component "Stories"

"Stories" are just [javascript files](https://storybook.js.org/docs/vue/get-started/whats-a-story) that tell Storybook
what to display in the library, that end with the suffix ".stories.js". You create one storybook story for each
component in the library which should be named the same as the component and reside in the same directory as
the component.

In most cases we should only be including data-agnostic components, or "Base" components in the library, but we can also
include "one-off" components (such as navigation, site headers, footers, etc.) by mocking the data within the story.

For Vue components with props or slots we can also include Storybook controls which will allow us to content stress-test
these components making it a useful development tool when working on UI. An example of a story for a base button
component story would be something like the following:

```javascript
import BaseButton from '@/components/BaseButton';

export default {
    title: 'Base/Button',
    component: BaseButton,
};

export const Button = (args) => ({
    components: { BaseButton },
    props: Object.keys(args),
    computed: {
        label() {
            return this.default;
        },
        // changes the bg color for clarity on secondary theme type
        bgColor() {
            if (this.theme === 'secondary') {
                return 'bg-primary';
            } else {
                return 'bg-white';
            }
        },
    },
    template: `
  <div :class="bgColor" class="p-12 h-64 flex items-center align-center">
    <BaseButton :theme="theme" :rounded="rounded" :url="url">{{ label }}</BaseButton>
  </div>`,
});

Button.argTypes = {
    // button text
    default: {
        control: 'text',
    },
    theme: {
        control: {
            type: 'select',
            options: ['primary', 'secondary', 'tertiery'],
        },
    },
    rounded: {
        control: 'boolean',
    },
    url: {
        control: 'text',
    },
};

Button.args = {
    default: 'Learn More',
    theme: 'primary',
    rounded: true,
    url: '',
};
```

### Organizing Stories
As component libraries can become quite large in complex projects, it is useful to group stories to make things easier
to find in the library. This is done by prefixing the stories title with the name of the group you want it in. So as in
the example above, the button component story will be in the "Base" group.

```javascript
export default {
    title: 'Base/Button',
    component: BaseButton,
};
```

Depending on the amount of components in the library it may be of use to create sub-groups to further categorize them.
In the above example "Base" group, we may also want to create sub-groups for things like "Input", "Media", or "Layout".
To create these sub-groups use the same slash notation for the grouping:

```javascript
export default {
    title: 'Base/Input/Button',
    component: BaseButton,
};
```

### A11y Testing Addon
The A11y Storybook addon included in the build also helps you determine if there are any accessibility issues with your
component for things like color contrast, font sizes, and any semantic problems. This is a handy feature however, it
should not be the only A11y testing you should be doing, as a component could be fine in a context by its self, but could
have problems from an A11y perspective when used within a page context. As such you should also use
[other tools and references](markup.md) when the time arises to get an overall view of the components A11y compliance.

### SVG Sprite Module
SVGs for icons and graphics are processed automatically via an [SVG sprites module](svg.md) installed in the build.
In Storybook, you can preview all the SVG sprites currently being used as well.
