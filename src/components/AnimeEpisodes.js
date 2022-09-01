import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import {REACT_APP_API_URL} from '@env'

export default function AnimeEpisodes(props){
    const navigation = useNavigation();

    const [posta, setPosta] = useState([])
    

    useEffect(() => {
      axios.get(`${REACT_APP_API_URL}/getanim/episodios/${props.temporada}/${props.idAnime}`)
        .then(res => {
          setPosta(res.data.episodios)
        console.log(REACT_APP_API_URL)
        })
    }, [props, REACT_APP_API_URL])
    return (
        <View style={styles.container}>
          {console.log(REACT_APP_API_URL)}
          
          {console.log(REACT_APP_API_URL)}
            <Text style={styles.temporadaTexto}>{props.temporada}ª Temporada - {props.nomeTemporada}</Text>
            {posta.map((post, index) =>
            <TouchableOpacity onPress={() => navigation.navigate("AnimeEpisodeScreen", post)} style={styles.proximoEpCard} key={index}>
                {/* <Text style={styles.epNumero}>{post.numero} - {post.nome}</Text> */}
                <View style={styles.proximoEpCardEsquerda}>
          <View style={styles.proximoEpCardOver}>
            <Feather name="play" size={30} color="#ffffffd4" />
            </View>
            <Image style={styles.proximoEpCardImagem} source={ { uri: `${REACT_APP_API_URL}/${post.animeImagem}`}} />
          </View>
            
            <View style={styles.proximoEpCardTextos}>
            <Text style={styles.proximoEpCardTexto}>T{post.temporada} E{post.numero} - {post.nome}</Text>
            </View>
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
    temporadaTexto:{
    color: "#ffbe63",
    fontSize: 17,
    marginLeft: 5,
    paddingVertical: 5,
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
    },
    proximoEpCard:{
        flexWrap: "nowrap",
        flexDirection: "row",
        marginTop:10,
        width: "57%",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, .05)",
      },
      proximoEpCardOver:{
        width:"100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        flex:1,
        alignItems: "center",
        justifyContent: "center",
      
      },
      proximoEpCardImagem:{
        width: 150,
        height: 100,
        
      },
      proximoEpCardTextos:{
        backgroundColor: "#2a2a3d",
        height: 100,
        width: "100%"
      },
      proximoEpCardTexto:{
        color: "white",
        width: "80%",
        fontSize: 15,
        marginLeft:10,
        marginTop: 10,
      },


})