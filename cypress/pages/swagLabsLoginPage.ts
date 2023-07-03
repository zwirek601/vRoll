export const swagLabsLoginPage = {

    selectors: {
        usernameSelector: () => cy.get('#user-name'),
        passwordSelector: () => cy.get('#password'),
        loginButtonSelector: () => cy.get('#login-button'),
        loginErrorSelector: () => cy.get('.error-button')
    },

    loginWithCredentials: (username: string, password: string) => {
        swagLabsLoginPage.selectors.usernameSelector().type(username)
        swagLabsLoginPage.selectors.passwordSelector().type(password)
        swagLabsLoginPage.selectors.loginButtonSelector().click()
    },

    verifyThatUserWasLoggedIn: () => {
        cy.checkPngStatus('https://www.saucedemo.com/v1/img/peek.png', 200)
    },

    verifyThatUserProvidedInvalidCredentials: () => {
        swagLabsLoginPage.selectors.loginErrorSelector().should('be.visible')
    }
}