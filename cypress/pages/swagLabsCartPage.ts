import { topMenuBar } from "./topMenuBar"

export const swagLabsCartPage = {

    selectors: {
        inventoryNameSelector: () => cy.get('.inventory_item_name'),
        checkoutButtonSelector: () => cy.get('.checkout_button')
    },
    
    verifyProductInCart: (productsNo : number) => {
        cy.get('@productName').then((productName: any) => {
            swagLabsCartPage.selectors.inventoryNameSelector().should('contain.text', productName)
        })
        topMenuBar.selectors.cartBadgeSelector().should('contain.text', productsNo)
    },

    clickCheckout: () => {
        swagLabsCartPage.selectors.checkoutButtonSelector().click()
    }
}