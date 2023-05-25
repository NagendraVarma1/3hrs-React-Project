import React from "react";

const CartContext = React.createContext({
    cartItem: [],
    addLargeCartItem: (item) => {},
    addMediumCartItem: (item) => {},
    addSmallCartItem: (item) => {},
    deleteCartItem: () => {},
})

export default CartContext;