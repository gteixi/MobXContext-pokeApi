import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
      marginTop: 30,
      marginLeft: 80,
      marginRight: 80,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'red',
      flex: 1
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});

export default styles;