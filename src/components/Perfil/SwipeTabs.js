import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { REACT_APP_API_URL } from "../../utils/config";
import { AntDesign } from '@expo/vector-icons'

export default function SwipeTabs(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
  

    return (   
                <View style={styles.swipeTabs}>
               <Text style={styles.texto}>
                WORK IN PROGRESS</Text>
                </View>
    )

}

const styles = StyleSheet.create({
    swipeTabs:{
        backgroundColor: "#181829",
        width: "95%",
        height: 200,
        marginTop: 5,
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.04)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        color: "red",
        fontSize: 35
        
    }
   
})