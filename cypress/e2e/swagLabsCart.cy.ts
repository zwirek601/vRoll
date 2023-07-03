import { swagLabsMainPage } from '../pages/swagLabsMainPage'
import { swagLabsCartPage } from '../pages/swagLabsCartPage'
import { topMenuBar } from '../pages/topMenuBar'

/// <reference types="cypress" />

describe('Swag Labs cart suite', () => {

    beforeEach(() => {
        cy.loginAsSwagLabsUser()
    })

    it(`Sort products in reverse alphabetical order`, () => {
        swagLabsMainPage.sortProducts('Name (Z to A)')
        swagLabsMainPage.verifyProductsAreSorted('Name (Z to A)')
    })

    it('Add product to cart', () => {
        swagLabsMainPage.addToCart('Sauce Labs Fleece Jacket')
        topMenuBar.navigateToCart()
        swagLabsCartPage.verifyProductInCart(1)
    })
})