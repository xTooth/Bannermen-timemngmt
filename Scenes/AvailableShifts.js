import React from 'react'
import { 
   Text,
   View,
   StyleSheet,
   SafeAreaView,
   ScrollView,
   Alert
   } from 'react-native';
import { ListItem, Button } from 'react-native-elements'

const AvailableShifts = () => {


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
            style={{margin:5}}
            onPress={() => Alert.alert('Applied')}
            />
            <Button
            title="Decline this shift"
            style={{margin:5}}
            onPress={() => Alert.alert('Declined')}
            />
            </View>
          </ListItem.Content>
        </ListItem>
      ))
      
)}

   return (
      <SafeAreaView style={styles.container}>
         <View style={{margin:10}}></View>
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
    marginTop: 5,
  }
})
export default AvailableShifts