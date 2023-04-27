import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';

import { Linking } from 'react-native';

export default function App() {

  const [operacao,setOperacao]=useState("")
  const [resultado,setResultado]=useState(0)

  function linkExternal(){
    Linking.openURL('https://www.youtube.com/watch?v=Y7dIFrFKb74');
  }


  const operar=()=>{
    setResultado(eval(operacao))
  }
  return (
    <View style={styles.container}>
  
      <Text style={styles.h1}
      >Calculadora Master Desenvolvido por: Eduardo T. Caetano</Text>
      <View style={styles.display}>
      <TextInput
        style={styles.displayOperacao}
        placeholder="Digite sua operação matemática ex: 1+1" 
        placeholderTextColor={'#fff'}
        value={String(operacao)}
        onChangeText={(texto)=>{setOperacao(texto)}}
      ></TextInput>

      <TextInput
        style={styles.displayResultado}
        value={String(resultado)}
        ></TextInput>
      </View>
      <View>
      <TouchableHighlight 
      style={styles.btn}
      onPress={()=>operar()}
      color="#841584"
      ><Text style={styles.txtbtn}>=</Text>
      </TouchableHighlight>
      </View>

      <Text onPress={linkExternal} style={styles.ref}>Aperte aqui para abrir as refenrências</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20
  },

  h1: {
    marginTop: 80,
    fontSize: 17,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 50,
    padding:  20,
    backgroundColor: '#ebe8e8'

  },

  display: {
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#333',
    padding: 10,
    marginTop: 100,
  },

  
  displayOperacao: {
    padding: 20,
    borderWidth: 2,
    color: '#fff',
    borderColor: '#fff',
    margin: 10

  },
  displayResultado:{
    padding: 20,
    borderWidth: 2,
    borderColor: '#fff',
    color: '#fff',
    margin: 10,
    textAlign: 'center',
  },

  btn: {
  backgroundColor: '#5e5f60',
  padding: 20,
  borderWidth: 3,
  borderRadius: 40,
  width: 200,
  fontSize: 200,
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 70,
},

txtbtn:{
  color: '#fff',
  fontSize: 40
},

ref: {
  textAlign: 'center',
  marginTop: 170,
  padding: 20,
  borderWidth: 3,
  borderRadius: 40,
  color: '#fff',
  backgroundColor: 'red'
}
});
