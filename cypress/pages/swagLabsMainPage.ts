import { swagLabsProductPage } from './swagLabsProductPage'

export const swagLabsMainPage = {

    selectors: {
        topLeftMainMenuSelector: () => cy.get('.bm-burger-button'),
        cartSelector: () => cy.get('.shopping_cart_container'),
        addToCartButtonSelector: () => cy.get('.btn_primary.btn_inventory'),
        inventoryItemSelector: () => cy.get('.inventory_item'),
        inventoryNameSelector: () => cy.get('.inventory_item_name'),
        sortDropDownListSelector:() => cy.get('.product_sort_container')
    },

    verifyProductsAreSorted: (sortOption: string) => {
        const productList: string[] = []
        const sortingProductOptions = require('../fixtures/sortingProductOptions.json')

        swagLabsMainPage.selectors.inventoryNameSelector().each(($item) => productList.push($item.text()))
        
        cy.wrap(productList).should('deep.equal', sortingProductOptions[sortOption])
    },

    sortProducts: (sortingOption: string) => {
        swagLabsMainPage.selectors.sortDropDownListSelector().select(sortingOption)
    },

    addToCart: (productName: string) => {
        swagLabsMainPage.selectors.inventoryNameSelector().contains(productName).click()
        swagLabsProductPage.clickAddToCartButton()
        swagLabsProductPage.getProductName()
    }
}