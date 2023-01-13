class CartPanel{
    
    get = {
        CartAccess: ()=> cy.get('[data-nyla="header"]').contains('Cart'),
        cartPanel: ()=> cy.get('[data-nyla="cart"]'),
        cartSection: {
            header: ()=> cy.get('[data-nyla="cart_section"].header'),
            body: ()=> cy.get('[data-nyla="cart_section"].body'),
            footer: ()=> cy.get('[data-nyla="cart_section"].footer')
        },
        cartItems: ()=> cy.get('[data-nyla="cart_item"]'),
        // Within cartItems get element:
            itemContainer: ()=> cy.get('[data-nyla="layout"]').eq(1), // eq(0) is the Image and eq(1) is the Content
            // Within itemContainer
                itemLabel:{
                    product: ()=> cy.get('[data-nyla="typography-cb"]').eq(0), // The Main Product (e.g. Weekender)
                    shade: ()=> cy.get('[data-nyla="typography-cb"]').eq(1), // The Shade Name (e.g. Dominio Black)
                    unitPrice: ()=> cy.get('[data-nyla="typography-cb"]').eq(2), // The Item Unit Price (e.g. $295)
                },
                itemQuantityNum: ()=> cy.get('[data-nyla="quantity-box-cb"] span'), // string: Quantity of the Added item (e.g. 2)
                itemQuantityPlusButton: ()=> cy.get('[data-nyla="signbox-plus"]'), // Button for plus items
                itemQuantityMinusButton: ()=> cy.get('[data-nyla="signbox-minus"]'), // Button for Minus items
        
        checkoutButton: ()=> cy.get('[data-nyla="cart"] button[data-nyla="checkout-cta"]'),
    }

    // These Actions must be performed inside a Cart Item:
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
    clickCheckoutButton(){
        this.get.checkoutButton().click()
    }

}

export const Cart = new CartPanel;