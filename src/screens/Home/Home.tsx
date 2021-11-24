import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { getPokemons } from "../../services/pokemon.services";
import { IHomeProps } from "../../types/interfaces";

const Home = ({ navigation }: IHomeProps) => {

    getPokemons();

    const handleDetails = (): void => {
        navigation.navigate("Details");
    }

    return (
        <View>
            <Text> This is Home </Text>
            <Button title="Go To Details" onPress={() => handleDetails()}></Button>
        </View>
    )
}

export default Home; 