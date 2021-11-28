import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { IPokemonListProps } from "../../types/interfaces"

// REVIEW: missing import "react-native-gesture-handler" the app crashes

import styles from "./PokemonList.styles";

// REVIEW: bad naming, this is not a list, this is an item of the list, so call it PokemonListItem or PokemonRow or PokemonItem
export default function PokemonList({ pokemon, handleDetails }: IPokemonListProps) {

    const { name, url } = pokemon;

    return (
        <TouchableOpacity
        accessible={true}
        accessibilityLabel={name}
        accessibilityRole="button"
        onPress={() => handleDetails(url)}>
        <Text style={styles.list}>{name}</Text>
        </TouchableOpacity>
    )
}