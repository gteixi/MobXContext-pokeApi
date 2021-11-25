import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import {Text, View } from "react-native"
import { IPokemonDetailsProp } from "../../types/interfaces"
import useStore from "../../hooks/useStore"

const PokemonDetails = observer(({ navigation, route: { params: { pokemonURL }}}: IPokemonDetailsProp) => {

    const { PokemonStore } = useStore()
    const { pokemonDetails: pokemon } = PokemonStore;

    useEffect(() => {
        PokemonStore.fetchPokemonDetails(pokemonURL)
        return () => {
            PokemonStore.setPokemonDetails(null);
        }
    },[pokemonURL])

    console.log(pokemon);

    return (
        <View>
            <Text>{pokemon?.base_experience}</Text>
        </View>
    )
});

export default PokemonDetails;