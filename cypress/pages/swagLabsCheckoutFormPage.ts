import { faker } from '@faker-js/faker';

export const swagLabsCheckoutFormPage = {

    selectors: {
        firstNameSelector: () => cy.get('#first-name'),
        lastNameSelector: () => cy.get('#last-name'),
        postalCodeSelector: () => cy.get('#postal-code'),
        continueButtonSelector: () => cy.get('.btn_primary.cart_button'),
        credentialInputsSelectors: () => cy.get('[placeholder]'),
        errorMessageSelector: () => cy.get('[data-test="error"]')
    },

    validateForm: () => {
        const inputList2: string[] = ['#first-name', '#last-name', '#postal-code']

        for(let i = 0; i < inputList2.length; i++) {
            swagLabsCheckoutFormPage.selectors.credentialInputsSelectors()

            cy.wrap(inputList2).each((inputSelector: string) => {
                cy.get(inputSelector).clear()
            })

            const filledInputs = inputList2.filter((_, index) => index !== i)

            cy.get(filledInputs[0]).type(faker.random.alphaNumeric(5))
            cy.get(filledInputs[1]).type(faker.random.alphaNumeric(5))

            swagLabsCheckoutFormPage.selectors.continueButtonSelector(). click()

            swagLabsCheckoutFormPage.selectors.errorMessageSelector().should('be.visible')
        }
    }
}