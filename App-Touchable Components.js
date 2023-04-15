import React, { useState } from 'react' ;
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([

    {name: 'Shaun', id: '1'},
    {name: 'Yoshi', id: '2'},
    {name: 'Mario', id: '3'},
    {name: 'Luigi', id: '4'},
    {name: 'Yuvan', id: '5'},
    {name: 'Thalapathy', id: '6'},
    {name: 'Vijay', id: '7'},
    {name: 'U1', id: '8'},

  ]);


  const pressHandler=(id)=>{
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    });
  }

  return(
      <View style={styles.container}>
        <FlatList 
          numColumns={2}
          keyExtractor = {(item) => item.id}
          data={people}
          renderItem={({item})=>(
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}> {item.name} </Text>
            </TouchableOpacity>
          )}

        />
       

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
    marginHorizontal:20,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
  

});