class ProductDetailPage{

    get ={
        // Accordingly to the TEST PLAN, the Test Scope is focused on the Add to Cart interactions:
        // imageContainer: ()=> cy.get()
        // imageCarrousel: ()=> cy.get()
        // contentContainer: ()=> cy.get()
        // productDescription: ()=> cy.get()
        // writeReview: ()=> cy.get()
        shadeLabel: ()=> cy.get('[data-nyla="options"] span').invoke('text'),

        itemQuantityNum: ()=> cy.get('[data-nyla="quantity-box-cb"] span').invoke('text'), // String: Value of the Quantity Selection
        itemQuantityPlusButton: ()=> cy.get('[data-nyla="signbox-plus"]'), // Button for plus items
        itemQuantityMinusButton: ()=> cy.get('[data-nyla="signbox-minus"]'), // Button for Minus items

        AddToCartButton: ()=> cy.get('button[data-nyla="add-to-cart-cb"]').first(), // Button to Add item to Cart
        AddToCartLabel: ()=> cy.get('button[data-nyla="add-to-cart-cb"]').invoke('text'), // Button to Add item to Cart
    }

    clickPlusButton(qty){
        function clickOnPlusButton(){
            this.get.itemQuantityPlusButton().click()
        }
        for(let i=0; i<qty; i++) {
            clickOnPlusButton()
        }
    }
    clickMinusButton(qty){
        function clickOnMinusButton(){
            this.get.itemQuantityMinusButton().click()
        }
        for(let i=0; i<qty; i++) {
            clickOnMinusButton()
        }
    }

    clickAddToCart(){
        this.get.AddToCartButton().click()
    }
}

export const Product = new ProductDetailPage;