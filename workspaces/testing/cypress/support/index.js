// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/**  Import commands.js */
import './commands'

/** Plugins */
import { configure } from '@testing-library/cypress'
import "cypress-real-events/support";

/** Configuration */
configure({ testIdAttribute: 'data-cy' })

/** Listen to console error outputs */
Cypress.on('window:before:load', (win) => {
	cy.spy(win.console, 'error');
});

/** Turn off uncaught error handling */
Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

/** Log in to the staging site
 * Adpated from: https://www.jondjones.com/frontend/javascript/cypress-testing/enabling-cypress-to-work-with-netlify-and-contentful-and-site-wide-protection/
 * */

const baseUrl = Cypress.config().baseUrl
if(baseUrl === 'https://fcdev.fosterstaging.com') {
	beforeEach(() => {
		const siteWideProtection = Cypress.env("SiteWideProtection");
		cy.visit('/', {
			failOnStatusCode: false,
		});
		cy.get('input').type(siteWideProtection)
		cy.get('.button').click()
	})
}
