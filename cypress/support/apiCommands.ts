Cypress.Commands.add('checkPngStatus', (url: string, expectedStatusCode: number) => {
    cy.request({
        url,
        method: 'GET'
    }).then((response) => {
        expect(response.status).to.eq(expectedStatusCode)
    })
})

Cypress.Commands.add('loginAsSwagLabsUser', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
    cy.checkPngStatus('https://www.saucedemo.com/v1/img/peek.png', 200)
})