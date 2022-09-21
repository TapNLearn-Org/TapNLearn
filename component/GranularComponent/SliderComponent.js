import React from 'react';
import {Text, View, Image} from 'react-native';
import sliderComponentStyle from './SliderComponentStyle';
import {LinearGradient} from "expo-linear-gradient";
//import { AntDesign } from '@expo/vector-icons';

const SliderComponent = (props) => {
//    const {navigation} = props;
    const {name, image} = props.fields;
    return (
        <View style={sliderComponentStyle.container}>
            <LinearGradient
                colors={['rgba(252,245,198,0.62)', 'rgba(239,250,167,0.51)', 'rgba(239,241,185,0.78)', 'rgba(224,248,155,0.72)']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
            >
                <Image source={image} style={sliderComponentStyle.image}/>
                <View style={sliderComponentStyle.appTitle}>
                    <Text style={sliderComponentStyle.title}>{name}</Text>
                </View>
            </LinearGradient>
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
