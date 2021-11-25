import axios from "axios"
import API from "./../constants/API"
import { IAxiosPokemonDetailsData, IAxiosPokemonsData, IPokemon } from "../types/interfaces"

export async function getPokemons(): Promise<IPokemon[]> {
    try {
        const { data }: IAxiosPokemonsData = await axios.get(API);
        return data.results;
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