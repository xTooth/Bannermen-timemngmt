import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
      <Icon name={'menu'}  size={40} style={{color:'white'}}/>
      </TouchableOpacity>
      
    </View>
  );
};
export default NavigationDrawerHeader;