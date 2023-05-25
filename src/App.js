import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import ShowProvider from "./Store/ShowProvider";
import ShowList from "./Components/ShowList/ShowList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartContext/CartProvider";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const cartOpenHandler = () => {
    setOpenCart(true);
  };

  const cartCloseHandler = () => {
    setOpenCart(false);
  };

  return (
    <ShowProvider>
      <CartProvider>
        {openCart && <Cart closeCart={cartCloseHandler} />}
        <Header openCart={cartOpenHandler} />
        <Form />
        <ShowList />
      </CartProvider>
    </ShowProvider>
  );
};

export default App;
