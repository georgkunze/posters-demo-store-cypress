import AbstractBrowsingPage from "./AbstractBrowsingPage"
import title from "./PageComponents/title"
import salebanner from "./pagecomponents/salebanner"
import {sliders} from '../../fixtures/slider.json'
import {header} from '../../fixtures/header.json'
import {productCard} from '../../fixtures/productcard.json'

class HomePage extends AbstractBrowsingPage{
    constructor() {
        super()
        this.url = 'https://posters.xceptance.io:8443/'
        this.title = title
        this.salebanner = salebanner
    }

    open(){
       cy.visit(this.url)
    }

    isExpectedPage(){
        cy.get('#carousel-product-display')
    }

    getTitle(){
        return this.title
    }

    validateStructure(){
        super.validateStructure()

        this.salebanner.validateStructure()

        this.validatePosterSlide()

        cy.get('#intro-text-homepage').contains('Began with a simple idea "SHATATATATA!" - M. Scott').should('be.visible')

        this.validateFeaturedCategories()

        this.validateFeaturedProducts()

        cy.get('.btn-shop-all').should('have.text', 'Shop All Products')
    }

    validatePosterSlide(){
        sliders.forEach((item, index) => {
            const labelText = '#carousel-btn[aria-label="Slide ' + (index + 1) + '"]'
            cy.wrap(labelText).as('labelText');
            cy.get('@labelText').then(btn => {
                cy.get(btn).click()
            })
            cy.get('.carousel-content-product.active').find('h1').should('have.text', item).and('be.visible')
            cy.get('.carousel-content-product.active').find('.btn-primary').should('have.text','Buy here').and('be.visible')
        })
    }

    validateFeaturedCategories(){
        cy.get(".category-tile-image").should(($p) => {
            expect($p).to.have.length(4)
          })
        header.topNavigation.titles.forEach((item) => {
            cy.get('.category-tile-title').contains(item).should('be.visible')
        })
    }

    validateFeaturedProducts(){
        cy.get('.product-display-heading').find('h2').contains('Hot Products').should('be.visible')
        cy.get('.card-img-top').should(($p) => {
        expect($p).to.have.length(12)
        })
        cy.get('.card.product-tile').each((element, index) => {
            this.#checkTextAndVisiblity(element.find(".card-title"), productCard[index].title)
            this.#checkTextAndVisiblity(element.find(".product-tile-text"), productCard[index].description)
            expect(element.find(".product-tile-price")).to.be.visible 
            this.#checkTextAndVisiblity(element.find(".btn"), 'Buy here')
        })
    }

    #checkTextAndVisiblity($el, expectedText){
        expect($el).to.be.visible
        const text = $el.text()
        expect(text).to.contain(expectedText)
    }
}
module.exports = new HomePage()