import { action, makeObservable, observable } from "mobx";
import { getNextPokemons, getPokemonDetails, getPokemons } from "../../services/pokemon.services";
import { INextPokemon, IPokemon } from "./../../types/interfaces"

class PokemonStore {
    pokemons: IPokemon[] = [];
    nextPokemons: INextPokemon | null = null;
    pokemonDetails: IPokemon | null = null;

    constructor() {
        makeObservable(this, {
            pokemons: observable,
            nextPokemons: observable,
            pokemonDetails: observable,
            setPokemons: action,
            setNextPokemons: action,
            setPokemonDetails: action,
        })
    }

    setPokemons = (pokemons: IPokemon[]) => {
        this.pokemons = pokemons;
    }

    setNextPokemons = (nextPokemons: INextPokemon | null) => {
        this.nextPokemons = nextPokemons;
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

    fetchNextPokemons = async (pokemonNext: string) => {
        try {
            const nextPokemons = await getNextPokemons(pokemonNext);
            this.setNextPokemons(nextPokemons);
            console.log(`we are in store ${nextPokemons}`);
        } catch (error) {
            this.setNextPokemons(null);
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