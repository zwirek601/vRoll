# Cypress e2e testing framework

## Prerequisites

[Node.js](https://nodejs.org/en/)

> official requirements on [cypress page](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## How to install

Run below command inside of directory with `package.json` 

```
npm install
```

> Above script will install cypress with all required dependencies, `package-lock.json` file will be created in the same directory

## How to use

### Use scripts

Basic scripts are described in `package.json` in `scripts` section

#### Test run

Below commands should be run inside of directory with  `package.json`

```
// run all tests in headless mode (with default electron)

npm run cy

// run all tests in headless mode (use chrome)

npm run cy:chrome

```

#### Adding more parameters to scripts

To add another parameters just simply add `--` and then correct parameters from [cypress documentation](https://docs.cypress.io/guides/guides/command-line#Commands)

```
// below example will triger specified tests in headless mode

npx cypress run --spec "cypress/e2e/swagLabsLogin.cy.ts"
```