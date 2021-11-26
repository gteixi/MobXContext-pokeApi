import { observer } from "mobx-react-lite"
import React from "react"
import { Text, View } from "react-native"

import styles from "./PokemonsNotFound.styles"

const PokemonsNotFound = observer(() => {
    return (
        <View style={styles.container}>
            <Text>Pokemons Not Found</Text>
        </View>
    )
})

export default PokemonsNotFound;

