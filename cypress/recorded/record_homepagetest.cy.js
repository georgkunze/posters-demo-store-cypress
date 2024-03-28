import HomePage from "./pages/homepage"

describe('template spec', () => {
  it('Visit homepage and check title', () => {
    HomePage.open()
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#carousel-product-display > .carousel-inner > .active > :nth-child(1)').should('be.visible');
    cy.get('#header-brand').should('have.text', '\n      \n      The Poster Demo Store');
    cy.get('#header-navigation-bar > .container').should('be.visible');
    cy.get('#footer').should('be.visible');
    cy.get('.icon-shopping-cart').should('be.visible');
    cy.get('.icon-search').should('be.visible');
    cy.get('#header-navigation-bar > .container').should('be.visible');
    cy.get('.icon-user2').should('be.visible');
    cy.get('.active > .carousel-content-text').should('have.text', '25% off (Almost) Everything! Use Code: Posters Sale');
    cy.get('#carousel-sale > .carousel-control-next > .carousel-control-next-icon').click();
    cy.get('.active > .carousel-content-text').should('have.text', 'Our biggest sale yet 50% off all Posters');
    cy.get('.active > :nth-child(1) > h1').should('have.text', 'North Boston');
    cy.get('.active > :nth-child(2) > .col > .btn').should('be.visible');
    cy.get('#carousel-product-display > .carousel-control-next > .carousel-control-next-icon').click();
    cy.get('.active > :nth-child(1) > h1').should('have.text', 'Boston Sunset');
    cy.get('.active > :nth-child(2) > .col > .btn').should('be.visible');
    cy.get('#carousel-product-display > .carousel-control-next > .carousel-control-next-icon').click();
    cy.get('.active > :nth-child(1) > h1').should('have.text', 'Bryce National Park, Utah I');
    cy.get('.active > :nth-child(2) > .col > .btn').should('be.visible');
    cy.get('#carousel-product-display > .carousel-control-next > .carousel-control-next-icon').click();
    cy.get('.active > :nth-child(1) > h1').should('have.text', 'Bryce National Park, Utah II');
    cy.get('.active > :nth-child(2) > .col > .btn').should('be.visible');
    cy.get(':nth-child(1) > .card-body > h2 > .category-tile-title').should('be.visible');
    cy.get(':nth-child(2) > .card-body > h2 > .category-tile-title').should('be.visible');
    cy.get(':nth-child(3) > .card-body > h2 > .category-tile-title').should('be.visible');
    cy.get(':nth-child(4) > .card-body > h2 > .category-tile-title').should('be.visible');
    cy.get(':nth-child(1) > .card-body > h2 > .category-tile-title').should('have.text', 'World of Nature');
    cy.get(':nth-child(2) > .card-body > h2 > .category-tile-title').should('have.text', 'Dining');
    cy.get(':nth-child(3) > .card-body > h2 > .category-tile-title').should('have.text', 'Transportation');
    cy.get(':nth-child(4) > .card-body > h2 > .category-tile-title').should('have.text', 'Panoramas');
    cy.get(':nth-child(1) > .card-body > .card-title').should('have.text', 'Blue Morpho Butterfly');
    cy.get(':nth-child(1) > .card-body > .btn').should('be.visible');
    cy.get(':nth-child(2) > .card-body > .card-title').should('have.text', 'Snowdrop Anemone');
    cy.get(':nth-child(2) > .card-body > .btn').should('be.visible');
    cy.get(':nth-child(3) > .card-body > .card-title').should('have.text', 'Indian Summer: Red Beeches ');
    cy.get(':nth-child(3) > .card-body > .btn').should('be.visible');
    cy.get(':nth-child(7) > .btn').should('have.text', 'Shop All Products');
    cy.get(':nth-child(7) > .btn').should('be.visible');
    cy.get('.icon-shopping-cart').should('have.class', 'icon-shopping-cart');
    cy.get('.icon-shopping-cart').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.linkButton > .btn').should('have.attr', 'href', '/cart');
    cy.get(':nth-child(1) > :nth-child(1) > .category-tile-image').click();
    cy.get('#product0 > .card-body > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})