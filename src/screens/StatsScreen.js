import React from 'react';
import {
    
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const StatsScreen=()=>{
    return<View style={styles.screen}>
        <Text>Stats Screen</Text>
    </View>
}

const styles=StyleSheet.create({
    screen:{
        backgroundColor:"#FFD357",
        flex:1
    }
});
export default StatsScreen;