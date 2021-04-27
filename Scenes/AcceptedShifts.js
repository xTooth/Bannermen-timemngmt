import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const AcceptedShifts = () => {
   const goToAvailableShifts = () => {
      Actions.AvailableShifts()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAvailableShifts}>
         <Text>This is AcceptedShifts!</Text>
      </TouchableOpacity>
   )
}
export default AcceptedShifts