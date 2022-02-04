import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import PictureButton from "../PictureButton";

const HomeComponent = (props) => {
  return (
    <View style={styles.homeScreen}>
        <ImageBackground source={require('../../assets/pictures/sports/Cycling.webp')}
        style={styles.image} />
        <View style={styles.appTitle}>
            <Text style={styles.title}>Tap N Learn</Text>
            <Text style={styles.subTitle}>Where learning starts...</Text>
        </View>
        <View style={styles.pictureButton}>
            <PictureButton text="Activity" navigation={props.navigation}/>
            <PictureButton text="Animals" navigation={props.navigation}/>
            <PictureButton text="BodyParts" navigation={props.navigation}/>
            <PictureButton text="Colors" navigation={props.navigation}/>
            <PictureButton text="Cutlery" navigation={props.navigation}/>
        </View>
        <View style={styles.pictureButton}>
            <PictureButton text="Flags" navigation={props.navigation}/>
            <PictureButton text="Food" navigation={props.navigation}/>
            <PictureButton text="Fruit" navigation={props.navigation}/>
            <PictureButton text="Objects" navigation={props.navigation}/>
            <PictureButton text="Shapes" navigation={props.navigation}/>
        </View>
        <View style={styles.pictureButton}>
            <PictureButton text="Sports" navigation={props.navigation}/>
            <PictureButton text="Vegetable" navigation={props.navigation}/>
        </View>
    </View>
  );
};

export default HomeComponent;
