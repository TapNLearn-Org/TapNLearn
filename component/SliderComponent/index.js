import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const SliderComponent = (props) => {
    const {navigation} = props;
    const {name, image} = props.fields;

    return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.appTitle}>
            <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.backButton}>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <AntDesign name="back" size={35} color="red" />
            </TouchableOpacity>
        </View>
      </View>
    );
};

export default SliderComponent;
