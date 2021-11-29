import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { FlatList, ImageBackground, View } from "react-native"

// REVIEW: missing import "react-native-gesture-handler" the app crashes
import { SafeAreaView } from "react-native-safe-area-context"
import NextPageButton from "../../components/NextPageButton/NextPageButton"
import PokemonItem from "../../components/PokemonItem/PokemonItem"
import PreviousPageButton from "../../components/PreviousPageButton/PreviousPageButton"
import useStore from "../../hooks/useStore"
import AppStyles from "../../theme/AppStyles"
import { INextPokemonsProps, IPokemonsProps } from "../../types/interfaces"

import styles from "./NextPokemons.styles"

const NextPokemons = observer (({ navigation }: INextPokemonsProps) => {

    const { PokemonStore } = useStore();
    const { nextPokemons } = PokemonStore;

    const link = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    let next = 0;
    const nextLink = nextPokemons?.next;

    useEffect(() => {
        PokemonStore.fetchNextPokemons(link);
    },[])

    useEffect(() => {
        PokemonStore.fetchNextPokemons(nextLink);
    },[next])

    const handleDetails = (pokemonURL: string): void => {
        navigation.push("PokemonDetails", { pokemonURL });
    }

    // REVIEW: this is the typical situation in which you'll use a store so you can track
    // the current page and the next one.
    // Also probably I don't like this solution because it you move forward and back, 
    // definitely you're loosing the state (just try to go forward, 
    // press back and go forward again, you'll see that you're in the third page 
    // when you're expecting to be in the second one)
    const handleNextPage = (): void => {
        navigation.push("NextPokemons");
        next =+ 1;
    }

    const handlePreviousPage = (): void => {
        navigation.push("NextPokemons");
        next =+ 1;
    }

    const renderList = ({ item }: IPokemonsProps) => (<PokemonItem pokemon={item} handleDetails={handleDetails}/>)

    // REVIEW the ImageBackground is exactly the same as the one in Home.tsx, why don't create a common component?
    return (
       
        <ImageBackground source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EGDFQzgSuJAPLNw46oFf_QHaNK%26pid%3DApi&f=1" }} resizeMode="cover" style={styles.image}>
            <View style={styles.homeContainer}>
                <FlatList
                data={nextPokemons?.results} 
                renderItem={renderList}/>
                    <View style={styles.pagination}>
                        <PreviousPageButton OnPress={handlePreviousPage}/>
                        <NextPageButton OnPress={handleNextPage}/>
                    </View>
            </View>
        </ImageBackground>
    )
})

export default NextPokemons;