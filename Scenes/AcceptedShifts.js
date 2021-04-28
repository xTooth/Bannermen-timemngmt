import React from 'react'
import {
   Text,
   View,
   SafeAreaView,
   ScrollView,
   StyleSheet, 
} from 'react-native';
import { ListItem } from 'react-native-elements'




const AcceptedShifts = () => {


   const data = require('../testdata/accepted-shifts.json')

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

export default AcceptedShifts