# Foster Commerce Code Challenge

## Install Front End

Run the following command from the project root directory to install the front end dependencies:

```bash
yarn install
```

## Run the site locally

The setup has the following commands you can run:

#### Dev mode

Use this while you are developing in Nuxt (includes HMR)

```bash
$ yarn workspace site-nuxt dev
```

#### Generate

Generates a static version of the site locally and saves it to the `/workspaces/site-nuxt/dist` directory

```bash
$ yarn workspace site-nuxt generate
```

#### Serve

Runs a static version of the site using NPX after you generate it

```bash
$ npx serve workspaces/site-nuxt/dist
```

#### Storybook Dev

Runs Storybook in dev mode to allow you to edit and add Vue component stories for a component library.

```bash
$ yarn workspace site-nuxt storybook
```

#### Storybook Generate

Generates a static version of the Storybook component library in the `/web/storybook` directory.

```bash
$ yarn workspace site-nuxt storybook:build
```

## Further Documentation

#### [Vue Methodologies](docs/vue.md)

#### [Storybook](docs/storybook.md)

#### [Semantic Markup & A11y Concerns](docs/markup.md)

#### [CSS / Tailwind Methodologies](docs/css.md)

#### [SVG Sprites](docs/svg.md)

## User Interface

-   [x] The unique content of the page template (the main element) can be seen and interacted with as a Storybook story. We've started this for you as Software Page > [see empty story](https://nostalgic-colden-eec37e.netlify.app/?path=/story/base-input-button--button)
-   [x] Do not include the header and footer. Only the unique content of the software page template should be included in your Storybook story.
-   [x] The UI exactly matches the designs in the Figma file.
-   [x] All content can be changed by passing data to Vue props (no content is hard coded in the HTML). The page is seeded with sample content.
-   [x] The layout looks good at all (reasonable) viewports and flows smoothly through breakpoints.
