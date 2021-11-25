import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import {Text, View, Image } from "react-native"
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

    return (
        <View>
            <Image source={{ uri: pokemon?.sprites?.front_default }} style={{width: 250, height: 250}} />
            <Image source={{ uri: pokemon?.sprites?.back_default }} style={{width: 250, height: 250}} />
            <Text>{pokemon?.base_experience}</Text>
        </View>
    )
});

export default PokemonDetails;