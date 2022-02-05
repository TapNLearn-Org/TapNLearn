import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import colorsassets from "./colorsassets";
import SliderComponent from "../../SliderComponent";

const ColorsListComponent = (props) => {
    return (
        <View style={styles.container}>
          <FlatList data={colorsassets}
                    renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                    keyExtractor={item => item.name}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get("window").height}
          />
        </View>
    );
};

export default ColorsListComponent;
