import { StyleSheet } from 'react-native';

const pictureComponentStyle = StyleSheet.create({
  container: {
    width: '20%',
    padding: 10
  },
  button: {
    backgroundColor: 'yellow',
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default pictureComponentStyle;