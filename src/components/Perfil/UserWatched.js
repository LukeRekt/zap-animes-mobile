import React, { useContext, useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { REACT_APP_API_URL } from "../../utils/config";
import { AntDesign } from '@expo/vector-icons'

export default function UserWatched(){
    const {logout, userInfo, isLogged} = useContext(AuthContext);
    const [totalAssistido, setTotalAssistido] = useState()
    const [totalAssistidoTempo, setTotalAssistidoTempo] = useState()

    const variables = {
        nomeUsuario: userInfo.username,
      }
    useEffect(() =>  {
        axios.post(`${process.env.REACT_APP_API_URL}/getallprogresso`,  variables)
     .then(res => {
         setTotalAssistido(res.data.progresso.length)
         setTotalAssistidoTempo(res.data.progresso.length * 24 / 60)
        // setPorcentagem(res);a
     })
   }, [])

    return (   
                <View style={styles.userWatched}>
                <View style={styles.userWatchedLeft}>
                    {console.log(totalAssistido)}
                    <View style={styles.watchedBar}>
                    <AntDesign style={styles.playButton} name="play" size={55} color="#0C0C1D" />
                    </View>
                </View>
                <View style={styles.userWatchedRight}>
                    <Text style={styles.texto}>Episódios Assistidos</Text>
                    <Text style={styles.texto}>{totalAssistido} (aprox {totalAssistidoTempo} horas)</Text>
                    </View>
                </View>
    )

}

const styles = StyleSheet.create({
    userWatched:{
        backgroundColor: "#181829",
        width: "95%",
        height: 200,
        marginTop: 5,
        borderRadius: 5,
        borderWidth:1,
        borderColor: "rgba(255,255,255,.04)",
        flexDirection: "row"
    },
    userWatchedLeft:{
        width: "50%",
    },
    watchedBar:{
        backgroundColor: "#ffbe63",
        width:"100%",
        height:"35%",
        marginTop: "40%",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    playButton:{
        marginLeft: "60%",
        marginTop: "4%"
    },
    userWatchedRight:{
        color: "white",
        marginTop: "23%",
        marginLeft: "1%",
    },
    texto:{
        color: "white",
        fontSize: 17,
    },
})