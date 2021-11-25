import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      width: 100,
      height: 60,
      paddingLeft: 90,
    },
    button: {
      marginTop: 15,
      marginRight: -80,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
      flex: 1,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: 'white',
    },
});

export default styles;