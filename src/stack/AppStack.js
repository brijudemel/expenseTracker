import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatsScreen from "../screens/StatsScreen";
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';


const Tab= createBottomTabNavigator();
const AppStack=()=>{
    
    return(
        <Tab.Navigator initialRouteName="Home"
            tabBarOptions={{
                showLabel:false,
                style:{
                    position:'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevation:0,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:90,
                    ...styles.shadow
                }
            }}
        >
        <Tab.Screen name="Home" component={HomeScreen}
            options={
                {
                    tabBarIcon:({focused})=>{
                    return <Icon2 name='home' size={25} color={focused?'#009387':'#748c94'} />;
                    }
                }
            }
         />
        <Tab.Screen name="Stats" component={StatsScreen} 
            options={
                {
                    tabBarIcon:({focused})=>{
                    return <Icon2 name='line-graph' size={25} color={focused?'#009387':'#748c94'} />;
                    }
                }
            }
        />
        <Tab.Screen name="Profile" component={ProfileScreen} 
            options={
                {
                    tabBarIcon:({focused})=>{
                    return <Icon3 name='person' size={25} color={focused?'#009387':'#748c94'} />;
                    }
                }
            }
        />
      </Tab.Navigator>
    );
}

const styles=StyleSheet.create({
    shadow:{
        shadowColor:"#7F5DF0",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});

export default AppStack;