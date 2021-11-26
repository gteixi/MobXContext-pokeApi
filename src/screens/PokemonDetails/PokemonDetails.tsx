import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Text, View, Image, ImageBackground } from "react-native"
import { IPokemonDetailsProp } from "../../types/interfaces"
import useStore from "../../hooks/useStore"
import BackButton from "../../components/BackButton/BackButton"
import styles from "./PokemonDetails.styles"

const PokemonDetails = observer(({ navigation, route: { params: { pokemonURL }}}: IPokemonDetailsProp) => {

    const { PokemonStore } = useStore()
    const { pokemonDetails: pokemon } = PokemonStore;

    useEffect(() => {
        PokemonStore.fetchPokemonDetails(pokemonURL)
        return () => {
            PokemonStore.setPokemonDetails(null);
        }
    },[pokemonURL])

    const handleBackButton = () => {
        navigation.pop();
    }
    

    return (
        <ImageBackground source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EGDFQzgSuJAPLNw46oFf_QHaNK%26pid%3DApi&f=1" }} resizeMode="cover" style={styles.image}>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{pokemon?.name}</Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imageFrontContainer}>
                        <Image source={{ uri: pokemon?.sprites?.front_default }} style={styles.imageSize} />
                    </View>
                    <View style={styles.imageBackContainer}>
                        <Image source={{ uri: pokemon?.sprites?.back_default }} style={styles.imageSize} />
                    </View>
                </View>
            <Text style={styles.infoText}>Pokemon Height: {pokemon?.height}</Text>
            <Text style={styles.infoText}>Pokemon Weight: {pokemon?.weight}</Text>
        </View>
            <BackButton OnPress={handleBackButton}/>
        </ImageBackground>
    )
});

export default PokemonDetails;