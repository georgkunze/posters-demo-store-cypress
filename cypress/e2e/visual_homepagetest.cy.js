import HomePage from "./pages/homepage"

describe('Homepage visual test', () => {
  it('open homepage and compare with screenshot', () => {
    HomePage.open()
    cy.compareSnapshot({
      name: 'startingpage',
      testThreshold: 0.2
    });
    cy.get('#carousel-product-display').compareSnapshot({
        name: 'product_display',
        testThreshold: 0.2
      })
  })
})