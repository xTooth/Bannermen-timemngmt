import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, Platform,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateShifts() {

  const [location, setLocation] = useState('');
  const [startdate, setStartDate] = useState(new Date());
  const [starttime, setStartTime] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [endtime, setEndTime] = useState(new Date());
  const [startdatemode, setStartDateMode] = useState('date');
  const [startdateshow, setStartDateShow] = useState(false);
  const [enddatemode, setEndDateMode] = useState('date');
  const [enddateshow, setEndDateShow] = useState(false);

  const onStartDateChange = (event, selectedValue) => {
    if (startdatemode == 'date') {
      const currentDate = selectedValue || new Date();
      setStartDate(currentDate);
      setStartDateMode('time');
      setStartDateShow(Platform.OS !== 'android');
    } else {
      const selectedTime = selectedValue || new Date();
      setStartTime(selectedTime);
      setStartDateShow(Platform.OS !== 'android');
      setStartDateMode('date');
    }
  };

  const onEndDateChange = (event, selectedValue) => {
    if (enddatemode == 'date') {
      const currentDate = selectedValue || new Date();
      setEndDate(currentDate);
      setEndDateMode('time');
      setEndDateShow(Platform.OS !== 'android');
    } else {
      const selectedTime = selectedValue || new Date();
      setEndTime(selectedTime);
      setEndDateShow(Platform.OS !== 'android');
      setEndDateMode('date');
    }
  };

  const showStartMode = (currentMode) => {
    setStartDateShow(true);
    setStartDateMode(currentMode);
  };

  const showEndMode = (currentMode) => {
    setEndDateShow(true);
    setEndDateMode(currentMode);
  };
  
  const showStartDatepicker = () => {
    showStartMode('date');
  };
  const showEndDatepicker = () => {
    showEndMode('date');
  };

  const formatDate = (date, time) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} T ${time.getHours()}:${time.getMinutes()}`;
  };

  return (
    
    <View style={{ marginTop: 80, marginLeft : 20 }}>
      <View>
      <Text style={{fontSize: 20, padding: 5, marginLeft:2, alignItems: "center", color: "#008b8b"}}>CREATE SHIFT FOR ABSENCE</Text>


      <TouchableOpacity onPress={showStartDatepicker}>
        <Text style={{fontSize: 20, padding: 30, marginLeft:20, alignItems: "center"}}>Pick startDate of shift</Text>
      </TouchableOpacity>
      
      {/* <Text style={{fontSize: 20}}>{formatDate(startdate, starttime)}</Text> */}
      
      {startdateshow && (
        <DateTimePicker
          testID="dateTimePicker1"
          value={startdate}
          mode={startdatemode}
          is24Hour={true}
          display="default"
          onChange={onStartDateChange}
        />
      )}
      </View>
      <View><Text>Selected Start Date of shift - {formatDate(startdate, starttime)}</Text></View>

      <View>
      <TouchableOpacity onPress={showEndDatepicker}>
        <Text style={{fontSize: 20, padding: 30, marginLeft:20, alignItems: "center"}}>Pick endDate of shift</Text>
      </TouchableOpacity>

      {/* <Text style={{fontSize: 20}}>{formatDate(enddate, endtime)}</Text> */}

      {enddateshow && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={enddate}
          mode={enddatemode}
          is24Hour={true}
          display="default"
          onChange={onEndDateChange}
        />
      )}
      </View>
      <View><Text>Selected End Date of shift - {formatDate(enddate, endtime)}</Text></View>
      
      <StatusBar style="auto" />
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Office Location of Shift"
          placeholderTextColor="#003f5c"
          onChangeText={text => setLocation(text)}
          value={location}
        />
      </View>
      <View><Text styles ={{height: 50,flex: 1,padding: 10,marginLeft: 20,}}>Location field entered - {location.toString()}</Text></View>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    marginLeft: 25,
    marginTop: 40,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  submitBtn: {
    width: "80%",
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 40,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8fbc8f",
  },
});