class ProductDetailPage{

    get ={
        // Accordingly to the TEST PLAN, the Test Scope is focused on the Add to Cart interactions:
        // imageContainer: ()=> cy.get()
        // imageCarrousel: ()=> cy.get()
        // contentContainer: ()=> cy.get()
        // productDescription: ()=> cy.get()
        // writeReview: ()=> cy.get()
        shadeLabel: ()=> cy.get('[data-nyla="options"] span'),

        itemQuantityBox: ()=> cy.get('[data-nyla="quantity-box-cb"] span'), // String: Value of the Quantity Selection
        itemQuantityPlusButton: ()=> cy.get('[data-nyla="signbox-plus"]'), // Button for plus items
        itemQuantityMinusButton: ()=> cy.get('[data-nyla="signbox-minus"]'), // Button for Minus items

        AddToCartButton: ()=> cy.get('[data-nyla="add-to-cart-cb"]'), // Button to Add item to Cart
        AddToCartPrice: ()=> cy.contains('Add to cart').text(), //Text of the Price of the selected item
    }

    clickPlusButton(){
        this.get.itemQuantityPlusButton().click()
    }

    clickAddToCart(){
        this.get.AddToCartButton().click()
    }
}

export const Product = new ProductDetailPage;