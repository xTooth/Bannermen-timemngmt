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
               <Text>Shift starts: {l.startTime}</Text>
               <Text>Shift ends: {l.endTime}</Text>
               <Text>Duration: {l.Duration}</Text>
               <Text>Total amount of applicants: {l.TotalNumberOfApplicants}</Text>
               <View style={styles.buttonStyleContainer}>
               <Button
               title="Accept application"
               onPress={() => Alert.alert('Accepted')}
               style={{margin:5}}
               />
               <Button
               title="Decline application"
               onPress={() => Alert.alert('Declined')}
               style={{margin:5}}
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
      //marginHorizontal: 20,
      marginTop: 5,
     }
   })
export default AcceptApplications