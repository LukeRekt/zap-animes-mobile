import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";


export default function UserInfoSection(props){
  

    return (   
                <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>{props.titulo}</Text>
                {props.children}
                </View>
    )

}

const styles = StyleSheet.create({
    userInfo:{
        width: "93%",

    },
    userInfoText:{
        color: "white",
        marginTop: 5,
        fontSize: 25,
        borderBottomWidth: .3,
        borderBottomColor: "rgba(255, 255, 255, .3)",
    },
   
})