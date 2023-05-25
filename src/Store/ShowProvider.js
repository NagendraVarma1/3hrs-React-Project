import React,{useState} from "react";
import ShowContext from "./show-context";

const ShowProvider = (props) => {
    const [shoes, setShoes] = useState([])

    const addItemToShow = (item) => {
        setShoes((prevState) => {
            return [...prevState, item]
        })
    }

    const largeQuantityHandler = (item) => {
        const itemIndex = shoes.findIndex((shoe) => shoe.name === item.name)
        const editingItem = shoes[itemIndex];
        
        let updatedShoes;

        if(item.largeQuantity>0){
            const updatedShoe = {
                ...editingItem,
                largeQuantity: item.largeQuantity-1
            }
            updatedShoes = [...shoes];
            updatedShoes[itemIndex] = updatedShoe;
        }
        else {
            updatedShoes = [...shoes]
        }
        setShoes(updatedShoes)
    }
    const mediumQuantityHandler = (item) => {
        const itemIndex = shoes.findIndex((shoe) => shoe.name === item.name);
        const editingItem = shoes[itemIndex];

        let updatedShoes;

        if(item.mediumQuantity>0){
            const updatedShoe = {
                ...editingItem,
                mediumQuantity: item.mediumQuantity -1
            }
            updatedShoes = [...shoes];
            updatedShoes[itemIndex] = updatedShoe;
        }
        else {
            updatedShoes = [...shoes]
        }
        setShoes(updatedShoes);
    }

    const smallQuantityHandler = (item) => {
        const itemIndex = shoes.findIndex((shoe) => shoe.name === item.name);
        const editingItem = shoes[itemIndex];

        let updatedShoes;

        if(item.smallQuantity>0){
            const updatedShoe = {
                ...editingItem,
                smallQuantity: item.smallQuantity - 1
            }
            updatedShoes = [...shoes];
            updatedShoes[itemIndex] = updatedShoe;
        }
        else {
            updatedShoes = [...shoes];
        }
        setShoes(updatedShoes)
    }
    
    const showContext = {
        items: shoes,
        addItem: addItemToShow,
        largeQuantity: largeQuantityHandler,
        mediumQuantity: mediumQuantityHandler,
        smallQuantity: smallQuantityHandler
    }

    return (
        <ShowContext.Provider value={showContext}>
            {props.children}
        </ShowContext.Provider>

    )
}

export default ShowProvider;