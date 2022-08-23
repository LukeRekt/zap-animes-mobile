import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

export default function AnimeEpisodes(props){
    const navigation = useNavigation();

    const [posta, setPosta] = useState([])

    useEffect(() => {
      axios.get(`http://192.168.0.103:3232/getanim/episodios/${props.temporada}/${props.idAnime}`)
        .then(res => {
          setPosta(res.data.episodios)
        
        })
    }, [props])
    return (
        <View style={styles.container}>
            <Text style={{color: "white", fontSize: 30, textAlign: "center"}}>Temporada: {props.temporada}</Text>
            {posta.map((post, index) =>
            <TouchableOpacity onPress={() => navigation.navigate("AnimeEpisodeScreen", post)} style={styles.containerEp} key={index}>
                <Text style={styles.epNumero}>{post.numero} - {post.nome}</Text>
            </TouchableOpacity>
            
            )}
        </View>
        
    )

}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#181829",
        width: "98%",
        marginTop: 5,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
    },
    containerEp:{
        backgroundColor: "#2b2b38",
        marginBottom: 2,
        marginTop: 5,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
    },
    epNumero: {
        padding: 15,
        color: "white"
    }


})