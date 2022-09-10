import React from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
export default function EmBreve(){



    return (
        <View style={styles.header}>
            {/* <Text style={styles.headerTexto}>ZAP RECOMENDA</Text> */}
            <View style={styles.imagemContainer}>
                <View style={styles.imagemOverlay}>
                <LinearGradient
        // Background Linear Gradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#151538', 'transparent']}
        style={styles.background}
      />
                <Text style={styles.imagemOverlayTexto}>Mamahaha no Tsurego ga Moto Kano datta</Text>
                <TouchableOpacity style={styles.botaoTrailer}>
                <Text onPress={() => alert("Tô com preguiça de fazer")} style={styles.botaoTrailerTexto}>Trailer</Text>
                </TouchableOpacity>
                     </View>
            <Image
        style={styles.tinyLogo}
        source={{ uri:'https://ikigaipop.com/wp-content/uploads/2021/07/Mamahaha-no-Tsurego-ga-Moto-Kano-Datta-Cover.jpg'}}
      />
            </View>
            
        </View>
        
    )

}

const styles = StyleSheet.create({
 header:{
    margin: 0,
    width: '100%',
    height: 300,
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
height: 300,
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
botaoTrailer:{
    width: 100,
    marginTop: 10,
    marginLeft: 5,
},
botaoTrailerTexto:{
    backgroundColor: "#d98c20",
    color: "#181829",
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 3,
    paddingLeft: 12,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
},
tinyLogo: {
    width: "100%",
    height: 300,
    borderRadius: 2,
    
  },
headerText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    
},

})