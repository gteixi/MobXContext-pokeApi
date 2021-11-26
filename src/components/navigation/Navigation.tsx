import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/Home"
import PokemonDetails from "../../screens/PokemonDetails/PokemonDetails";
import NextPokemons from "../../screens/NextPokemons/NextPokemons";

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: true,
        }}>
            <Stack.Screen name="Your Pokedex" component={Home}></Stack.Screen>
            <Stack.Screen name="NextPokemons" component={NextPokemons}></Stack.Screen>
            <Stack.Screen name="PokemonDetails" component={PokemonDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navigation;
