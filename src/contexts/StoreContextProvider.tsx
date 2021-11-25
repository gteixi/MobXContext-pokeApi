import React from "react";
import StoreContext from "./StoreContexts";
import { IStoreContextProvider } from "../types/interfacesContext";

const StoreContextProvider = ({ store, children }: IStoreContextProvider) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

export default StoreContextProvider;