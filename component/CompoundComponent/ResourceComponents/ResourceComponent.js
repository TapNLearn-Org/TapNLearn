import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import resourceComponentStyle from './ResourceComponentStyle';
import SliderComponent from "../../GranularComponent/SliderComponent";
import {BASE_API_URL, GET_RESOURCE_URL} from "../../GranularComponent/Constants";

const ResourceComponent = (props) => {
    const [data, setData] = useState([]);
    const id = props.route.params.id;
    const API_URL = BASE_API_URL + GET_RESOURCE_URL + id;
    const loadData = () => {
        fetch(API_URL, {method: 'GET'})
            .then((response) => response.json())
            .then((responseJson) => {setData(responseJson);})
            .catch((error) => {
                const errorString = JSON.stringify(error);
                alert(errorString);
                console.error(errorString);
            });
    };
    useEffect(loadData,[setData]);

    return (
    <View style={resourceComponentStyle.container}>
      <FlatList data={data}
                renderItem={({item}) => <SliderComponent fields={item}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default ResourceComponent;
