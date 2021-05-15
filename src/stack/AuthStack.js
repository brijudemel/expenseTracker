import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import SplashScreen from "../screens/SplashScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import React,{useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack=()=>{
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    useEffect(async() => {
        try{
        const launched=await AsyncStorage.getItem("@alreadyLaunched");
        console.log(launched);
        if(launched==null){
            try{
            await AsyncStorage.setItem("@alreadyLaunched", "true");
            setIsFirstLaunch(true);
            }
            catch(e)
            {
                console.log(e)
            }
        }
        else{setIsFirstLaunch(false)}
        GoogleSignin.configure({
            webClientId: '166510516586-cvmpb4bq6ki2c0sri4lof9na7ckahuov.apps.googleusercontent.com',
          });
    }
    catch(e){
        console.log(e);
    }
    }, []);
    return(
        <Stack.Navigator>
        {isFirstLaunch?<Stack.Screen name="Splash" component={SplashScreen} options={()=>({
                title:'',
                headerStyle:{
                    backgroundColor:"#009387",
                    elevation:0
                }
            })} />:null}
            <Stack.Screen name="Signin" component={SigninScreen} options={()=>({
                title:'',
                headerStyle:{
                    backgroundColor:"#009387",
                    elevation:0
                }
            })}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={({navigation})=>({
                title:'',
                headerStyle:{
                    backgroundColor:"#009387",
                    elevation:0
                },
                headerLeft:()=>(
                    <View style={{marginLeft:10}}>
                        <FontAwesome.Button name="long-arrow-left" size={25} backgroundColor="#009387" color="#fff" onPress={()=>navigation.navigate('Signin')} />
                    </View>
                )
            })} />
        </Stack.Navigator>
    );
}

export default AuthStack;