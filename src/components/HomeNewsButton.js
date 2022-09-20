import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function HomeNews(){
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("NewsPageScreen")} style={styles.container}>
            <View style={styles.botaoNoticias}>
            <Text style={styles.texto}>ULTIMAS NOTÍCIAS </Text>
            <AntDesign style={{marginRight: 15}} name="arrowright" size={35} color="black" />
            </View>
           
        </TouchableOpacity>
        
    )

}
const styles = StyleSheet.create({
    container:{
        
        width: "100%",
        marginTop: 0,
        height: 50,
        
        alignItems:"center",
        justifyContent: "center",
    },
    botaoNoticias:{
        borderRadius:5,
        backgroundColor: "#ffbe63",
        width:"96%",
        height:"100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    texto:{
        fontSize: 25,
        marginLeft: 50,
    }
    })