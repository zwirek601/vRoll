export const toDoAppPage = {
  selectors: {
    runThisProject: () => cy.get('button[onclick]', { timeout: 6000}),
    toDosItems: () => cy.get('div[class="checkbox"]'),
    filters: (listType: string) => cy.get('.filters li').contains(listType),
    addNewInput: () => cy.get('.add-todo')
  },

  verifyNumberOfVisibleTodosEquals: (number: number) => {
    toDoAppPage.selectors.toDosItems().should('have.length', number)
  },

  markRandomToDoItemAsCompleted: () => {
    toDoAppPage.selectors.toDosItems().find('input').then($items => {
      const itemCount = $items.length
      const randomIndex = Math.floor(Math.random() * itemCount)
      cy.wrap($items).eq(randomIndex).click()
    })
  },

  filterListTo: (listType: string) => {
    toDoAppPage.selectors.filters(listType).click()
    toDoAppPage.selectors.filters(listType).should('have.class', 'selected')
  },

  addToDoItem: (itemName: string) => {
    toDoAppPage.selectors.addNewInput().clear().type(`${itemName}{enter}`)
  }
}