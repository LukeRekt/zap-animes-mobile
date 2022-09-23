import React, { useContext, useState } from "react";
import { View,Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function LoginForm(){

    const userBanner = `static/imagens/capas/zenitsu.gif`;
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");

    let hasSixChar = password.length >= 6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

    const [loginState, setLoginState] = useState(true);

    const {login, logout, userInfo, isLogged, register} = useContext(AuthContext);

    // const handleRegister = (username, email, senha, userBanner) => {
    //     const userAvatar = `${process.env.REACT_APP_API_URL}/static/imagens/avatars/${username}.png`;
    //     register({username, email, senha, userAvatar, userBanner});

    // }
    const handleRegister = () => {
           
            const userAvatar = `static/imagens/avatars/${username}.png`;
            register({ username, email, password, userAvatar, userBanner });
            setLoginState(true);
            
        }
    

    return (
        
        <View style={styles.container}>
            {loginState == true ? (
             
             <View style={styles.loginForm}>
                <Text style={styles.textoLogin}>LOGIN</Text>
             <TextInput
             style={styles.input}
             placeholderTextColor="white"
         label={'Email'}
         placeholder={'Email'}
         value={email}
         onChangeText={(text => setEmail(text))}
       />
       <TextInput 
       style={styles.input}
       placeholderTextColor="white" 
         label={'Senha'}
         secureTextEntry={true}
         placeholder={'Senha'}
         value={password}
         onChangeText={(text => setSenha(text))}
       />
      <TouchableOpacity style={styles.containerReset}>
      <Text style={styles.textoResetSenha}>Esqueceu sua Senha?</Text>
      </TouchableOpacity>
      
       <TouchableOpacity onPress={() => {login(email, password)}}
       style={styles.botaoContainer}>
         <Text style={styles.botaoTexto}>
         LOGIN
         </Text>
       </TouchableOpacity>
       <TouchableOpacity>
       <Text onPress={() => setLoginState(!loginState)} style={styles.textoRegistro}>Registrar-se</Text>
       </TouchableOpacity>
             </View>) : 
             
             //TELA DE REGISTRO COMECA AQUI!!!
             (<View style={styles.loginForm}>
                <Text style={styles.textoLogin}>REGISTRO</Text>
                <TextInput 
       style={styles.input}
       placeholderTextColor="white" 
         label={'username'}
         placeholder={'Nome de Usuário'}
         value={username}
         onChangeText={(text => setUsername(text))}
       />
             <TextInput
             style={styles.input}
             placeholderTextColor="white"
         label={'Email'}
         placeholder={'Email'}
         value={email}
         onChangeText={(text => setEmail(text))}
       />
       <TextInput 
       style={styles.input}
       placeholderTextColor="white" 
         label={'Senha'}
         secureTextEntry={true}
         placeholder={'Senha'}
         value={password}
         onChangeText={(text => setSenha(text))}
       />
       {password.length ? (<View style={styles.containerPassStr}>
            {hasSixChar ? (<Text style={styles.textoCorreto}><AntDesign name="checkcircle" size={15} color="green" /> Pelo menos 6 caracteres</Text>) : (<Text style={styles.textoIncorreto}><MaterialIcons name="cancel" size={15} color="red" /> Pelo menos 6 caracteres</Text>)}
            {hasLowerChar ? (<Text style={styles.textoCorreto}><AntDesign name="checkcircle" size={15} color="green" /> Pelo menos uma letra minuscula</Text>) : (<Text style={styles.textoIncorreto}><MaterialIcons name="cancel" size={15} color="red" /> Pelo menos uma letra minuscula</Text>)}
            {hasUpperChar ? (<Text style={styles.textoCorreto}><AntDesign name="checkcircle" size={15} color="green" />  menos uma letra maiuscula</Text>) : (<Text style={styles.textoIncorreto}><MaterialIcons name="cancel" size={15} color="red" /> Pelo menos uma letra maiuscula</Text>)}
            {hasNumber ? (<Text style={styles.textoCorreto}><AntDesign name="checkcircle" size={15} color="green" /> Pelo menos um numero</Text>) : (<Text style={styles.textoIncorreto}><MaterialIcons name="cancel" size={15} color="red" /> Pelo menos um numero</Text>)}
            {hasSpecialChar ? (<Text style={styles.textoCorreto}><AntDesign name="checkcircle" size={15} color="green" /> Pelo menos um caractere especial</Text>) : (<Text style={styles.textoIncorreto}><MaterialIcons name="cancel" size={15} color="red" /> Pelo menos um caractere especial</Text>)}
            
        </View>) : (<></>)}
        
      
       <TouchableOpacity onPress={() => {handleRegister()}}
       style={styles.botaoContainer}>
         <Text style={styles.botaoTexto}>
         REGISTRAR
         </Text>
       </TouchableOpacity>
       <TouchableOpacity>
       <Text onPress={() => setLoginState(!loginState)} style={styles.textoRegistro}>Ja tem uma conta ?</Text>
       </TouchableOpacity>
       
             </View>)}
             

        
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"#151538",
        height:"100%",

    },
    textoLogin:{
        color: "#ffbe63",
        textAlign: "center",
        fontSize: 40,
        marginBottom: 40,
        marginTop: 100,
    },  
    loginForm:{
        // backgroundColor: "#181829",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    texto:{
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    input:{
        color: "white",
        width: "95%",
        marginBottom: 10,
        padding: 10,
        borderRadius: 30,
        backgroundColor: "#2a2a3d"
    },
    containerReset:{
        width: "100%"
    },
    textoResetSenha:{
        color: "white",
        textAlign: "right",
        marginRight: 10,
    },
    botaoContainer:{
        justifyContent: "center",
        alignItems: "center",
       marginTop: 30,
       width: "100%",
      
    },
    botaoTexto:{
        color:"black",
        backgroundColor: "#ffbe63",
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: "90%",
        borderRadius: 20,
        textAlign: "center"
    },
    textoRegistro:{
        color: "#ffae3d",
        textAlign: "center",
        marginTop: 10,
    },
    tinyLogo:{
        width:200,
        height:300,
    },
    containerPassStr:{
        alignSelf: "flex-start",
        marginLeft: 20,
        backgroundColor: "rgba(255,255,255, 0.1)",
        width: "90%",
        padding: 10,
    },
    textoCorreto:{
        color: "green",
        fontSize: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    textoIncorreto:{
        color: "red",
        alignItems: "center",
        justifyContent: "center",
    },
})