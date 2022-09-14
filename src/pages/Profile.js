import React from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import LoginForm from "../components/LoginForm";



export default function Profile(){
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.containerForm}>
           
             <LoginForm/>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#151538",
        height:"100%",
        
    },
    containerForm:{
        justifyContent: "center",
        marginLeft: "8%",
        marginTop:"50%"
    },
})