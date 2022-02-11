import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import PictureButton from "../PictureButton";

const HomeComponent = (props) => {
    //let image = require('../../assets/supporting/BackGround2.jpg');
    let image = {uri: "https://tapnlearnresources.s3.ap-southeast-1.amazonaws.com/pictures/supporting/BackGround2.jpg"};
  return (
    <View style={styles.homeScreen}>
        <ImageBackground source={image} style={styles.image} />
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
            <PictureButton text="Baby Animal" navigation={props.navigation}/>
            <PictureButton text="People" navigation={props.navigation}/>
            <PictureButton text="Flower" navigation={props.navigation}/>
        </View>
    </View>
  );
};

export default HomeComponent;
