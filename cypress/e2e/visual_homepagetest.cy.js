import HomePage from "./pages/homepage"

describe('Homepage visual test', () => {
  it('open homepage and compare with screenshot', () => {
    HomePage.open()
    cy.compareSnapshot('startingpage');
    cy.get('#carousel-product-display').compareSnapshot('product_display')
  })
})