import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/CartContext/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    let quantity = 0;
    cartCtx.cartItem.forEach((item) => {
        quantity = quantity + item.largeQuantity + item.mediumQuantity + item.smallQuantity;
    })
    
    return (
        <button className={classes.button} onClick={props.openCart}>
            <span>Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    )
}

export default HeaderCartButton;