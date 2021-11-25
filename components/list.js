import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import Estilos from './estilos';

const List = ({navigation, route}) =>{

    const [userList, setUserList] = useState([]);

    const getUser = () =>{
        axios.get('https://crudcrud.com/api/230d87ecf7e8462887ed636d1b088b12/test')
        .then((response)=>{
           // console.warn(response);
            setUserList(response.data);
        })
        .catch((error)=>{
            console.warn(error);
        })
    };

    const deleteUser = (idUser) =>{
        axios.delete('https://crudcrud.com/api/230d87ecf7e8462887ed636d1b088b12/test/' + idUser)
        .then((response)=>{
            getUser();
            console.warn('Usuário deletado');
        })
        .catch((error)=>{
            console.warn(error);
        })
    };

    const putUser = (user) =>{
        navigation.navigate('Register', {
            user 
        });
    }

    useEffect(()=>{
        getUser();
    }, [route]);

    return(
        <View>
            {userList.map((element)=>{
                return(
              
                    <View style={Estilos.card}>
                        <Text>ID: {element._id}</Text>
                        <Text>Nome: {element.apiName}</Text>
                        <Text>Email: {element.apiEmail}</Text>
                        <Text>Telefone: {element.apiPhone}</Text>
                        <Button  style={Estilos.button} mode="contained" onPress={() => deleteUser(element._id)}>Deletar User</Button>
                        <Button  style={Estilos.button} mode="contained" onPress={() =>putUser(element)}>Alterar User</Button>
                    </View>
             
                );
            })}
        </View>
    )
};

export default List;