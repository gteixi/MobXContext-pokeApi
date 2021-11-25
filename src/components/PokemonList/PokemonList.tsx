import React from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { IPokemonListProps } from "../../types/interfaces"

export default function PokemonList({ pokemon, handleDetails }: IPokemonListProps) {

    const { name, url } = pokemon;

    return (
        <TouchableOpacity
        accessible={true}
        accessibilityLabel={name}
        accessibilityRole="button"
        onPress={() => handleDetails(url)}>
        <Text>{name}</Text>
        </TouchableOpacity>
    )
}