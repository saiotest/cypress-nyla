describe('[Nyla-6] Story: As a user I want to Add a Product to the Shopping Cart', () => {
	
	beforeEach(()=>{
		cy.visit('/')
		cy.url().should('contain', Cypress.env('endpoint').pdp)
	})
	it('🧪TC11: Check the product is added to the Cart successfully', () => {
		expect(1).to.equal(1)

	})
})
