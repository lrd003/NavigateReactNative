import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Estilos from './estilos'

const Home = ({navigation}) =>{

    const goToRegisterPage = () =>{
        navigation.navigate('Register');
    };

    const goToListPage = () =>{
        navigation.navigate('List');
    }

    return(
        <View style={Estilos.container}>
            <View style={Estilos.card}>
                <Text style={Estilos.fontText}>Tela Inicial</Text>
                <Button  style={Estilos.button} mode ="contained" onPress={goToRegisterPage}>Registre se</Button>
                <Button  style={Estilos.button} mode="contained" onPress={goToListPage}>Listagem</Button>
            </View>
        </View>   
    )
}

export default Home;