// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

import '@testing-library/cypress/add-commands'
const notFound = "cannot be found"

Cypress.Commands.add('clearCookie', (timeout) => {
	if (cy.findAllByRole('button', { name: /Okay/, timeout: timeout ? timeout : 15000 })) {
		cy.log(' ') //Somehow consecutive tests pass more with this here.
		cy.findAllByRole('button', {name: /Okay/}).click()
	}
})

/**
 * get the body of an iframe
 */
Cypress.Commands.add('getIframeBody', () => {
	// get the iframe > document > body
	// and retry until the body element is not empty
	return cy
		.get('iframe')
		.its('0.contentDocument.body').should('not.be.empty')
		// wraps "body" DOM element to allow
		// chaining more Cypress commands, like ".find(...)"
		.then(cy.wrap)
})

