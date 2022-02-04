import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import activityassets from "./activityassets";
import SliderComponent from "../SliderComponent";

const ActivityListComponent = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={activityassets}
                renderItem={({item}) => <SliderComponent fields={item} navigation={props.navigation}/>}
                keyExtractor={item => item.name}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default ActivityListComponent;
