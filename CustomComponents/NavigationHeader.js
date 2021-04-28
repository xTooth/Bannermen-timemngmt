import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={{marginRight: 15}}>Main Menu</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;