import React from 'react';
import {Text, View, Image} from 'react-native';
import sliderComponentStyle from './SliderComponentStyle';
//import { AntDesign } from '@expo/vector-icons';

const SliderComponent = (props) => {
//    const {navigation} = props;
    const {name, image} = props.fields;
    return (
    <View style={sliderComponentStyle.container}>
        <Image source={image} style={sliderComponentStyle.image} />
        <View style={sliderComponentStyle.appTitle}>
            <Text style={sliderComponentStyle.title}>{name}</Text>
        </View>
{/*
        <View style={sliderComponentStyle.backButton}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <AntDesign name="back" size={35} color="red" />
            </TouchableOpacity>
        </View>
*/}
      </View>
    );
};

export default SliderComponent;
