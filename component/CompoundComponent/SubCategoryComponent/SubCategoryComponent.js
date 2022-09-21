import React, {useState} from 'react';
import {ImageBackground, View} from 'react-native';
import PictureButton from "../../GranularComponent/PictureComponent";
import {BASE_IMAGE_URL} from "../../GranularComponent/Constants";
import subCategoryComponentStyle from "./SubCategoryComponentStyle";

const SubCategoryComponent = (props) => {
    let image = {uri: BASE_IMAGE_URL};
    const [data, setData] = useState(props.route.params.subCategoryList);
    return (
    <View style={subCategoryComponentStyle.homeScreen}>
        <ImageBackground source={image} style={subCategoryComponentStyle.image} />
        <View style={subCategoryComponentStyle.pictureButton}>
            {
                data.map((pictureButtonData) => {
                    return (
                        <PictureButton key={pictureButtonData.categoryId + "_" + pictureButtonData.subCategoryId}
                                       categoryId={pictureButtonData.categoryId}
                                       subCategoryId={pictureButtonData.subCategoryId}
                                       name={pictureButtonData.name} navigation={props.navigation}/>
                    );
                })
            }
        </View>
    </View>
  );
};

export default SubCategoryComponent;
