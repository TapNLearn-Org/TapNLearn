import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import flowerassets from "./flowerassets";
import SliderComponent from "../../SliderComponent";

const FlowerListComponent = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={flowerassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default FlowerListComponent;
