import { observer } from "mobx-react-lite"
import React from "react"
import { ImageBackground, Text, View } from "react-native"

import styles from "./PokemonsNotFound.styles"

const PokemonsNotFound = observer(() => {

    const backgroundImage ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg02.deviantart.net%2F27dd%2Fi%2F2014%2F124%2F3%2F9%2Fkalos_pokedex_wallpaper_by_kalosdex-d7h52e1.png&f=1&nofb=1";
    return (
        <ImageBackground source={{ uri: backgroundImage }} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text>Pokemons Not Found, Gotta Catch them all!!</Text>
            </View>
        </ImageBackground>
    )
})

export default PokemonsNotFound;

