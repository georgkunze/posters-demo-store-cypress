const search = require("./search")
const topnav = require("./topnav")
const usermenu = require("./usermenu")
const minicart = require("./minicart")

class header {
    constructor() {
        this.minicart = minicart
        this.search = search
        this.topNav = topnav
        this.userMenu = usermenu
    }
    isComponentAvailable(){
        cy.get('#header-navigation-bar')
    }

    getMiniCart(){
        return this.minicart
    }

    getSearch(){
        return this.search
    }

    getTopNav(){
        return this.topNav
    }

    getUserMenu(){
        return this.userMenu
    }
}
module.exports = new header()