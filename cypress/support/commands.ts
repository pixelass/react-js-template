// @ts-ignore
Cypress.Commands.add('testId', (selector, ...args) => {
	return cy.get(`[data-test-id=${selector}]`, ...args);
});
