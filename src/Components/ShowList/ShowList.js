import React, { useContext } from "react";
import ShowContext from "../../Store/show-context";
import classes from './ShowList.module.css';

const ShowList = () => {

    const showCtx = useContext(ShowContext);

    return (
        <div className={classes.content}>
            <h3>Available Shoes</h3>
            <ul>
                {showCtx.items.map((item) => (
                    <li key={item.id} className={classes.list}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <h3>{item.price}</h3>
                        <button className={classes.button}>Buy Large <span>{item.largeQuantity}</span></button>
                        <button className={classes.button}>Buy Medium <span>{item.mediumQuantity}</span></button>
                        <button className={classes.button}>Buy Small <span>{item.smallQuantity}</span></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowList;