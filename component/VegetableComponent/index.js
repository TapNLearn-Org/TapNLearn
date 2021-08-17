import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import vegetableassets from "./vegetableassets";
import SliderComponent from "../SliderComponent";

const VegetableListComponent = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={vegetableassets}
                renderItem={({item}) => <SliderComponent fields={item}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default VegetableListComponent;
