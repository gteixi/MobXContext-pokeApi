import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Pressable, Text, View, ImageBackground, FlatList } from "react-native"
//import { FlatList } from "react-native-gesture-handler" -> DONE

// REVIEW: missing import "react-native-gesture-handler" the app crashes -> DONE

import NextPageButton from "../../components/NextPageButton/NextPageButton"
import PokemonItem from "../../components/PokemonItem/PokemonItem"
import useStore from "../../hooks/useStore"
import { IHomeProps, IPokemon, IPokemonsProps } from "../../types/interfaces"

import styles from "./Home.styles"

const Home = observer (({ navigation }: IHomeProps) => {

    const { PokemonStore } = useStore();
    const { pokemons } = PokemonStore;

    useEffect(() => {
        PokemonStore.fetchPokemons();
    },[])

    const handleDetails = (pokemonURL: string): void => {

        // REVIEW: why you're using push instead of navigate? what's the difference? -> DONE (.push creates a new screen/route and .navigate just renders an existing screen already in memory)
        navigation.push("PokemonDetails", { pokemonURL });
    }

    const handleNextPage = (): void => {

        // REVIEW: why we are navigating to another screen? -> DONE
        navigation.push("NextPokemons");
    }

    const handlePokemonsNotFound = (): void => {
        // REVIEW: typescript will complain about missing definition of navigate, because you rewrote the interface, you could import the original one from react-navigation -> DONE
        navigation.navigate("PokemonsNotFound");
    }

    // REVIEW: add a type only for the entity object, you don't need to create another interface for the whole params object, we are expecting a pokemon, we don't need to specify that for a list item there is a destructured object with other params

    const renderItem = ({ item }: {item : IPokemon}) => (<PokemonItem pokemon={item} handleDetails={handleDetails}/>)      

    const backgroundImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EGDFQzgSuJAPLNw46oFf_QHaNK%26pid%3DApi&f=1";
   
    return (
        <ImageBackground source={{ uri: backgroundImage }} resizeMode="cover" style={styles.image}>
            <View style={styles.homeContainer}>
                <FlatList
                data={pokemons} 
                renderItem={renderItem}/>
            </View>
                <View style={styles.pagination}>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.buttonBack} onPress={() => handlePokemonsNotFound()}>
                            <Text style={styles.text}> {"No Previous"} </Text>
                        </Pressable>
                    <NextPageButton OnPress={handleNextPage}/>
                </View>
            </View>
        </ImageBackground>
    )
})

export default Home; 