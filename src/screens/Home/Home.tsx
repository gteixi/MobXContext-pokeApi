import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
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

    const renderList = ({ item }: IPokemonsProps) => (<PokemonList pokemon={item} handleDetails={handleDetails}/>)

    return (
        <SafeAreaView style={AppStyles.screen.mainScreen}>
            <View style={styles.homeContainer}>
                <FlatList
                data={pokemons} 
                renderItem={renderList}/>
            </View>
        </SafeAreaView>
    )
})

export default Home; 