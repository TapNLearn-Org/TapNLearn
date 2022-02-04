import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import shapesassets from "./shapesassets";
import SliderComponent from "../SliderComponent";

const ShapesListComponent = (props) => {

  return (
    <View style={styles.container}>
      <FlatList data={shapesassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default ShapesListComponent;
