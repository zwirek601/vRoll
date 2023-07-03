import { swagLabsMainPage } from '../pages/swagLabsMainPage'
import { topMenuBar } from '../pages/topMenuBar'
import { swagLabsCartPage } from '../pages/swagLabsCartPage'
import { swagLabsCheckoutFormPage } from '../pages/swagLabsCheckoutFormPage'

/// <reference types="cypress" />

describe('Swag Labs checkout form', () => {

    beforeEach(() => {
        cy.loginAsSwagLabsUser()
        swagLabsMainPage.addToCart('Sauce Labs Fleece Jacket')
        topMenuBar.navigateToCart()
        swagLabsCartPage.clickCheckout()
    })

    it('Validate checkout form', () => {
        swagLabsCheckoutFormPage.validateForm()
    })
})