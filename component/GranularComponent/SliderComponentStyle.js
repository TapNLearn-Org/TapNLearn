import {Dimensions, StyleSheet} from 'react-native';

//const screenHeight = Dimensions.get("window").height * 0.9;
const screenHeight = Dimensions.get("window").height;
const sliderComponentStyle = StyleSheet.create({

    container: {
      width: '100%',
      height: screenHeight
    },
    appTitle: {
        marginTop: screenHeight - 60,
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
    backButton: {
        marginTop: screenHeight - 50,
        position: "absolute",
        width: 32,
        color: "tomato"
    },

});

export default sliderComponentStyle;