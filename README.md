# fostercommerce.com
Foster Commerce Public Website

## Install Craft

### 1. Setup database and local site
1. Create a blank MySQL database in you local dev environment.
2. Grab an SQL dump file from staging or production servers
3. Import the SQL dump file into your new local database
4. Create a local domain that points to the `/web` directory in the project root.

### 2. Set .env files for your environment
1. Duplicate the example.env file in the project root directory and rename it to .env
2. Edit the .env file with your local environment data and save it.
3. Duplicate the example.env file in the workspaces/site-nuxt directory and rename it to .env
4. Edit the .env file with you local environment data and save it

### Install Craft and Dependencies
Run the following commands from the project root directory

```bash
# Install dependencies
$ composer install

# Run migrations and any project-config changes
$ ./craft migrate/all
$ ./craft project-config/apply
```

### Access the Craft Control Panel
Visit ``http://<your-local-domain>/admin`` to access the Craft Control panel. Admin login details
(username and password) should be located in Basecamp.

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

#### Build GraphQL Schema
Generates a custom schema JSON file so NuxtJS/Apollo does not error out when it comes across Matrix, Neo, Super Table,
or Vizy field blocks in Craft. You should run this command if you have made changes to Craft sections and fields.
NOTE: This command is run automatically in series before the "Dev" and "Generate" commands as a convenience.

```bash
$ yarn workspace site-nuxt build-schema
```

#### Storybook Dev
Runs Storybook in dev mode to allow you to edit and add Vue component stories for a component library.

```bash
$ yarn workspace site-nuxt storybook
```

#### Storybook Generate
Generates a static version of the Storybook component library in the ``/web/storybook`` directory.

```bash
$ yarn workspace site-nuxt storybook:build
```

## Further Documentation

#### [Craft CMS](docs/craft.md)

#### [Vue Methodologies](docs/vue.md)

#### [GraphQL Setup](docs/gql.md)

#### [SVG Sprites](docs/svg.md)

#### [Storybook](docs/storybook.md)

#### [Semantic Markup & A11y Concerns](docs/markup.md)

#### [CSS / Tailwind Methodologies](docs/css.md)

#### [Cypress Testing](docs/cypress.md)

#### [Contributing / Deployment Process](docs/contributing.md)
