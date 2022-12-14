import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { REACT_APP_API_URL } from "../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {    
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const login = (email, password) => {
        console.log(email);
        console.log(password)
        setIsLoading(true)
        axios.post(`${REACT_APP_API_URL}/login`, {
            email,
            password
        })
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            setIsLogged(true);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            AsyncStorage.setItem('userToken', userInfo.token)
        })
        .catch(e => {
            console.log(`Erro no login ${e}`);
        });
        // setUserToken('asdasdasdad');
        // AsyncStorage.setItem('userToken', "asdasdasdad")
        setIsLoading(false);

    }
    // const register = ( {username, email, password, userAvatar, userBanner}) => {
    //     console.log(email);
    //     console.log(password)
    //     console.log(userAvatar);
    //     console.log(userBanner)
    //     setIsLoading(true)
    //     const user = { username, email, password, userAvatar, userBanner };
    //     axios.post(`${REACT_APP_API_URL}/registrar`, {
    //         user
    //     })
    //     .then(res => {
    //         console.log(`${res}`);
    //     })
    //     .catch(e => {
    //         console.log(`${e}`);
    //     });
    //     setIsLoading(false);

    // }
    const register = async ({ username, email, password, userAvatar, userBanner } = {}) => {
        const user = { username, email, password, userAvatar, userBanner };
    
        try {
            const res = await fetch(`${REACT_APP_API_URL}/registrar`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });
            return await res.json();
        } catch (err) {
            throw new Error(`Nao foi possivel registrar. ${err}`);
        }
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        setIsLogged(false)
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userInfo')
        setIsLoading(false);
    }

    const isLoggenIn = async() => {
        try{
        setIsLoading(true);
        let userInfo = await AsyncStorage.getItem('userInfo');
        let userToken = await AsyncStorage.getItem('userToken');
        userInfo = JSON.parse(userInfo);

        if(userInfo){
            setUserToken(userToken);
            setUserInfo(userInfo);
            setIsLogged(true);
        }
        setIsLoading(false)
    } catch (e){
        console.log(`Erro na funcao isLogged ${e}`)
    }
    }
    useEffect(() => {
        isLoggenIn();
    }, []);

    return (
        <AuthContext.Provider value={{login, register, logout, isLoading, userToken, userInfo, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}