import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import NextPageButton from "../../components/NextPageButton/NextPageButton"
import PokemonList from "../../components/PokemonList/PokemonList"
import useStore from "../../hooks/useStore"
import AppStyles from "../../theme/AppStyles"
import { IHomeProps, IPokemonsProps } from "../../types/interfaces"

import styles from "./NextPokemons.styles"

const NextPokemons = observer (({ navigation }: IHomeProps) => {

    const { PokemonStore } = useStore();
    const { nextPokemons } = PokemonStore;

    const link = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    let next = 0;
    let nextLink = nextPokemons?.next;

    useEffect(() => {
        PokemonStore.fetchNextPokemons(link);
    },[])

    useEffect(() => {
        PokemonStore.fetchNextPokemons(nextLink);
    },[next])

    const handleDetails = (pokemonURL: string): void => {
        navigation.push("PokemonDetails", { pokemonURL });
    }

    const handleNextPage = (): void => {
        navigation.push("NextPokemons",);
        next =+ 1;
    }


    const renderList = ({ item }: IPokemonsProps) => (<PokemonList pokemon={item} handleDetails={handleDetails}/>)

    return (
        <SafeAreaView style={AppStyles.screen.mainScreen}>
            <View style={styles.homeContainer}>
                <FlatList
                data={nextPokemons?.results} 
                renderItem={renderList}/>
                <NextPageButton OnPress={handleNextPage}/>
            </View>
        </SafeAreaView>
    )
})

export default NextPokemons;