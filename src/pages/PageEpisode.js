import {View,Text, StyleSheet, Image, TouchableOpacity, Button} from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import axios from "axios";
import {REACT_APP_API_URL} from '@env'

//testea

export default function PageEpisode(props){
  const [postab, setPostab] = useState([])
  const [video, setVideo] = useState()
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(`${REACT_APP_API_URL}/getanim/episodios/${props.route.params.temporada}/${props.route.params.id}/${props.route.params.numero + 1}`)
      .then(res => {
        setPostab(res.data.episodios)
        setVideo("")
      })
  }, [props, REACT_APP_API_URL])


    return (
        <View style={styles.container}>
          <VideoPlayer video={`${REACT_APP_API_URL}/${video}`}/>
          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botoes} onPress={() => setVideo(props.route.params.video)}><Text style={styles.texto}>Legendado</Text></TouchableOpacity>
            {props.route.params.videoDublado == "nao" ? (<TouchableOpacity style={styles.botoes} onPress={() => alert("Dublagem indisponível")}><Text style={styles.texto}>Sem Dublagem</Text></TouchableOpacity>) : (<TouchableOpacity style={styles.botoes} onPress={() => setVideo(props.route.params.videoDublado)}><Text style={styles.texto}>Dublado</Text></TouchableOpacity>)}<TouchableOpacity style={styles.botoes} onPress={() => setVideo(props.route.params.videoDublado)}><Text style={styles.texto}>Dublado</Text></TouchableOpacity>
          </View>
          
          <View style={styles.animeInfos}>
          <Text style={styles.texto}>{props.route.params.nomeAnime}</Text>
          <Text style={styles.textoEp}>T{props.route.params.temporada} E{props.route.params.numero} - {props.route.params.nome}</Text>
          <View style={styles.sinopseEp}>
          <Text style={styles.sinopseEpTexto}>Hayase Nagatoro, ao lado de suas amigas, passa o dia aterrorizando a paz de seu Senpai, um rapaz mais velho do que ela...<Text style={styles.sinopseEpSaberMais}>saber mais</Text></Text>
          </View>
          <View style={styles.comentariosEp}>
      <Text style={styles.comentariosEpTexto}><Ionicons name="chatbox-ellipses-outline" size={24} color="white" /> Comentários - 99024</Text>
          </View>

          <View style={styles.proximoEpContainer}>
          <Text style={styles.proximoEpTexto}>Proximo Episódio</Text>

          {postab == null ? (<View style={styles.proximoEpCardAcabou}><Text style={styles.proximoEpCardAcabouTexto}>SEM NOVOS EPISÓDIOS <FontAwesome5 name="sad-cry" size={24} color="#ffffffd4" /></Text></View>) : (
          <TouchableOpacity onPress={() => navigation.navigate("AnimeEpisodeScreen", postab)} style={styles.proximoEpCard}>
          <View style={styles.proximoEpCardEsquerda}>
          <View style={styles.proximoEpCardOver}>
            <Feather name="play" size={30} color="#ffffffd4" />
            </View>
            <Image style={styles.proximoEpCardImagem} source={ { uri: `${REACT_APP_API_URL}/${postab.animeImagem}`}} />
          </View>
            
            <View style={styles.proximoEpCardTextos}>
            <Text style={styles.proximoEpCardTexto}>T{postab.temporada} E{postab.numero} - {postab.nome}</Text>
            </View>
          </TouchableOpacity>)}
          <TouchableOpacity onPress={() => alert("EM DESENVOLVIMENTO!!!")}>
          <Text style={styles.todosEpTexto} >TODOS OS EPISÓDIOS</Text>
          </TouchableOpacity>
          
          </View>



          </View>
          
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#181829',
      },
      botoesContainer:{
         flexDirection: "row",
         
      },
      botoes:{
        width: "50%",
        backgroundColor: "#04042a",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      },
      animeInfos:{
        flex: 1,
        width: "100%",
        padding: 2
      },
      texto:{
        color: "#ffbe63",
        margin: 0,
        fontSize: 14, 
      },
      textoEp:{
        color: "white",
        fontSize: 18,
        marginTop: 8,
      },
      sinopseEp:{},
      sinopseEpTexto:{
        color: "grey"
      },
      sinopseEpSaberMais:{
        color: "#fc6203"
      },
      comentariosEp:{
        marginTop: 20,
        borderWidth: 2,
        borderTopColor: "rgba(255, 255, 255, .05)",
        borderBottomColor: "rgba(255, 255, 255, .05)"
        
      },
      comentariosEpTexto:{
        fontSize: 20,
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 15,
      },
      proximoEpContainer:{
        flex: 1,
        alignItems: "center",
        marginTop: 10,

      },

      proximoEpTexto:{
        color: "white",
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10,
      
      },
      proximoEpCardAcabou:{
        backgroundColor: "#2a2a3d",
        width: "95%",
        height:60,
        
      },
      proximoEpCardAcabouTexto:{
        color:"#ffffffd4",
        textAlign: "center",
        paddingTop: 15,
        fontSize: 21
      },
      proximoEpCard:{
        overflow: "hidden",
        flexDirection: "row",
        marginTop:10,
        width: "95%",
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
        width: "50%",
        fontSize: 15,
        marginLeft:10,
        marginTop: 10,
      },
      todosEpTexto:{
        marginTop: 10,
        fontSize: 16,
        color: "#fc6203",
        backgroundColor: "#2a2a3d",
        paddingHorizontal: 15,
        paddingVertical: 10,

      }
     
})