import Estilos from './estilos'
import React, {useEffect, useState } from 'react';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import axios from 'axios';


const Register = ({navigation, route}) =>{

    const isEditMode = route.params?.user;

    const [name, setName] = useState(route.params?.user?.apiName);
    const [email, setEmail] = useState(route.params?.user?.apiEmail);
    const [phone, setPhone] = useState(route.params?.user?.apiPhone);
    const [password, setPassword] = useState(route.params?.user.apiPassword);
    const [isVisible, setIsVisible] = useState(false);

    const [isNotVisibleForUser, setIsNotVisibleForUser] = useState(true);

    const saveName = value => setName(value);
    const saveEmail = value => setEmail(value);
    const savePhone = value => setPhone(value);
    const savePassword = value => setPassword(value);

    const handleVisible = () =>setIsNotVisibleForUser(!isNotVisibleForUser)

    const register = () =>{

        axios.post('https://crudcrud.com/api/230d87ecf7e8462887ed636d1b088b12/test', {
            apiName: name,
            apiEmail: email,
            apiPhone: phone,
            apiPassword: password,
        }).then(()=>{
            setIsVisible(true);

            console.warn("Deu certo =)");
        }).catch(()=>{
            console.warn("Deu errado =(");
        })
    }


    const onDismissSnackBar = () =>{
        setIsVisible(false);
    }

    const edit = () =>{
        axios.put('https://crudcrud.com/api/230d87ecf7e8462887ed636d1b088b12/test', + route.params.user._id, {
            apiName: name,
            apiEmail: email,
            apiPhone: phone,
            apiPassword: password,
        }).then(()=>{
            setIsVisible(true);
            navigation.navigate('List',{
                reload: true,
            })
        }).catch(()=>{
            console.warn("Deu errado =(");
        })
    }

    const hadleUser = () =>{
        if(isEditMode){
            edit();
        }else{
            register();
        }
    };

    return(
        <ScrollView style={Estilos.container}>
            <View style={Estilos.card}>
                <TextInput label="Nome" style={Estilos.input} value={name} underlineColor="#11CFC5" theme={{colors: {primary:'#11CFC5'}}} onChangeText={saveName}/>
                <TextInput label="Email" style={Estilos.input} value={email} underlineColor="#11CFC5" theme={{colors: {primary:'#11CFC5'}}} onChangeText={saveEmail}/>
                <TextInput label="Telefone" style={Estilos.input} value={phone} underlineColor="#11CFC5" theme={{colors:{primary:'#11CFC5'}}} onChangeText={savePhone}/>
                <TextInput label="Password" style={Estilos.input} value={password} underlineColor="#11CFC5" theme={{colors:{primary:'#11CFC5'}}} onChangeText={savePassword} 
                secureTextEntry={isNotVisibleForUser} right={<TextInput.Icon onPress={handleVisible} name="eye"/>} />

                <Button style={Estilos.button} mode="contained" onPress={hadleUser}>{isEditMode? 'Editar' : 'Cadastrar'}</Button>
            </View>
            <Snackbar visible={isVisible} onDismiss={onDismissSnackBar} action={{label:'Undo'}}> {isEditMode? 'Usuário alterado com sucesso' : 'Usuário salvo com sucesso!'}</Snackbar>
        </ScrollView>
    );
};

export default Register;