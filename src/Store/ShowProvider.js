import React,{useState} from "react";
import ShowContext from "./show-context";

const ShowProvider = (props) => {
    const [shoes, setShoes] = useState([])

    const addItemToShow = (item) => {
        setShoes((prevState) => {
            return [...prevState, item]
        })
    }

    const showContext = {
        items: shoes,
        addItem: addItemToShow
    }
    console.log(shoes)
    return (
        <ShowContext.Provider value={showContext}>
            {props.children}
        </ShowContext.Provider>

    )
}

export default ShowProvider;