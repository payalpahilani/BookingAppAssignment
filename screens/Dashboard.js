import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, TextInput,Button, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Dashboard = ({navigation}) => {
    const [studentId, setStudentId] = useState("");
    const [name, setName] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [selectedRoom , setSelectedRoom] = useState("A101")
    
    const rooms = ["A101", "A102", "A103", "A104", "A105"];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='Logout'onPress={() => navigation.replace("SignIn")}
                color= "143109"
                 />
            ),
            });
    }, [navigation]);

    const handleCheckAvailability = () => {
        if (!studentId || !name || !numberOfPeople)
        {
            Alert.alert("Please fill all fields before checking availability.");
            return;
        }

    navigation.navigate("Booking", {
        studentId,
        name,
        numberOfPeople: parseInt(numberOfPeople),
        selectedRoom,
    });
};


  return (
    <View style = {styles.container}>
        <Text style = {styles.label}>Enter your Student ID : </Text>
        <TextInput
        style = {styles.input}
        placeholder="Student ID"
        value = {studentId}
        keyboardType='default'
        onChangeText={(text) => setStudentId(text)}
        />

<Text style = {styles.label}>Enter your Name : </Text>
        <TextInput
        style = {styles.input}
        placeholder="name"
        value = {name}
        autoCorrect ={false}
        keyboardType='default'
        onChangeText={(text) => setName(text)}
        />
<Text style = {styles.label}>Enter your Number of People : </Text>
        <TextInput
        style = {styles.input}
        placeholder="No. of People"
        value = {numberOfPeople}
        keyboardType='default'
        onChangeText={(text) => setNumberOfPeople(text)}
        />  

        <Text style = {styles.label}> Select a Room:</Text>
        <View style={styles.pickerContainer}>
        <Picker
            style = {styles.picker}
            selectedValue={selectedRoom}
            onValueChange={(value) => setSelectedRoom(value)}>
            
            {rooms.map((room)=> (
                <Picker.Item key={room} label={room} value={room} />
            ))}
            </Picker>
            </View>

        <TouchableOpacity 
      style = {styles.checkavailabilityButton}
      onPress={handleCheckAvailability} >
      <Text style={styles.checkavailabilityButtonText}> Check Availability </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
        backgroundColor: "#F7F7F7",
    },
    label:{
        marginTop: 12,
        fontWeight: '600'
    },
    pickerContainer:{
        borderWidth: 1,
        borderColor: '#AAAE7F',
        borderRadius: 5,
        marginVertical: 8,
    },
    picker:{
       width: "100%",
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
    checkavailabilityButton:{
        backgroundColor: '#143109',
        padding:12,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    checkavailabilityButtonText:{
        color : 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
