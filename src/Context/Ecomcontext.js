import {useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    const [cartmodaleState, setcartmodaleState] = useState(false)

    const value = [
        cart,
        setCart,
        cartmodaleState,
        setcartmodaleState,
    ]

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );

}