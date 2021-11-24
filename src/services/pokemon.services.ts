import axios from "axios";
import API from "./../constants/API"
import { IAxiosPokemonsData, IPokemon } from "../types/interfaces"

export async function getPokemons(): Promise<IPokemon[]> {
    try {
        const { data }: IAxiosPokemonsData = await axios.get(API);
        const { data: pokemons } = data;
        
        console.log(data);
        return pokemons;
    } catch (error) {
        throw 404;
    }

}