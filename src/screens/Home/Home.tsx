import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import NextPageButton from "../../components/NextPageButton/NextPageButton"
import PokemonList from "../../components/PokemonList/PokemonList"
import useStore from "../../hooks/useStore"
import AppStyles from "../../theme/AppStyles"
import { IHomeProps, IPokemonsProps } from "../../types/interfaces"

import styles from "./Home.styles"

const Home = observer (({ navigation }: IHomeProps) => {

    const { PokemonStore } = useStore();
    const { pokemons } = PokemonStore;

    useEffect(() => {
        PokemonStore.fetchPokemons();
    },[])

    const handleDetails = (pokemonURL: string): void => {
        navigation.push("PokemonDetails", { pokemonURL });
    }

    const handleNextPage = (): void => {
        navigation.navigate("NextPokemons");
    }

    const handlePokemonsNotFound = (): void => {
        navigation.navigate("PokemonsNotFound");
    }

    const renderList = ({ item }: IPokemonsProps) => (<PokemonList pokemon={item} handleDetails={handleDetails}/>)

    return (
        <SafeAreaView style={AppStyles.screen.mainScreen}>
            <View style={styles.homeContainer}>
                <FlatList
                data={pokemons} 
                renderItem={renderList}/>
            </View>
                <View style={styles.pagination}>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.buttonBack} onPress={() => handlePokemonsNotFound()}>
                            <Text style={styles.text}> {"No Previous"} </Text>
                        </Pressable>
                    <NextPageButton OnPress={handleNextPage}/>
                </View>
            </View>
        </SafeAreaView>
    )
})

export default Home; 