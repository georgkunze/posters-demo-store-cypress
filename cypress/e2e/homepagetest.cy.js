import HomePage from "./pages/homepage"

describe('Homepagetest', () => {
  it('Visit homepage and check title', () => {
    HomePage.open()
    HomePage.isExpectedPage()
    HomePage.getTitle().validateTitle('The Poster Demo Store')
    HomePage.validateStructure()
  })
})