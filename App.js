import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>What's up my neighbour</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.thinText}>
          <Text> What's up my neighbour</Text>
          <Text> What's up my neighbour</Text>

        </Text>
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
  header: {
    backgroundColor: 'cyan',
    padding: 50,
  },
  boldText: {
    fontWeight: 'bold',
  },
  thinText:{

    fontWeight: 'thin'
  },
  body:{
    backgroundColor: 'green',
    padding: 50,
  }

}); 
