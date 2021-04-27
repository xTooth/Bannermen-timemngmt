import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const AvailableShifts = () => {
   const goToAcceptedShifts = () => {
      Actions.AcceptedShifts()
   }
   return (
      <View>
      <TouchableOpacity style = {{margin: 30}} onPress = {goToAcceptedShifts}>
         <Text>AcceptedShifts</Text>
      </TouchableOpacity>
      <Text>This is the page for listing available Shifts</Text>
         
      </View>
      
   )
}
export default AvailableShifts