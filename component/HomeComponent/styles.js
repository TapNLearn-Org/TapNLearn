import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    homeScreen: {
      width: '100%',
      height: '100%'
    },
    appTitle: {
      marginTop: '2%',
      width: '100%',
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#030EFE"
    },
    subTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#e7fa6d"

    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    pictureButton: {
        width: '100%',
        flexDirection: 'row',
        flexShrink: 1
    }
});

export default styles;