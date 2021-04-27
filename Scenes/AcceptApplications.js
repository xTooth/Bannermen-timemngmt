import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const AcceptApplications = () => {
   const goToCreateShifts = () => {
      Actions.CreateShifts()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToCreateShifts}>
         <Text>Return to Create Shifts</Text>
      </TouchableOpacity>
   )
}
export default AcceptApplications