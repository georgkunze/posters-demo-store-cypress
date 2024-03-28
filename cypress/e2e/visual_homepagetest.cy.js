import HomePage from "./pages/homepage"

describe('Homepage visual test', () => {
  it('open homepage and compare with screenshot', () => {
    HomePage.open()
    cy.viewport(1000, 660)
    cy.scrollTo('top')
    cy.compareSnapshot({
      name: 'startingpage',
      testThreshold: 1,
      retryOptions: {
        limit: 5,
        delay: 500
      }
    });
    cy.get('#carousel-product-display').compareSnapshot({
        name: 'product_display',
        testThreshold: 1
      })
  })
})