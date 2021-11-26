import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    },

    pagination: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -20,
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
      },
      button: {
      marginTop: 20,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'blue',
        flex: 1,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
      },

    buttonBack: {
        marginTop: 20,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          backgroundColor: 'grey',
          flex: 1,
        },

    buttonNext: {
        marginTop: 20,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          backgroundColor: 'blue',
          flex: 1,
        },
});

export default styles;