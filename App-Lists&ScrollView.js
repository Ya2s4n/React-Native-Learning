import React, { useState } from 'react' ;
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([

    {name: 'Shaun', key: '1'},
    {name: 'Yoshi', key: '2'},
    {name: 'Mario', key: '3'},
    {name: 'Luigi', key: '4'},
    {name: 'Yuvan', key: '5'},
    {name: 'Thalapathy', key: '6'},
    {name: 'Vijay', key: '7'},
    {name: 'U1', key: '8'}

  ]);

  return(
      <View style={styles.container}>
        <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}> {item.name} </Text>
            </View>
          )

        ) }
        </ScrollView>

      </View>

    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  },

  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  

});