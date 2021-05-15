import React from 'react';
import {
    
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const HomeScreen=()=>{
    return<View style={styles.screen}>
        <Text>Home Screen</Text>
    </View>
}

const styles=StyleSheet.create({
    screen:{
        backgroundColor:"#FF5769",
        flex:1
    }
});

export default HomeScreen;