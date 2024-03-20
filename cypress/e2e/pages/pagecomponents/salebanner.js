class salebanner {
    isComponentAvailable(){
        cy.get('#carousel-sale')
    }

    validateStructure(){
        cy.get('.carousel-item.active').find('.carousel-content-text').should('have.text', '25% off (Almost) Everything! Use Code: Posters Sale')
        cy.get('#carousel-sale .carousel-control-next').click()
        cy.get('.carousel-item.active').find('.carousel-content-text').should('have.text', 'Our biggest sale yet 50% off all Posters')
    }
}
module.exports = new salebanner()