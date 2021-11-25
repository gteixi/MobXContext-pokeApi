import React from "react"
import { Text, View } from "react-native"
import { IPokemonListProps } from "../../types/interfaces"

export default function PokemonList({ pokemon }: IPokemonListProps) {

    const { name } = pokemon;

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}