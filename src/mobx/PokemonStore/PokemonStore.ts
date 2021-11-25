import { action, makeObservable, observable } from "mobx";
import { getPokemonDetails, getPokemons } from "../../services/pokemon.services";
import { IPokemon } from "./../../types/interfaces"

class PokemonStore {
    pokemons: IPokemon[] = [];
    pokemonDetails: IPokemon | null = null;

    constructor() {
        makeObservable(this, {
            pokemons: observable,
            pokemonDetails: observable,
            setPokemons: action,
        })
    }

    setPokemons = (pokemons: IPokemon[]) => {
        this.pokemons = pokemons;
    }

    setPokemonDetails = (pokemonDetails: IPokemon | null) => {
        this.pokemonDetails = pokemonDetails;
    }

    fetchPokemons = async () => {
        try {
            const pokemons = await getPokemons();
            this.setPokemons(pokemons);
        } catch (error) {
            this.setPokemons([]);
        }
    }

    fetchPokemonDetails = async (pokemonURL: string) => {
        try {
            const pokemonDetails = await getPokemonDetails(pokemonURL);
            this.setPokemonDetails(pokemonDetails);
        } catch (error) {
            this.setPokemonDetails(null);
        }
    }
}

export default PokemonStore;