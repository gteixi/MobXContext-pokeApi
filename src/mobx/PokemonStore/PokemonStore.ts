import { action, makeObservable, observable } from "mobx";
import { getPokemons } from "../../services/pokemon.services";
import { IPokemon } from "./../../types/interfaces"

class PokemonStore {
    pokemons: IPokemon[] = [];

    constructor() {
        makeObservable(this, {
            pokemons: observable,
            setPokemons: action,
        })
    }

    setPokemons = (pokemons: IPokemon[]) => {
        this.pokemons = pokemons;
    }

    fetchPokemons = async () => {
        try {
            const pokemons = await getPokemons();
            this.setPokemons(pokemons);
        } catch (error) {
            this.setPokemons([]);
        }
    }
}

export default PokemonStore;