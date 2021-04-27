import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';



export default class App extends React.Component {
  
  state={
    username:"",
    password:""
  }

  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.logo}>OverTimes</Text>
      <Text style={styles.subtext}>By Bannermen</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Username" 
          placeholderTextColor="#fff"
          onChangeText={text => this.setState({email:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password" 
          placeholderTextColor="#fff"
          onChangeText={text => this.setState({password:text})}/>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#003f5c",
  },
  subtext:{
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#003f5c",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});