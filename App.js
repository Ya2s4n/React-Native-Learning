import React, { useState} from "react";
import { StyleSheet, Text,View, FlatList} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

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
        setTodos((prevTodos)=> {
            return [
                { text: text, key:Math.random().toString()},
                ...prevTodos
            ]
        })
    }

    return (
        <View style={StyleSheet.container}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    content: {
        padding: 40, 
    },
    list:{
        marginTop: 20,
    }
});