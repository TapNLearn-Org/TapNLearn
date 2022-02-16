import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import pictureComponentStyle from './PictureComponentStyle'
import {enableScreens} from "react-native-screens";
import {BASE_API_URL, GET_RESOURCE_URL, GET_SUB_CATEGORY_URL} from "./Constants";

enableScreens();
const PictureButton = (props) => {
    const {categoryId, subCategoryId, name, navigation} = props;
    const loadData = async () => {
        let API_URL = BASE_API_URL + GET_RESOURCE_URL + categoryId;
        if (subCategoryId != undefined) {
            API_URL = API_URL + GET_SUB_CATEGORY_URL + subCategoryId;
        }
        return await fetch(API_URL, {method: 'GET'})
            .then((response) => response.json())
            .catch((error) => {
                const errorString = JSON.stringify(error);
                alert(errorString);
                console.error(errorString);
            });
    };

    const onClickPictureButton = () => {
        loadData().then((responseJson) => {
            const subCategoryList = responseJson.subCategoryList;
            const resourceDetailsList = responseJson.resourceDetailsList;

            if(subCategoryList === undefined || subCategoryList === null) {
                return navigation.navigate('ResourceComponent', {
                    resourceDetailsList: resourceDetailsList
                });
            }else{
                return navigation.navigate('SubCategoryComponent', {
                    subCategoryList: subCategoryList
                });
            }
        });
    };

    return (
    <View style={pictureComponentStyle.container}>
        <TouchableOpacity style={pictureComponentStyle.button} onPress={onClickPictureButton}>
            <Text style={pictureComponentStyle.buttonText}>{name}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PictureButton;