import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import HomeComponent from "./component/CompoundComponent/HomeComponent/HomeComponent";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {enableScreens} from "react-native-screens";
import ResourceComponent from "./component/CompoundComponent/ResourceComponents/ResourceComponent";
import {setTestDeviceIDAsync} from "expo-ads-admob";
import pictureComponentStyle from "./component/GranularComponent/PictureComponentStyle";

// home stack navigator screens
const Stack = createNativeStackNavigator();
enableScreens();
setTestDeviceIDAsync('EMULATOR').then(r => ({}));

export default function App() {
  function bannerError() {};
    return (

    <View style={sliderComponentStyle.container}>
      <View style={sliderComponentStyle.applicationContent}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeComponent" options={{headerShown: false}} component={HomeComponent} />
          <Stack.Screen name="ResourceComponent" options={{headerShown: false}} component={ResourceComponent} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
{/*
      <View style={sliderComponentStyle.addContent}>
      <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-1302685970072627/7331682888"
          didFailToReceiveAdWithError={bannerError()} />
      </View>
*/}
    </View>

  )};

const sliderComponentStyle = StyleSheet.create({
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
