import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
      width: '100%',
      height: Dimensions.get("window").height
    },
    appTitle: {
        marginTop: Dimensions.get("window").height - 60,
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#ed03fe"
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      position: 'absolute'
    },
});

export default styles;