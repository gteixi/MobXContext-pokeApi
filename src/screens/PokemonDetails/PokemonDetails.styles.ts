import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsContainer: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    },

    title: {
    fontSize: 20,
    lineHeight: 35,
    fontWeight: 'bold',
    letterSpacing: 8,
    color: 'black',
    backgroundColor: "white",
    borderRadius: 4,
    },

    infoText: {
    fontSize: 16,
    lineHeight: 21,
    fontStyle: "italic",
    letterSpacing: 0.5,
    color: 'black',
    },

    imageContainer: {
      paddingTop: 30
    },

    imageSize: {
    width: 200, 
    height: 200
    },

    image: {
      flex: 1,
      justifyContent: "center"
      },

    imageFrontContainer: {
      backgroundColor: "black",
      borderRadius: 400,
    },

    imageBackContainer: {
      marginTop: 30,
      backgroundColor: "black",
      borderRadius: 400,
      marginBottom: 30
    }

});

export default styles;