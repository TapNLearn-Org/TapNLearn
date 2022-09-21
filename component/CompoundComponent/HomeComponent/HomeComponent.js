import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import PictureButton from "../../GranularComponent/PictureComponent";
import {BASE_API_URL, BASE_IMAGE_URL, GET_CATEGORY_URL} from "../../GranularComponent/Constants";
import homeComponentStyle from "./HomeComponentStyle";

const HomeComponent = (props) => {
    let image = {uri: BASE_IMAGE_URL};
    const [data, setData] = useState([]);
    console.log("In HomeComponent");
    const loadData = () => {
        console.log("In loadData");
        fetch(BASE_API_URL + GET_CATEGORY_URL, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);})
            .catch((error) => {
                const errorString = JSON.stringify(error);
                alert(errorString);
                console.error(errorString);
            });
    };
    useEffect(loadData,[setData]);
    return (
    <View style={homeComponentStyle.homeScreen}>
        <ImageBackground source={image} style={homeComponentStyle.image} />
        <View style={homeComponentStyle.appTitle}>
            <Text style={homeComponentStyle.title}>Tap N Learn</Text>
            <Text style={homeComponentStyle.subTitle}>Where learning starts...</Text>
        </View>
        <View style={homeComponentStyle.pictureButton}>
            {
                data.map((pictureButtonData) => {
                    return (
                        <PictureButton key={pictureButtonData.categoryId} categoryId={pictureButtonData.categoryId}
                                       name={pictureButtonData.name} navigation={props.navigation}/>
                    );
                })
            }
        </View>
    </View>
  );
};

export default HomeComponent;
