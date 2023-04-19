import React, { useState} from "react";
import { StyleSheet, Text,View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}> My To-Dos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingTop: 56,
        backgroundColor: 'purple'
    },
    title: { 
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }

})