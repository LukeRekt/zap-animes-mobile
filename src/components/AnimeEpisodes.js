import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function AnimeEpisodes(props){
    const [posta, setPosta] = useState([])

    useEffect(() => {
      axios.get(`http://192.168.0.103:3232/getanim/episodios/${props.temporada}/${props.idAnime}`)
        .then(res => {
          setPosta(res.data.episodios)
        
        })
    }, [props])
    return (
        <View style={styles.container}>
            {console.log(props)}
            <Text style={{color: "white", fontSize: 30, textAlign: "center"}}>Temporada: {props.temporada}</Text>
            {posta.map((post, index) =>
            <View style={styles.containerEp} index={index}>
                <Text style={styles.epNumero}>{post.numero} {post.nome}</Text>
            </View>
            
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
        backgroundColor:"white",
        marginBottom: 2,
        marginTop: 5,
        borderRadius: 5,
        borderColor: "rgba(255, 255, 255, .05)",
        borderWidth: 1,
    },
    epNumero: {
        padding: 8
    }


})