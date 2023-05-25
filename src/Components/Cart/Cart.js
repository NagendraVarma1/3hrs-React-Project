import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../Store/CartContext/cart-context";
import Modal from "../Ul/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const buyProductHandler = () => {
    cartCtx.deleteCartItem();
  };

  let totalAmount = 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartItem.map((item) => {
        let amount =
          item.price *
          (item.largeQuantity + item.mediumQuantity + item.smallQuantity);
        totalAmount =
          totalAmount +
          item.price *
            (item.largeQuantity + item.mediumQuantity + item.smallQuantity);
        return (
          <li key={item.name} className={classes.shoes}>
            <div>
              <h3>{item.name}</h3>
              <div className={classes.details}>
                <div>{item.description}</div>
                <div className={classes.price}>Rs.{item.price}</div>
                <div className={classes.quantity}>L - {item.largeQuantity}</div>
                <div className={classes.quantity}>
                  M - {item.mediumQuantity}
                </div>
                <div className={classes.quantity}>S - {item.smallQuantity}</div>
                <div className={classes.totalItemPrice}>{amount}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
      <div className={classes.btn}>
        <button className={classes.btnClose} onClick={buyProductHandler}>Buy Products</button>
        <button className={classes.btnBuy} onClick={props.closeCart}>Close</button>
      </div>
    </Modal>
  );
};
export default Cart;
