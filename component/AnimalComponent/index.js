import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import animalassets from "./animalassets";
import SliderComponent from "../SliderComponent";

const AnimalListComponent = (props) => {
    console.log(animalassets);
  return (
    <View style={styles.container}>
      <FlatList data={animalassets}
                renderItem={({item}) => <SliderComponent fields={item}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default AnimalListComponent;
