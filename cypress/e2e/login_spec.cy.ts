describe('Login Page Tests', () => {
    it('successfully logs in', () => {
        cy.visit('http://localhost:4200/auth/sign-in');

        cy.get('input[type="email"]').type(Cypress.env('email')); 
        cy.get('input[type="password"]').type(Cypress.env('password')); 
        cy.get('form').submit(); 

        cy.url().should('include', '/vote');
    });
});
