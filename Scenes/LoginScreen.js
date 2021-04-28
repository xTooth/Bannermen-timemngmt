import React, {useState, createRef} from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

const LoginScreen = ({navigation}) => {
  const [UserName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [errortext, setErrortext] = useState('')

  const passwordInputRef = createRef()

  const handleSubmitPress = () => {
    setErrortext('')
    if (!UserName) {
      alert('Please fill Email')
      return
    }
    if (!userPassword) {
      alert('Please fill Password')
      return
    }
    if (UserName === 'manager') {
        AsyncStorage.setItem('user_id', 'Manager')
        navigation.replace('ManagerNavigationRoutes')
    } else if(UserName ==='user'){
        AsyncStorage.setItem('user_id', 'User')
        navigation.replace('UserNavigationRoutes')
    }else{
        setErrortext('Please check your user id or password')
        console.log('Please check your email id or password')
    }
    
  }
    //FULL CODE FOR ACTUALLY USING A SERVER BACKEND --- THIS WAS PART OF THE EXAMPLE AT https://aboutreact.com/react-native-login-and-signup/
    /*let dataToSend = {email: UserName, password: userPassword}
    let formBody = []
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key)
      let encodedValue = encodeURIComponent(dataToSend[key])
      formBody.push(encodedKey + '=' + encodedValue)
    }
    formBody = formBody.join('&')

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencodedcharset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false)
        console.log(responseJson)
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email)
          console.log(responseJson.data.email)
          navigation.replace('DrawerNavigationRoutes')
        } else {
          setErrortext(responseJson.msg)
          console.log('Please check your email id or password')
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false)
        console.error(error)
      })
  } */

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
          <View style={styles.container}>
            <Text style={styles.logo}>OverTimes</Text>
            <Text style={styles.subtext}>By Bannermen</Text>
          </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) =>
                  setUserName(UserName)
                }
                placeholder="Enter username" 
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#00b5ec',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },  
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#003f5c",
  },
  subtext:{
    marginBottom:80,    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})