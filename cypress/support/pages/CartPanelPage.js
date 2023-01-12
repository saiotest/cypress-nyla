class CartPanel{
    
    get = {

        cartItems: ()=> cy.get('[data-nyla="cart_item"]'),
    }

    containsShadeName(text){
        this.get.cartItems().within((cart)=>{
            cy.contains(text)
        })
    }

}

export const Cart = new CartPanel;