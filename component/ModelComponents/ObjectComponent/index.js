import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import SliderComponent from "../../SliderComponent";
import objectassets from "./objectassets";

const ObjectListComponent = (props) => {
    return (
        <View style={styles.container}>
          <FlatList data={objectassets}
                    renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                    keyExtractor={item => item.name}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get("window").height}
          />
        </View>
    );
};

export default ObjectListComponent;
