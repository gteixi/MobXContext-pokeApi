import { ReactChild } from "react";
import PokemonStore from "../mobx/PokemonStore/PokemonStore";

export interface IContext {
    PokemonStore: PokemonStore;
}

export interface IStore {
    PokemonStore: PokemonStore;
}

export interface IStoreContextProvider {
    store: IStore;
    children: ReactChild;
}