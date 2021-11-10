# Contributing / Deployment Process

Our process for CI and deployment usually involves a staging or development server, and a production or live server.
Merges that occur in the "development" branch will automatically be deployed to the staging or development server.
Likewise, when merges occur into the "main" branch they are deployed automatically to the production or live server.
In order to prevent problems or introducing errors on these branches and servers you should not push commits directly
to these branches. Instead, you should create "feature" or "bugfix" branches in the repo while you work and later
create a PR on GitHub to merge them there, where Cypress tests will be run to ensure your code does not break the site.

We have [a detailed description](https://www.notion.so/Development-and-Deployment-Workflow-Foster-Commerce-301c48dc6e5b43ec9073b708846f7ae5)
on our development and deployment workflow you should read before merging anything into either the development or
production workflows. The following are just quick overviews of the processes.

## Development Branch / Server

To merge and deploy to the development branch and staging/development server procedure is as follows:

1. Be sure you have the most recent code (git fetch origin, git pull origin develop) merged into your branch.
2. Work in feature branches (feature/feature-name) or bugfix branches (bugfix/bug-name).
3. When you're done, submit a PR to a colleague for review, or merge yourself if you're confident.
4. Delete the feature and bugfix branches once they're merged to keep things clean.

## Main Branch / Live Server

The procedure to deploy to the live or production server is a little different as you are merging the development
branch into the main branch.

1. Make sure the changes you have merged into the development branch pass all the tests
2. Make sure you have access to the sites' database in case anything goes wrong and make an SQL backup
3. Create a deploy PR on GitHub that merges the development branch into the main branch
4. Tag a colleague for review in the deploy PR if you are unsure or think you are getting false-positives from the Cypress tests
5. If everything looks good, merge the deploy PR, and the automated deployment will occur to production.

## Setting Up Deployment Workflows

If the project does not have an automated workflow setup for it yet, please reference our
[FWORK Deploy Guide](https://github.com/FosterCommerce/fwork-deploy-guide) on how to set one up for the project.
