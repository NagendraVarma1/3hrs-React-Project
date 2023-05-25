import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  let cartLargeQuantity = 0;
  let cartMediumQuantity = 0;
  let cartSmallQuantity = 0;

  const addLargeToCartHandler = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    const existingItem = cartItems[existingCartItemIndex];

    let updatedItems;

    if (existingItem) {
      cartLargeQuantity = Number(existingItem.largeQuantity) + 1;
      const updatedItem = {
        ...existingItem,
        largeQuantity: cartLargeQuantity,
      };

      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      cartLargeQuantity = cartLargeQuantity + 1;
      const updatedItem = {
        ...item,
        largeQuantity: cartLargeQuantity,
        mediumQuantity: cartMediumQuantity,
        smallQuantity: cartSmallQuantity,
      };
      updatedItems = [...cartItems, updatedItem];
    }

    setCartItems(updatedItems);
  };

  const addMediumToCartHandler = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    const existingItem = cartItems[existingCartItemIndex];

    let updatedItems;

    if (existingItem) {
      const cartMediumQuantity = Number(existingItem.mediumQuantity) + 1;
      const updatedItem = {
        ...existingItem,
        mediumQuantity: cartMediumQuantity,
      };

      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      cartMediumQuantity = cartMediumQuantity + 1;
      const updatedItem = {
        ...item,
        largeQuantity: cartLargeQuantity,
        mediumQuantity: cartMediumQuantity,
        smallQuantity: cartSmallQuantity,
      };
      updatedItems = [...cartItems, updatedItem];
    }
    setCartItems(updatedItems);
  };

  const addSmallToCartHandler = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    const existingItem = cartItems[existingCartItemIndex];

    let updatedItems;
    if (existingItem) {
      const cartSmallQuantity = Number(existingItem.smallQuantity) + 1;
      const updatedItem = {
        ...existingItem,
        smallQuantity: cartSmallQuantity,
      };
      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      cartSmallQuantity = cartSmallQuantity + 1;
      const updatedItem = {
        ...item,
        largeQuantity: cartLargeQuantity,
        mediumQuantity: cartMediumQuantity,
        smallQuantity: cartSmallQuantity,
      };
      updatedItems = [...cartItems, updatedItem];
    }
    setCartItems(updatedItems);
  };

  const deleteCartItemHandler = () => {
    setCartItems([]);
  }

  const cartContext = {
    cartItem: cartItems,
    addLargeCartItem: addLargeToCartHandler,
    addMediumCartItem: addMediumToCartHandler,
    addSmallCartItem: addSmallToCartHandler,
    deleteCartItem: deleteCartItemHandler,
  };

  console.log(cartItems);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
