import React, { useRef, useContext } from "react";
import ShowContext from "../../Store/show-context";
import classes from './Form.module.css';

const Form = () => {
  const showCtx = useContext(ShowContext);

  const nameInputRef = useRef();
  const descInputRef = useRef();
  const priceInputRef = useRef();
  const largeInputRef = useRef();
  const mediumInputRef = useRef();
  const smallInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    let shoeName = nameInputRef.current.value;
    let desc = descInputRef.current.value;
    let shoePrice = priceInputRef.current.value;
    let large = largeInputRef.current.value;
    let medium = mediumInputRef.current.value;
    let small = smallInputRef.current.value;

    const shoeDetails = {
      name: shoeName,
      description: desc,
      price: shoePrice,
      largeQuantity: large,
      mediumQuantity: medium,
      smallQuantity: small,
      id: Math.random().toString(),
    };
    showCtx.addItem(shoeDetails);
  };

  return (
    <form className={classes.fullForm} onSubmit={formSubmitHandler}>
      <div>
        <div className={classes.form}>
          <label>Shoe Name: </label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div className={classes.form}>
          <label>Description: </label>
          <input type="text" ref={descInputRef} />
        </div>
        <div className={classes.form}>
          <label>Price: </label>
          <input type="number" ref={priceInputRef} />
        </div>
        <div >
          <h3>Quantity</h3>
          <label>Large</label>
          <input type="number" ref={largeInputRef} className={classes.quantity}/>
          <label>Medium</label>
          <input type="number" ref={mediumInputRef} className={classes.quantity}/>
          <label>Small</label>
          <input type="number" ref={smallInputRef} className={classes.quantity}/>
        </div>
        <div>
          <button type="submit" className={classes.button}>Add Item</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
