import React from "react";
import {Text,TouchableOpacity,View,StyleSheet,Dimensions} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const windowHeight=Dimensions.get('window').height;
// /const windowWidth=Dimensions.get('window').width;

const SocialButton=({buttonTitle,btnType,color,backgroundColor,...rest})=>{
    let bgColor=backgroundColor;
    return(
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:bgColor}]} {...rest} >
            <View style={styles.iconWrapper}>
                <FontAwesome style={styles.icon} name={btnType} size={22} color={color} />
            </View>
            <View style={styles.btnTextWrapper}>
                <Text style={[styles.buttonText,{color:color}] }>{buttonTitle} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles=StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:"100%",
        height: windowHeight/15,
        backgroundColor:'#2e64e5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        flexDirection:"row",
        borderRadius:10
        
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        //fontFamily:'Lato-Regular'
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontWeight:'bold'
    },
    btnTextWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})