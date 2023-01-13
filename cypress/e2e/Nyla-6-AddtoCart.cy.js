import { Product } from '../support/pages/ProductDetailPage.js'
import { Cart } from '../support/pages/CartPanelPage.js'

describe('[Nyla-6] Story: As a user I want to Add a Product to the Shopping Cart', {
    viewportHeight: 1080,
    viewportWidth: 1920,
  }, () => {
	
	beforeEach(()=>{
		cy.visit('https://site-e2e-git-develop-nyla.vercel.app/products/qa')
		cy.url().should('contain', Cypress.env('endpoints').pdp) // should be the endpoint: /products/qa
	})
	it('🧪TC11: Check the product is added to the Cart successfully',{
		retries: {
			runMode: 3,
			openMode: 3,
		},
	  },() => {
		// Given Item: before Adding the Item, get:
		// its Shade:
		let itemShade
		Product.get.shadeLabel().then((shade)=>{
			itemShade = shade.replace("Shade:  ","")
			cy.log(`Actual Shade: ${itemShade}`)
		})
		
		//its Price:
		let itemPrice
		Product.get.AddToCartLabel().then((label)=>{
			itemPrice = label.replace(" | Add to cart","")
			itemPrice = itemPrice.replace("$","")
			cy.log(`Actual Price: ${itemPrice}`)
		})
		
		//its QuantityBox:
		let itemQuantity
		Product.get.itemQuantityNum().then((qty)=>{
			itemQuantity = qty
			cy.log(`Actual Quantity: ${itemQuantity}`)
		})

		//Step 1: Click on the ‘Add to Cart’ button without adding more items.
		Product.clickAddToCart()

		//Should open the Cart Panel:
		Cart.get.cartPanel().should('be.visible')

		//Added Item should be inside the Cart with the correct values:
		Cart.get.cartItems().eq(0).within((AddedItem)=>{ //Last Item Added
			Cart.get.itemContainer().within((ItemContent)=>{
				// it Should have the same Shade name:
				Cart.get.itemLabel.shade().should('contain.text', itemShade)
				// it Should have the same Unit Price:
				Cart.get.itemLabel.unitPrice().should('contain.text', itemPrice)
				// it Should have the same added Quantity:
				Cart.get.itemQuantityNum().should('contain.text', itemQuantity)
			})
		})
		// SubTotal should be equal to (unitPrice x Quantity) TotalPrice from one item in this case:
		cy.wait(2000)
		Cart.get.cartSection.footer().contains('$').then((SubTotal)=>{
			const Price = parseInt(itemPrice)
			cy.log(`unitPrice is: ${itemPrice}`)
			const Qty = parseInt(itemQuantity)
			cy.log(`Quantity is: ${itemQuantity}`)
			const total = Price * Qty
			cy.log(`The Multiplication is: ${total}`)
			const itemTotalPrice = "$" + total
			cy.log(`The Item TotalPurchase Price is: ${itemTotalPrice}`)
			expect(SubTotal.text()).equal(itemTotalPrice)
		})
		cy.screenshot()
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

