import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Yuvan');
  const [age, setAge] = useState('30');
 

  return (
    <View style={styles.container}>
      <Text> Enter Name </Text>
        <TextInput 

        multiline //Multiline input
        
        style={styles.input} 
        placeholder='Enter Here'
        onChangeText={(val)=>setName(val)}
        />

        
      <Text> Enter Age </Text>
        <TextInput 
        keyboardType='numeric' //numeric keyboard
        style={styles.input} 
        placeholder='Enter Here'
        onChangeText={(val)=>setAge(val)}
        />        

        <Text> Name: {name}    Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 20
  },
  input:{
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    width: 400,
  }
}); 
