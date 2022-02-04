import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import foodassets from "./foodassets";
import SliderComponent from "../SliderComponent";

const FoodListComponent = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={foodassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default FoodListComponent;
