import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { IPokemonItemProps } from "../../types/interfaces"

// REVIEW: missing import "react-native-gesture-handler" the app crashes -> DONE

import styles from "./PokemonItem.styles";

// REVIEW: bad naming, this is not a list, this is an item of the list, so call it PokemonListItem or PokemonRow or PokemonItem -> DONE
export default function PokemonItem({ pokemon, handleDetails }: IPokemonItemProps) {

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