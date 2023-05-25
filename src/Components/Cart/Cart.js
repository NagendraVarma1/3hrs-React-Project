import React from "react";

const Cart = (props) => {
    return (
        <div>
            Now the Cart is open
            <button onClick={props.closeCart}>Close</button>
        </div>
    )
}
export default Cart;