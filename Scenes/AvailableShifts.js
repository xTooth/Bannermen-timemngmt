import React from 'react'
import { 
   TouchableOpacity,
   Text,
   View,
   StyleSheet,
   SafeAreaView,
   ScrollView,
   Alert
   } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ListItem, Button } from 'react-native-elements'

const AvailableShifts = () => {
   const goToAcceptedShifts = () => {
      Actions.AcceptedShifts()
   }


const data = require('../testdata/shifts.json')


const ListRender = () => {
   return(
      data.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            <Text>Shift starts at:{l.startTime}</Text>
            <Text>Shift ends at:{l.endTime}</Text>
            <Text>Duration:{l.Duration}</Text>
            <Text>Location:{l.Place}</Text>
            <Text>Apply by this time:{l.LastTimeToApply}</Text>
            <View style={styles.buttonStyleContainer}>
            <Button
            title="Apply for this shift"
            onPress={() => Alert.alert('Applied')}
            />
            <Button
            title="Decline this shift"
            onPress={() => Alert.alert('Declined')}
            />
            </View>
          </ListItem.Content>
        </ListItem>
      ))
      
)}

   return (
      <SafeAreaView style={styles.container}>
      <View>
         <TouchableOpacity style = {{margin: 30}} onPress = {goToAcceptedShifts}>
         <Text>AcceptedShifts</Text>
         </TouchableOpacity>   
      </View>
         <ScrollView style={styles.scrollView}>
         <ListRender/>
         </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  buttonStyleContainer: {
   flex: 1,
   flexDirection: 'row',
   marginHorizontal: 20,
    marginTop: 5,
  }
})
export default AvailableShifts