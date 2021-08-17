import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import HomeComponent from "./component/HomeComponent";
import SportsListComponent from "./component/SportsComponent";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {enableScreens} from "react-native-screens";
import AnimalListComponent from "./component/AnimalComponent";
import FoodListComponent from "./component/FoodComponent";
import FruitListComponent from "./component/FruitComponent";
import VegetableListComponent from "./component/VegetableComponent";
import ActivityListComponent from "./component/ActivityComponent";
import BodyPartsListComponent from "./component/BodyPartsComponent";
import ColorsListComponent from "./component/ColorsComponent";
import CutleryListComponent from "./component/CutleryComponent";
import ObjectListComponent from "./component/ObjectComponent";
import ShapesListComponent from "./component/ShapesComponent";

// home stack navigator screens
const Stack = createNativeStackNavigator();
enableScreens();

export default function App() {
  return (

    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeComponent} />
          <Stack.Screen name="Activity" options={{headerShown: false}} component={ActivityListComponent} />
          <Stack.Screen name="Animals" options={{headerShown: false}} component={AnimalListComponent} />
          <Stack.Screen name="BodyParts" options={{headerShown: false}} component={BodyPartsListComponent} />
          <Stack.Screen name="Colors" options={{headerShown: false}} component={ColorsListComponent} />
          <Stack.Screen name="Cutlery" options={{headerShown: false}} component={CutleryListComponent} />
          <Stack.Screen name="Food" options={{headerShown: false}} component={FoodListComponent} />
          <Stack.Screen name="Fruit" options={{headerShown: false}} component={FruitListComponent} />
          <Stack.Screen name="Objects" options={{headerShown: false}} component={ObjectListComponent} />
          <Stack.Screen name="Shapes" options={{headerShown: false}} component={ShapesListComponent} />
          <Stack.Screen name="Sports" options={{headerShown: false}} component={SportsListComponent} />
          <Stack.Screen name="Vegetable" options={{headerShown: false}} component={VegetableListComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});
