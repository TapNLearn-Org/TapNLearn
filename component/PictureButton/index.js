import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles'
import {enableScreens} from "react-native-screens";

enableScreens();
const PictureButton = (props) => {
    const {text, navigation} = props;

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate(text)}}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PictureButton;