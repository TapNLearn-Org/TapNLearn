import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import sportsassets from "./sportsassets";
import SliderComponent from "../../SliderComponent";

const SportsListComponent = (props) => {

  return (
    <View style={styles.container}>
      <FlatList data={sportsassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default SportsListComponent;
