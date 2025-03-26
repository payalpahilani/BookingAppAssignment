import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const SignIn = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

 const handleSignIn = () => {
    if (username == "admin" && password == "admin"){
        navigation.replace("Dashboard");
    } else{
        Alert.alert("Invalid Credentials")
    }
 };

  return (
    <View style={styles.container}>

    <Text style = {styles.label}>Enter your username: </Text>
      <TextInput
      style = {styles.input}
      placeholder="username"
      value = {username}
      autoCapitalize='none'
      keyboardType='default'
      onChangeText={(text) => setUsername(text)}
      />

<Text style = {styles.label}>Enter your password: </Text>
    <TextInput
      style = {styles.input}
      placeholder="password"
      value = {password}
      secureTextEntry
      autoCapitalize='none'
      onChangeText={(text) => setPassword(text)}
      />
<TouchableOpacity 
      style = {styles.signInButton}
      onPress={handleSignIn} >
      <Text style={styles.signInButtonText}> Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#F7F7F7",
    },
    label:{
        marginTop: 12,
        fontWeight: '600'
    },
    input:{
        borderWidth: 1,
        borderColor: '#AAAE7F',
        marginVertical: 8,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        fontFamily: "sans-serif",
    },
    signInButton:{
        backgroundColor: '#143109',
        padding:12,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    signInButtonText:{
        color : 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
