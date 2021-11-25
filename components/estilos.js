import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";


const Estilos = StyleSheet.create({
    container: {
      backgroundColor: '#11CFC5',
      height: '90%',
      display: 'flex',
      paddingHorizontal: 15,
      padding: 190,
      flexGrow: 1

    },
    button: {
      borderRadius: 20,
      backgroundColor: '#11CFC5',
      marginTop: 10,
    },
    card: {
      backgroundColor: '#FDFFFF',
      paddingHorizontal: 15,
      paddingVertical: 25,
      borderRadius: 10,
    },
    input: {
      backgroundColor: "#FDFFFF",
      marginTop: 10,
    },
    fontText:{
      fontSize: 20,
      color:'#5F9EA0',
      textAlign: 'center'
      
    }
  });

export default Estilos;