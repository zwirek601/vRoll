export const swagLabsProductPage = {

    selectors: {
        addButtonSelector: () => cy.get('.btn_primary.btn_inventory').contains('ADD TO CART'),
        removeButtonSelector: () => cy.get('.btn_secondary.btn_inventory').contains('REMOVE'),
        productNameSelector: () => cy.get('.inventory_details_name'),
        productPriceSelector: () => cy.get('.inventory_details_price')
    },

    clickAddToCartButton: () => {
        swagLabsProductPage.selectors.addButtonSelector().click()
        swagLabsProductPage.selectors.removeButtonSelector().should('be.visible')
    },

    getProductName: () => {
        swagLabsProductPage.selectors.productNameSelector()
            .invoke('text')
            .then(($text) => {
                cy.wrap($text).as('productName')
            })
    }
}