import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import pictureComponentStyle from './PictureComponentStyle'
import {enableScreens} from "react-native-screens";

enableScreens();
const PictureButton = (props) => {
    const {id, name, navigation} = props;
    const onClickPictureButton = () => {
        return navigation.navigate('ResourceComponent',{
            id: id,
            name: name
        });
    };

    return (
    <View style={pictureComponentStyle.container}>
        <TouchableOpacity style={pictureComponentStyle.button} onPress={onClickPictureButton}>
            <Text style={pictureComponentStyle.buttonText}>{name}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PictureButton;