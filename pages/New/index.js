import React, { useState,useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert,ImageBackground} from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText,Area} from './styles';
import Picker from '../../components/Picker';

export default function New() {
 const [valor, setValor] = useState('');
 const [tipo, setTipo] = useState('receita');
 const navigation = useNavigation();
 const {user: usuario} = useContext(AuthContext);

 function handleSubmit(){
  Keyboard.dismiss();
  if(isNaN(parseFloat(valor)) || tipo === null){
alert('form incomplete!');
return;
  }

Alert.alert(
  'Added',
  `tipo ${tipo} - valor: ${parseFloat(valor)}`,
  [
    {
      text: 'cancel',
      style: 'cancel'
    },
    {
      text: 'Continue',
      onPress: () => handleAdd()
    }
  ]
)

 }
 async function handleAdd(){
let uid = usuario.uid;

let key = await firebase.database().ref('historico').child(uid).push().key;
 await firebase.database().ref('historico').child(uid).child(key).set({
  tipo: tipo,
  valor: parseFloat(valor),
  date: format(new Date(), 'dd/MM/yyyy')
})
    //atualizar o saldo
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) =>{
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);
    });
    Keyboard.dismiss();
    setValor('');
    navigation.navigate('Home');
 }

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <Background>

       <Header/>

      <ImageBackground
        source={require('../../assets/bug9.jpg')}
        resizeMode='cover'
        style={{flex:1, height:760, width:386,marginTop:1,}}></ImageBackground>
        

     
       <Area>
       <SafeAreaView style={{ alignItems: 'center',alignSelf:'center' }}>
         <Input
         placeholder="       Amount of money"
         keyboardType="numeric"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={valor}
         onChangeText={ (text) => setValor(text) }
         />
         

         
         <Picker onChange={setTipo} tipo={tipo} />

        <SubmitButton onPress ={handleSubmit}>
          <SubmitText>Register</SubmitText>
        </SubmitButton>
        </SafeAreaView>
        </Area>

     

   </Background>
   </TouchableWithoutFeedback>
  );
}