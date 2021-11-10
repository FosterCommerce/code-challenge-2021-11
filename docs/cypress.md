# Cypress Testing

[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) is a full-featured testing tool that
lets us make sure that the site is behaving the way we want it to in the browser. It's free, open source, and
locally installed. We also use it in our [continuous integration](continuous-integration.md).

## Setting up Cypress

1. Cypress will be installed with the rest of your front end dependencies when you run `yarn install`.
2. Make sure your local testing data is defined in your `.env` file.

## Running Cypress Tests Locally

1. Start up your dev environment from the project root by running `yarn workspace site-nuxt dev`
2. In another console window also from the project root, run `yarn workspace testing cypress` to open the Cypress GUI.
2. Double click on a test suite to open it up and start running it.
3. Switch browsers in the top right corner.

## Create a new test suite

New tests go in the `workspaces/testing/cypress/integration/` sub-directories (cake or frosting)
directories. You should name the files in snake_case with `_spec` at the end in order for Cypress to recognize them.
We have divided our integration tests into these two groups (cake and frosting) to work with our CI process.

### 🍰 "Cake" Tests
Cake tests are tests that will be run automatically whenever a branch is merged into the develop branch,
or whenever there is a deploy to production. In the interest of keeping our development pipeline quick, you should
only include mission-critical tests in this directory. Examples of mission-critical tests are:
- Can a user access the homepage
- Can a user login to their account
- Can a user buy something

### 🍦 "Frosting" Tests
Frosting tests are secondary tests that you as a developer, should run locally before merging your code into the
develop to ensure it will not create any additional regression errors. They are considered non-mission-critical but
just the same, are important enough to test for. Examples of non-mission-critical tests are:
- Can a user filter products by type
- Can a user paginate though articles in the blog section
- Can a user "like" an entry

## Writing Tests

WIP. Here are some links to get you started:

1. https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-a-real-test
2. https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html
3. https://docs.cypress.io/guides/references/best-practices.html
4. https://ruleoftech.com/2019/notes-of-best-practices-for-writing-cypress-tests