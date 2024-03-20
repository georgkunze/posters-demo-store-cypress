const footer = require("./pagecomponents/footer")
const header = require("./pagecomponents/header")

class AbstractBrowsingPage {
    validateStructure() {
        header.isComponentAvailable()
        footer.isComponentAvailable()
        header.getMiniCart().isComponentAvailable()
        header.getSearch().isComponentAvailable()
        header.getTopNav().isComponentAvailable()
        header.getUserMenu().isComponentAvailable()
    }
}

module.exports = AbstractBrowsingPage