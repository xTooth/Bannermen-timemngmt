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

const AcceptApplications = () => {

   const data = require('../testdata/shift-requests.json')

   const ListRender = () => {
      return(
         data.map((l, i) => (
           <ListItem key={i} bottomDivider>
             <ListItem.Content>
               <ListItem.Title>{l.name}</ListItem.Title>
               <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
               <Text>Employee: {l.EmployeeName}</Text>
               <Text>Location:{l.Location}</Text>
               <Text>Shift:{l.ShiftAppliedFor}</Text>
               <Text>Duration:{l.Duration}</Text>
               <Text>Total amount of applicants:{l.TotalNumberOfApplicants}</Text>
               <View style={styles.buttonStyleContainer}>
               <Button
               title="Accept application"
               onPress={() => Alert.alert('Accepted')}
               />
               <Button
               title="Decline application"
               onPress={() => Alert.alert('Declined')}
               />
               </View>
             </ListItem.Content>
           </ListItem>
         ))
         
   )}
   
      return (
         <SafeAreaView style={styles.container}>
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
export default AcceptApplications