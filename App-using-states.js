import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Yuvan');
  const [person, setPerson] = useState ({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('U1');
    setPerson({ name: 'luigi', age:45})
  } 

  return (
    <View style={styles.container}>
      <Text> The name is {name}</Text>
      <Text> Name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}> 
        <Button title='UPDATE' onPress={clickHandler} />
      </View>
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
  }
}); 
