class Title {
    validateTitle(text) {
        cy.get('#header-brand').contains(text).should('be.visible')
    }
}
module.exports = new Title()