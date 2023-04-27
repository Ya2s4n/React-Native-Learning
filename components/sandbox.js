import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>

            <Text style={styles.boxOne}>--ONE--</Text>
            <Text style={styles.boxTwo}>--TWO--</Text>
            <Text style={styles.boxThree}>--THREE--</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'flex-end',
        backgoundColor: 'blue',
        paddingTop: 30,
        

    },
    boxOne:{
        flex:5,
        backgroundColor: 'violet',
        padding: 20,
    },
    boxTwo:{
        flex:5,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxThree:{
        flex:3,
        backgroundColor: 'skyblue',
        padding: 40,

    },

});