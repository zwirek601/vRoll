import {toDoAppPage} from "../../pages/apilia/toDoAppPage";

describe('Apilia Exercise 2', () => {

  beforeEach(() => {
    cy.visit('https://ram-react-todo.stackblitz.io')
    toDoAppPage.selectors.runThisProject().should('be.visible').click()
  })

  it('complete todo item', () => {
    toDoAppPage.verifyNumberOfVisibleTodosEquals(3)
    toDoAppPage.markRandomToDoItemAsCompleted()
    toDoAppPage.filterListTo('Active')
    toDoAppPage.verifyNumberOfVisibleTodosEquals(2)
    toDoAppPage.filterListTo('Completed')
    toDoAppPage.verifyNumberOfVisibleTodosEquals(1)
    cy.contains('2 items left')
  })

  it('add todo item', () => {
    toDoAppPage.addToDoItem('testToDoItem')
    toDoAppPage.verifyNumberOfVisibleTodosEquals(4)
    cy.contains('4 items left')
  })
})