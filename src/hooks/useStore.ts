import { useContext } from "react"
import StoreContext from "../contexts/StoreContexts"

const useStore = () => {
    return useContext(StoreContext)
}

export default useStore;