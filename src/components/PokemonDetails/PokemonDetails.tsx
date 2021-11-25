import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import {Text, View, Image } from "react-native"
import { IPokemonDetailsProp } from "../../types/interfaces"
import useStore from "../../hooks/useStore"
import BackButton from "../BackButton/BackButton"

const PokemonDetails = observer(({ navigation, route: { params: { pokemonURL }}}: IPokemonDetailsProp) => {

    const { PokemonStore } = useStore()
    const { pokemonDetails: pokemon } = PokemonStore;

    useEffect(() => {
        PokemonStore.fetchPokemonDetails(pokemonURL)
        return () => {
            PokemonStore.setPokemonDetails(null);
        }
    },[pokemonURL])

    const handleBackButton = () => {
        navigation.pop();
    }

    return (
        <View>
            <Text>{pokemon?.name}</Text>
            <Image source={{ uri: pokemon?.sprites?.front_default }} style={{width: 220, height: 220}} />
            <Image source={{ uri: pokemon?.sprites?.back_default }} style={{width: 220, height: 220}} />
            <Text>Pokemon Height: {pokemon?.height}</Text>
            <Text>Pokemon Weight: {pokemon?.weight}</Text>
            <BackButton OnPress={handleBackButton}/>
        </View>
    )
});

export default PokemonDetails;