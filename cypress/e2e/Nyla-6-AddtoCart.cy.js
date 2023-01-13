import { Product } from '../support/pages/ProductDetailPage.js'
import { Cart } from '../support/pages/CartPanelPage.js'

describe('[Nyla-6] Story: As a user I want to Add a Product to the Shopping Cart', () => {
	
	beforeEach(()=>{
		cy.visit('/')
		cy.url().should('contain', Cypress.env('endpoints').pdp)
	})
	it('🧪TC11: Check the product is added to the Cart successfully', () => {
		let itemShade
		
		//Step 1: Click on the ‘Add to Cart’ button.
		Product.get.shadeSelection().then((shade)=>{
			itemShade = shade.text()
			x = itemShade.replace("Shade: ","")
			cy.log(x)
		})
		Product.clickAddToCart()

		Cart.containsShadeName(itemShade)

		// Assert: The Cart Panel should be displayed on the Left side with the current information of the last added product.

		// Assert: The Same product Name, Unit Price and Quantity, should be displayed accordingly to the added item. 

		
	})
})


Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}

