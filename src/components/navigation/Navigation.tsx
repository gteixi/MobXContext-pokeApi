import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/Home"
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="PokemonDetails" component={PokemonDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navigation;
