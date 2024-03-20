class topnav {
    isComponentAvailable(){
        cy.get('#header-categories')
    }
}
module.exports = new topnav()