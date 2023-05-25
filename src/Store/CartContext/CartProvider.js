import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setCartItems((prevState) => {
            return [...prevState, item]
        })
    }

    const cartContext = {
        cartItem: cartItems,
        addCartItem: addItemToCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;