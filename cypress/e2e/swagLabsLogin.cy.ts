import { faker } from '@faker-js/faker';
import { swagLabsLoginPage } from '../pages/swagLabsLoginPage'

/// <reference types="cypress" />

describe('Swag Labs login suite', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.checkPngStatus('https://www.saucedemo.com/v1/main.js', 200)
    })

    it('Succesfull user login', () => {
        swagLabsLoginPage.loginWithCredentials(Cypress.env('username'), Cypress.env('password'))
        swagLabsLoginPage.verifyThatUserWasLoggedIn()
    })

    it('[@smoke] Wrong password login', () => {
        const invalidPassword = faker.random.alphaNumeric(35)
        swagLabsLoginPage.loginWithCredentials(Cypress.env('username'), invalidPassword)
        swagLabsLoginPage.verifyThatUserProvidedInvalidCredentials()
    })

    it('[@smoke] Wrong username login', () => {
        const invalidUsername = faker.random.alphaNumeric(18)
        swagLabsLoginPage.loginWithCredentials(invalidUsername, Cypress.env('password'))
        swagLabsLoginPage.verifyThatUserProvidedInvalidCredentials()
    })

})
