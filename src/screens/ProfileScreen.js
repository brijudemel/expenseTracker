import React, { Profiler, useContext } from 'react';
import {AuthContext} from "../provider/AuthProvider";
import {
    
    Button,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const ProfileScreen=()=>{
    const {logout}=useContext(AuthContext);
    return<View style={styles.screen}>
        <Text>Profile Screen</Text>
        <Button title="Log Out" onPress={logout} />
    </View>
}
const styles=StyleSheet.create({
    screen:{
        backgroundColor:"#578EFF",
        flex:1
    }
});

export default ProfileScreen;