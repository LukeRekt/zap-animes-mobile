import React from "react";
import { View,Text, StyleSheet, Image } from "react-native";
import { Foundation } from '@expo/vector-icons'; 

export default function Header(){
    return (
        <View style={styles.header}>
            
            <View>
            <Image
        style={styles.tinyLogo}
        source={require('../public/images/metadata2.jpg')}
      />
            </View>
            <Foundation name="magnifying-glass" size={30} color="white" onPress={() => alert("EM DESENVOLVIMENTO!!!")}/>
        </View>
        
    )

}

const styles = StyleSheet.create({
 header:{
    width: '100%',
    height: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#191828"
},
tinyLogo: {
    width: 180,
    height: 50,
  },
headerText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
},

})