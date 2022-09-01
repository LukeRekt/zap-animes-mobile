import React from "react";
import { View,Text, StyleSheet, Image } from "react-native";
import { Foundation } from '@expo/vector-icons'; 
import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  } from '@expo-google-fonts/montserrat';
export default function EmBreve(){
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
      });


    return (
        <View style={styles.header}>
            <Text style={styles.headerTexto}>ZAP RECOMENDA</Text>
            <View style={styles.imagemContainer}>
                <View style={styles.imagemOverlay}>
                <Text style={styles.imagemOverlayTexto}>Mamahaha no Tsurego ga Moto Kano datta</Text>
                <View style={styles.botaoTrailer}>
                <Text style={styles.botaoTrailerTexto}>Trailer</Text>
                </View>
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
    height: 230,
    //  backgroundColor:"#191828",
 
},
headerTexto:{
    color: "#ffbe63",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
    fontWeight: "200"
},
imagemContainer:{
width: "95%",
marginLeft: "2.5%"
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
    fontFamily: "Montserrat",
    fontWeight: "800"
},
botaoTrailer:{
    width: 100,
    marginTop: 75,
    marginLeft: 5,
},
botaoTrailerTexto:{
    backgroundColor: "#ffbe63",
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
    height: 200,
    borderRadius: 10,
    
  },
headerText:{
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
},

})