import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import AcceptApplications from '../Scenes/AcceptApplications';
import CreateShifts from '../Scenes/CreateShifts';
import CustomSidebar from '../CustomComponents/CustomSidebar';
import NavigationHeader from '../CustomComponents/NavigationHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AcceptApplicationsStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="AcceptApplications">
      <Stack.Screen
        name="AcceptApplications"
        component={AcceptApplications}
        options={{
          title: 'Accept Applications', //Set Header Title
          headerLeft: () => (
            <NavigationHeader navigationProps={navigation} />   
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

const CreateShiftsStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="CreateShifts"
      screenOptions={{
        headerLeft: () => (
          <NavigationHeader navigationProps={navigation} />
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
        name="CreateShifts"
        component={CreateShifts}
        options={{
          title: 'Create Shifts', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ManagerNavigatorRoutes = (props) => {
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
      drawerContent={CustomSidebar}>
      <Drawer.Screen
        name="AcceptApplicationsStack"
        options={{drawerLabel: 'Accept Applications'}}
        component={AcceptApplicationsStack}
      />
      <Drawer.Screen
        name="CreateShiftsStack"
        options={{drawerLabel: 'Create Shifts'}}
        component={CreateShiftsStack}
      />
    </Drawer.Navigator>
  );
};

export default ManagerNavigatorRoutes;