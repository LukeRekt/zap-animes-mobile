import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import {REACT_APP_API_URL} from '@env'

export default function AnimeTemas(props){
    return (
        <View style={styles.container}>
            
            {props.temas.map((post, index) =>
            <TouchableOpacity style={styles.cardTema} key={index}>
               <Text style={styles.cardTemaTexto}>{post}</Text>
            </TouchableOpacity>
            
            )}
        </View>
        
    )

}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#181829",
         width: "100%",
        marginTop: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    cardTema:{
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 8,

        marginLeft: 8,
        marginBottom: 8,
        backgroundColor: "rgba(255,255,255,.05)"
        
    },
    cardTemaTexto:{
        color: "#ffbe63",
        
    },

})