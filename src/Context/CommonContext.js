import React, { useState, createContext } from "react";
export const CommonContext = createContext(null);

export const CommonContextProvider = ({ children }) => {
    const [cartModal, setCartModal] = useState(false);
    

    const value ={
       cartModal,
       setCartModal
    }

    return(
        <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
    );

};

export default CommonContextProvider