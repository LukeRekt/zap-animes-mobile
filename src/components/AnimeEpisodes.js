import axios from "axios";
import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
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
        <View style={{backgroundColor: "grey"}}>
            {console.log(props)}
            <Text style={{color: "white",}}>Temporada: {props.temporada}</Text>
            {posta.map((post, index) =>
            <View index={index}>
                <Text>{post.numero}</Text>
            </View>
            
            )}



            
            
        </View>
        
    )

}