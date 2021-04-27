import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import AvailableShifts from '../Scenes/AvailableShifts.js';
import AcceptedShifts from '../Scenes/AcceptedShifts.js';
import CustomSidebarMenu from '../CustomComponents/CustomSidebar';
import NavigationDrawerHeader from '../CustomComponents/NavigationHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AvailableShiftsStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AvailableShifts">
      <Stack.Screen
        name="AvailableShifts"
        component={AvailableShifts}
        options={{
          title: 'Available Shifts', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AcceptedShiftsStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="AcceptedShifts"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AcceptedShifts"
        component={AcceptedShifts}
        options={{
          title: 'Accepted Shifts', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="AvailableShiftsStack"
        options={{drawerLabel: 'Available Shifts'}}
        component={AvailableShiftsStack}
      />
      <Drawer.Screen
        name="AcceptedShiftsStack"
        options={{drawerLabel: 'Accepted Shifts'}}
        component={AcceptedShiftsStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;