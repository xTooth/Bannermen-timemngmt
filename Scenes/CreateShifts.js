import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CreateShifts = () => {
   const goToAcceptApplications = () => {
      Actions.AcceptApplications()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAcceptApplications}>
         <Text>This is CreateShifts!</Text>
      </TouchableOpacity>
   )
}
export default CreateShifts