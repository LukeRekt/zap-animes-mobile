import React, { useEffect, useState } from "react";
import { View,Text, TextInput } from "react-native";
import {REACT_APP_API_URL} from '@env'
import axios from "axios";



export default function SearchPage(){
    
    const [data, setData] = useState();
    const [animeBuscados, setAnimesBuscados] = useState();
    
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanim`)
            .then(res => {
                console.log(animeBuscados)
                setAnimesBuscados(res.data.animes)
                setData(res.data.animes)
            })
    }, [REACT_APP_API_URL])
    
    const searchFilterFunction = (text) => {
        if(text){
            const newData = data.filter(item => {
                const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setAnimesBuscados(newData);
        }else {
            setAnimesBuscados(data);
        }
    }

    return (
        <View style={{backgroundColor: "#151538", height:"100%"}}>
            <TextInput
            placeholder="useless placeholder"
            onChangeText={text => searchFilterFunction(text)}
            ></TextInput>
             {!animeBuscados ? (<Text>Erro</Text>) : (animeBuscados.map(posts => (
             <Text>{posts.nome}</Text>)))}
        <Text style={{color: "white"}}>Página de Busca</Text>
        </View>
    )

}