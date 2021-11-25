import { createContext } from "react";
import { IContext } from "../types/interfacesContext";
import store from "./../mobx/index"

const StoreContext = createContext<IContext>(store);

export default StoreContext;