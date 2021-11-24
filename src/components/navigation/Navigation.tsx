import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home/Home"
import Details from "../../screens/Details/Details";

const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="Details" component={Details}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navigation;
