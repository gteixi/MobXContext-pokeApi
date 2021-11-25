import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/components/navigation/Navigation";

import StoreContextProvider from "./src/contexts/StoreContextProvider";
import store from "./src/mobx/index"

export default function App() {
  return (
    <StoreContextProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreContextProvider>
  );
}