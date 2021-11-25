import axios from "axios"
import API from "./../constants/API"
import { IAxiosPokemonsData, IPokemon } from "../types/interfaces"

export async function getPokemons(): Promise<IPokemon[]> {
    try {
        const { data }: IAxiosPokemonsData = await axios.get(API);
        console.log(data.results);
        console.log(data)
        return data.results;
    } catch (error) {
        throw 404;
    }

}