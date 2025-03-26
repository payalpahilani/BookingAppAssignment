import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = ({route}) => {

  const {studentId, name, numberOfPeople, selectedRoom } = route.params;
  const roomsData = [
      {roomNumber : "A101", capacity : 5, available: true},
      {roomNumber : "A102", capacity : 10, available: false},
      {roomNumber : "A103", capacity : 8, available: false},
      {roomNumber : "A104", capacity : 10, available: true},
      {roomNumber : "A105", capacity : 7, available: true} 
  ];

  const selectedRoomData = roomsData.find(
    (room) => room.roomNumber === selectedRoom
  );

  let availabilityMessage;

  if (!selectedRoomData) {
    availabilityMessage= `Room ${selectedRoom} not found in the system.`;
  } else{
    const {available, capacity} = selectedRoomData;
    if (!available){
      availabilityMessage = `Room ${selectedRoom} is currently NOT available`;
    } else if (capacity <numberOfPeople){
      availabilityMessage = `Room ${selectedRoom} only has capacity of ${capacity} people, Check another Room`;
    } else {
      availabilityMessage = `Room ${selectedRoom} is available. Booking confirmed for ${numberOfPeople} people.`;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student ID: {studentId}</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Number of People: {numberOfPeople}</Text>
      <Text style={styles.text}>Selected Room: {selectedRoom}</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{availabilityMessage}</Text>
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container:{
      flex:1,
      padding: 16,
      backgroundColor: "#F7F7F7",
  },
  text:{
    fontSize: 16,
    fontFamily: "sans-serif",
    marginVertical: 4,
  },
  result:{
      fontSize: 16,
      fontStyle: 'italic'
  },
  resultContainer:{
      marginTop: 20,
      padding: 12,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#AAAE7F',
      backgroundColor: 'white'
  },
});
