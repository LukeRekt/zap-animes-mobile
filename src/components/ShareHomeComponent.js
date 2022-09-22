import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ShareHomeComponent(){

    return (
        <TouchableOpacity style={styles.container}>
           
            
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#181829",
         width: "100%",
        marginTop: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        height: 100,
    }
    })