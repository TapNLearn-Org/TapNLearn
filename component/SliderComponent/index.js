import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import styles from './styles';
import PictureButton from "../PictureButton";

const SliderComponent = (props) => {
    const {name, image} = props.fields;

    return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.appTitle}>
            <Text style={styles.title}>{name}</Text>
        </View>
      </View>
    );
};

export default SliderComponent;
