declare namespace Cypress {
        interface Chainable {
            checkPngStatus(url: string, expectedStatusCode: number): Chainable<Response<any>>;
            loginAsSwagLabsUser(): void;
        }
    }