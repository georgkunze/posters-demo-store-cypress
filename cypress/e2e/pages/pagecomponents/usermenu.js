class usermenu {
    isComponentAvailable(){
        cy.get('#show-user-menu')
    }
}
module.exports = new usermenu()