import React from 'react';
import { View, Text, StyleSheet,TextInput} from "react-native";

const Fuel=(props)=>{
    return<View style={styles.card}>
    <View style={styles.cardContent}>
        <Text>Fuel Amount</Text>
        <TextInput
            placeholder="Litres Consumed"
            style={styles.textInput}
         />
         
        {props.children}
    </View>
    </View>
}

export default Fuel;

const styles=StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:"#fff",
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS==='ios'?0:-12,
        paddingLeft:10,
        color:'#05375a'
    }
})