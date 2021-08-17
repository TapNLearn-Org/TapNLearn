import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import PictureButton from "../PictureButton";
import ActivityListComponent from "../ActivityComponent";
import AnimalListComponent from "../AnimalComponent";
import BodyPartsListComponent from "../ColorsComponent";
import ColorsListComponent from "../ColorsComponent";
import CutleryListComponent from "../CutleryComponent";
import FoodListComponent from "../FoodComponent";
import FruitListComponent from "../FruitComponent";
import ObjectListComponent from "../ObjectComponent";
import ShapesListComponent from "../ShapesComponent";
import SportsListComponent from "../SportsComponent";
import VegetableListComponent from "../VegetableComponent";

const HomeComponent = (props) => {
  return (
    <View style={styles.homeScreen}>
        <ImageBackground source={require('../../assets/pictures/sports/Cycling.webp')}
        style={styles.image} />
        <View style={styles.appTitle}>
            <Text style={styles.title}>First Step Learning</Text>
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
            <PictureButton text="Food" navigation={props.navigation}/>
            <PictureButton text="Fruit" navigation={props.navigation}/>
            <PictureButton text="Objects" navigation={props.navigation}/>
            <PictureButton text="Shapes" navigation={props.navigation}/>
            <PictureButton text="Sports" navigation={props.navigation}/>
        </View>
        <View style={styles.pictureButton}>
            <PictureButton text="Vegetable" navigation={props.navigation}/>
        </View>
    </View>
  );
};

export default HomeComponent;
