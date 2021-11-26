import axios from "axios"
import API from "./../constants/API"
import { IAxiosPokemonDetailsData, IAxiosNextPokemonsData, IAxiosPokemonsData, IPokemon, INextPokemon } from "../types/interfaces"

export async function getPokemons(): Promise<IPokemon[]> {
    try {
        const { data }: IAxiosPokemonsData = await axios.get(API);
        return data.results;
    } catch (error) {
        throw 404;
    }
}

export async function getNextPokemons(pokemonNext: string): Promise<INextPokemon> {
    try {
        console.log(`this is the link that comes from Home ${pokemonNext}`);
        const { data }: IAxiosNextPokemonsData = await axios.get(pokemonNext);
        console.log(data);
        return data;
    } catch (error) {
        throw 404;
    }
}

export async function getPokemonDetails(pokemonURL: string): Promise<IPokemon | null> {
    try {
        const { data: pokemon }: IAxiosPokemonDetailsData = await axios.get(pokemonURL);
        return pokemon || null;

    } catch (error) {
        throw 404;
    }
}