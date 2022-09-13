import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ReadMore(props){

    const [saberMais, setSaberMais] = useState(false);

    return (
        <View style={styles.container}>
            {saberMais == false ? ( <View style={styles.containerHalf}>
            <Text style={styles.texto}>{props.texto}...</Text>
            </View>) : ( <View style={styles.containerFull}>
            <Text style={styles.texto}>{props.texto}</Text>
            </View>)}
           <TouchableOpacity onPress={() => setSaberMais(!saberMais)}><Text style={styles.textoVerMais}>{saberMais == false ? (" VER MAIS") : (" VER MENOS")}</Text></TouchableOpacity>
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
    containerHalf:{
      maxHeight: 85,  
    },
    containerFull:{
      maxHeight: "100%",  
    },
    texto:{
        color: "white",
    },
    textoVerMais:{
        color: "#ffbe63",
    }
    })