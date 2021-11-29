import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/Home"
import PokemonDetails from "../screens/PokemonDetails/PokemonDetails";
import NextPokemons from "../screens/NextPokemons/NextPokemons";
import PokemonsNotFound from "../screens/PokemonsNotFound/PokemonsNotFound";

// REVIEW: put navigation in a separate directory, the components directory must contain only common components for the whole app
// like buttons, form fields etc -> DONE

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
        initialRouteName="Home">
            <Stack.Screen name="YourPokedex" component={Home}></Stack.Screen>
            <Stack.Screen name="NextPokemons" component={NextPokemons}></Stack.Screen>
            <Stack.Screen name="PokemonsNotFound" component={PokemonsNotFound}></Stack.Screen>
            <Stack.Screen name="PokemonDetails" component={PokemonDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navigation;
