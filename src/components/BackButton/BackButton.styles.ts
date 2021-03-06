import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
    },
    button: {
      marginLeft: 120,
      marginRight: 120,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
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