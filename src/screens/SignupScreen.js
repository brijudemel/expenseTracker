import React, { useContext } from 'react';
import {Platform,StyleSheet,Text,View,TouchableOpacity,TextInput,StatusBar,Alert} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../provider/AuthProvider';
import SocialButton from '../components/SocialButton';

const SignupScreen=({navigation})=>{
    const {register}=useContext(AuthContext);
    const [data,setData]=React.useState({
        email:'',
        password:'',
        confirm_password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        confirm_secureTextEntry:true
    });
    const textInputChange=(val)=>{
        if(val.length!==0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
        }
    }
    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
        });
    }
    const handleConfirmPasswordChange=(val)=>{
        setData({
            ...data,
            confirm_password:val
        });
    }
    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !(data.secureTextEntry)
        });
    }
    const updateConfirmSecureTextEntry=()=>{
        setData({
            ...data,
            confirm_secureTextEntry: !(data.confirm_secureTextEntry)
        });
    }
    const createAlert = (title,content) =>
    Alert.alert(title,content,
      [
        { text: "OK" }
      ]
    );
    return<View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
        animation="fadeInUpBig"
        style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange?
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                :null}
            </View>
            <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20} />
                <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry}
                    onChangeText={(val)=>handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry?
                        <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    : <Feather
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
            </TouchableOpacity>
            </View>
            <Text style={[styles.text_footer,{marginTop:35}]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#05375a" size={20} />
                <TextInput
                    placeholder="Confirm Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={data.confirm_secureTextEntry}
                    onChangeText={(val)=>handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.confirm_secureTextEntry?
                        <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    : <Feather
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
            </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]} onPress={()=>{
                    if(data.password===data.confirm_password)
                    {
                        if(data.password.length<8)
                        {
                            createAlert("Weak Password","Password should be of atleast 8 characters!");
                        }
                        else{
                            register(data.email,data.password);
                        }
                    }
                    else{
                        createAlert("Password Mismatch","Your Password and Confirm Password Does Not Match");
                    }
                    }} >
                    <Text style={[styles.textSign,{color:'#009387'}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            {Platform.OS==='android'?(
            <View>
            <SocialButton
                buttonTitle="Sign Up with Google"
                btnType='google'
                color='#de4d41'
                backgroundColor='#f5e7ea'
                onPress={()=>{}}
                />
            <SocialButton
                buttonTitle="Sign Up with FaceBook"
                btnType='facebook'
                color='#4867aa'
                backgroundColor='#e6eaf4'
                onPress={()=>{}}
                />
            </View>
            ):null}
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')} >
                    <Text style={styles.alternate}>Already Have an account? Then SignIn</Text>
            </TouchableOpacity>
            
        </Animatable.View>
    </View>
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS==='ios'?0:-12,
        paddingLeft:10,
        color:'#05375a'
    },
    button:{
        alignItems:'center',
        marginTop:5
    },
    signIn:{
        width:"100%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    },
    alternate:{
        color:"red",
        marginTop:10
    }
});
export default SignupScreen;