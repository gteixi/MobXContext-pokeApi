import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import PokemonList from "../../components/PokemonList/PokemonList"
import useStore from "../../hooks/useStore"
import { IHomeProps, IPokemonsProps } from "../../types/interfaces"

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
        <View>
            <Text> This is Home </Text>
            <FlatList 
            data={pokemons} 
            renderItem={renderList}/>
        </View>
    )
})

export default Home; 