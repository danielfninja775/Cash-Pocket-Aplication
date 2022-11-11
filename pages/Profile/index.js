
import React, { useContext } from 'react';
import { ImageBackground, LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header  from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import { Container, Nome, NewLink, NewText, Logout, LogoutText,NomeBox } from '../Profile/styles';

export default function Profile () {
    const navigation = useNavigation();

    const {user, signOut} = useContext(AuthContext);

 return (
   <Container>
    <Header/>
   
     <ImageBackground
        source={require('../../assets/bug4.jpg')}
        resizeMode='cover'
        style={{flex:2, height:700,width:390,marginLeft:1,marginRight:1}}>
     
      <NomeBox>
     <Nome> Cash Pocket </Nome>
     </NomeBox>
     
      </ImageBackground>

     

      <Logout onPress={ () => signOut()}>

         <LogoutText> Log Out </LogoutText>

      </Logout>
   </Container>

  );
}