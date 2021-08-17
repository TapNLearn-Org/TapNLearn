import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import bodypartsassets from "./bodypartsassets";
import SliderComponent from "../SliderComponent";

const BodyPartsListComponent = (props) => {
    return (
        <View style={styles.container}>
          <FlatList data={bodypartsassets}
                    renderItem={({item}) => <SliderComponent fields={item}/>}
                    keyExtractor={item => item.name}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get("window").height}
          />
        </View>
    );
};

export default BodyPartsListComponent;
