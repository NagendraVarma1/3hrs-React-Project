import React from "react";

const ShowContext = React.createContext({
    showItem: [],
    addItem: () => {},
    largeQuantity: () => {},
    mediumQuantity: () => {},
    smallQuantity: () => {}

})

export default ShowContext;