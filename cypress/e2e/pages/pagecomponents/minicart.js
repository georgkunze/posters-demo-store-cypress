class minicart {
    isComponentAvailable(){
        cy.get('#mini-cart-menu')
    }
}
module.exports = new minicart()