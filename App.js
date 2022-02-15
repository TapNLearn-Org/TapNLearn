import React from 'react';
import {StyleSheet, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import HomeComponent from "./component/HomeComponent";
import SportsListComponent from "./component/ModelComponents/SportsComponent";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {enableScreens} from "react-native-screens";
import AnimalListComponent from "./component/ModelComponents/AnimalComponent";
import FoodListComponent from "./component/ModelComponents/FoodComponent";
import FruitListComponent from "./component/ModelComponents/FruitComponent";
import VegetableListComponent from "./component/ModelComponents/VegetableComponent";
import ActivityListComponent from "./component/ModelComponents/ActivityComponent";
import BodyPartsListComponent from "./component/ModelComponents/BodyPartsComponent";
import ColorsListComponent from "./component/ModelComponents/ColorsComponent";
import CutleryListComponent from "./component/ModelComponents/CutleryComponent";
import ObjectListComponent from "./component/ModelComponents/ObjectComponent";
import ShapesListComponent from "./component/ModelComponents/ShapesComponent";
import FlagsListComponent from "./component/ModelComponents/FlagsComponent";
import {AdMobBanner, setTestDeviceIDAsync} from "expo-ads-admob";
import BabyAnimalListComponent from "./component/ModelComponents/BabyAnimalComponent";
import PeopleListComponent from "./component/ModelComponents/PeopleComponent";
import FlowerListComponent from "./component/ModelComponents/FlowerComponent";

// home stack navigator screens
const Stack = createNativeStackNavigator();
enableScreens();
setTestDeviceIDAsync('EMULATOR').then(r => ({}));

export default function App() {
  function bannerError() {};
    return (

    <View style={styles.container}>
      <View style={styles.applicationContent}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeComponent} />
          <Stack.Screen name="Activity" options={{headerShown: false}} component={ActivityListComponent} />
          <Stack.Screen name="Animals" options={{headerShown: false}} component={AnimalListComponent} />
          <Stack.Screen name="BodyParts" options={{headerShown: false}} component={BodyPartsListComponent} />
          <Stack.Screen name="Colors" options={{headerShown: false}} component={ColorsListComponent} />
          <Stack.Screen name="Cutlery" options={{headerShown: false}} component={CutleryListComponent} />
          <Stack.Screen name="Flags" options={{headerShown: false}} component={FlagsListComponent} />
          <Stack.Screen name="Food" options={{headerShown: false}} component={FoodListComponent} />
          <Stack.Screen name="Fruit" options={{headerShown: false}} component={FruitListComponent} />
          <Stack.Screen name="Objects" options={{headerShown: false}} component={ObjectListComponent} />
          <Stack.Screen name="Shapes" options={{headerShown: false}} component={ShapesListComponent} />
          <Stack.Screen name="Sports" options={{headerShown: false}} component={SportsListComponent} />
          <Stack.Screen name="Vegetable" options={{headerShown: false}} component={VegetableListComponent} />
          <Stack.Screen name="Baby Animal" options={{headerShown: false}} component={BabyAnimalListComponent} />
          <Stack.Screen name="People" options={{headerShown: false}} component={PeopleListComponent} />
          <Stack.Screen name="Flower" options={{headerShown: false}} component={FlowerListComponent} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
{/*
      <View style={styles.addContent}>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-1302685970072627/7331682888"
          didFailToReceiveAdWithError={bannerError()} />
      </View>
*/}
    </View>

  )};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  applicationContent: {
    width: '100%',
    height: '100%'
  },
  addContent: {
    position: "absolute",
    bottom: 0
  },
});
