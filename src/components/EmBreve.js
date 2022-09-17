import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity, Linking, ActivityIndicator } from "react-native";
import { Foundation } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { REACT_APP_API_URL } from "../utils/config";
import axios from "axios";
export default function EmBreve(props){
    const navigation = useNavigation();
    const [posts, setPosts] = useState();
    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/getanim/admin/${props.idAnime}`)
            .then(res => {
                setPosts(res.data.animes)
            })
    }, [REACT_APP_API_URL])

    return (
        <View style={styles.header}>
            {/* <Text style={styles.headerTexto}>ZAP RECOMENDAa</Text> */}
            
            {!posts ? (<ActivityIndicator size={70} color="#fc6203" />) : (            <View style={styles.imagemContainer}>
                <View style={styles.imagemOverlay}>
                <LinearGradient
        // Background Linear Gradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#151538', 'transparent']}
        style={styles.background}
      />
                <Text style={styles.imagemOverlayTexto}>{posts.nomeIngles}</Text>
                <Text style={styles.imagemOverlayTextoDescricao}>{posts.descricao}</Text>
                <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botaoTrailer}>
                <Text onPress={() => navigation.navigate("AnimeScreen", posts)}
                 style={styles.botaoTrailerTexto}><Feather name="play" size={24} color="black" /> Assistir Agora</Text>
                </TouchableOpacity>
                </View>
                
                     </View>
            <Image
        style={styles.tinyLogo}
        source={{ uri: `${REACT_APP_API_URL}/${posts.imagem}`}}
      />
            </View>)}

            
        </View>
        
    )

}

const styles = StyleSheet.create({
 header:{
    margin: 0,
    width: '100%',
    height: 330,
    //  backgroundColor:"#191828",
 
},
background:{
zIndex: 0,
position: "absolute",
width: "100%",
height: "100%",
},
headerTexto:{
    color: "#ffbe63",
    textAlign: "center",
    fontSize: 25,

},
imagemContainer:{
width: "100%",
height: 330,
},
imagemOverlay:{
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
},
imagemOverlayTexto:{
    fontSize: 25,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 4,
    marginLeft: 5,
    marginTop: 160,
    fontWeight: "600"
},
imagemOverlayTextoDescricao:{
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 4,
    marginLeft: 5,
    fontWeight: "600"
},
areaBotao:{
justifyContent: "flex-start",
alignItems:"flex-start"
},
botaoTrailer:{
marginLeft: 4,
marginTop: 10,
},
botaoTrailerTexto:{
    backgroundColor: "#e16537",
    color: "#181829",
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingLeft: 12,
    borderRadius: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
},
tinyLogo: {
    width: "100%",
    height: 330,
    borderRadius: 2,
    
  },
headerText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    
},

})