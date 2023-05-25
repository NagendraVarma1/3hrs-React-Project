import React, { useContext } from "react";
import ShowContext from "../../Store/show-context";
import classes from "./ShowList.module.css";
import CartContext from "../../Store/CartContext/cart-context";

const ShowList = () => {
  const showCtx = useContext(ShowContext);
  const cartCtx = useContext(CartContext);

  const largeQuantityHandler = (item) => {
    showCtx.largeQuantity(item);

    if (item.largeQuantity > 0) {
      cartCtx.addLargeCartItem(item);
    }
  };

  const mediumQuantityHandler = (item) => {
    showCtx.mediumQuantity(item);
    if (item.mediumQuantity > 0) {
      cartCtx.addMediumCartItem(item);
    }
  };

  const smallQuantityHandler = (item) => {
    showCtx.smallQuantity(item);
    if (item.smallQuantity > 0) {
      cartCtx.addSmallCartItem(item);
    }
  };

  return (
    <div className={classes.content}>
      <h3>Available Shoes</h3>
      <ul>
        {showCtx.items.map((item) => (
          <li key={item.id} className={classes.list}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h4>Rs.{item.price}</h4>
            <div>
              <button
                className={classes.button}
                onClick={() => {
                  largeQuantityHandler(item);
                }}
              >
                Buy Large <span>({item.largeQuantity})</span>
              </button>
              <button
                className={classes.button}
                onClick={() => {
                  mediumQuantityHandler(item);
                }}
              >
                Buy Medium <span>({item.mediumQuantity})</span>
              </button>
              <button
                className={classes.button}
                onClick={() => {
                  smallQuantityHandler(item);
                }}
              >
                Buy Small <span>({item.smallQuantity})</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
