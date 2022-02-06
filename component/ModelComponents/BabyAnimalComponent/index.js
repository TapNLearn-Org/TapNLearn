import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import babyanimalassets from "./babyanimalassets";
import SliderComponent from "../../SliderComponent";

const BabyAnimalListComponent = (props) => {

  return (
    <View style={styles.container}>
      <FlatList data={babyanimalassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default BabyAnimalListComponent;
