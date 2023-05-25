import React from "react";

const CartContext = React.createContext({
    cartItem: [],
    addCartItem: (item) => {}
})

export default CartContext;