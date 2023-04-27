import React, { useState} from "react";
import { StyleSheet, Text,View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';
import Sandbox from './components/sandbox';
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";


export default function App(){
    const [todos, setTodos] = useState([
        { text: 'Pass Theory test', key: '1'},
        { text: 'Eat Protein Rich Food', key:'2'},
        { text: 'Play some Red Dead 2', key:'3'}
    ]);

    const pressHandler = (key) =>{
        setTodos((prevToDos) => {
            return prevToDos.filter(todo => todo.key != key);
        })
    }

    const submitHandler=(text) =>{


        if(text.length > 3){

            setTodos((prevTodos)=> {
                return [
                    { text: text, key:Math.random().toString()},
                    ...prevTodos
                ];
            });
        } else{
            Alert.alert('OOPS!','Todos must be longer than 3',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ])
        }


      
    }

    return (
        // <Sandbox/>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
        }}>

        
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    < AddToDo submitHandler={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                        data={todos}
                        renderItem={({item})=>(
                            <ToDoItem item={item} pressHandler={pressHandler}/>
                        )}                       
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    content: {
        padding: 40, 
        flex:1
    },
    list:{
        marginTop: 20,
        flex:1
    }
});