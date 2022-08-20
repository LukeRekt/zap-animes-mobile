import {View,Text, StyleSheet, Image} from "react-native";
import VideoPlayer from "../components/VideoPlayer";
import Ionicons from '@expo/vector-icons/Ionicons';





export default function PageEpisode(props){
    return (
        <View style={styles.container}>
          
          <VideoPlayer video={`http://192.168.0.103/${props.route.params.video}`}/>
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
          <View style={styles.proximoEpCard}>
            <Image style={styles.proximoEpCardImagem} source={ { uri: `https://stc.animestc.com/1619280203756-image-thumbnail.jpg`}} />
            <View style={styles.proximoEpCardTextos}>
            <Text style={styles.proximoEpCardTexto}>T{props.route.params.temporada} E{props.route.params.numero} - {props.route.params.nome}</Text>
            </View>
          </View>
          <Text style={styles.todosEpTexto}>TODOS OS EPISÓDIOS</Text>
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
      proximoEpCard:{
        flex: 1,
        flexWrap: "nowrap",
        overflow: "hidden",
        flexDirection: "row",
        marginTop:10,

        width: "95%",
        height: 101
      },
      proximoEpCardImagem:{
        width: 150,
        height: 100,
        
      },
      proximoEpCardTextos:{
        backgroundColor: "#2a2a3d",
        height: 100,
      },
      proximoEpCardTexto:{
        color: "white",
        width: "50%",
        fontSize: 15,
        marginLeft:4,
        marginBottom: 4,
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