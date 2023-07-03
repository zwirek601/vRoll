export const topMenuBar = {

    selectors: {
        cartSelector: () => cy.get('.shopping_cart_container'),
        cartBadgeSelector: () => cy.get('.shopping_cart_badge')
    },

    navigateToCart: () => {
        topMenuBar.selectors.cartSelector().click()
    },
}