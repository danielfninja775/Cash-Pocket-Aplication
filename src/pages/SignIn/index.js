import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText,Name,NameBox} from './styles';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);


  function handleLogin(){
    signIn(email, password);
  }

 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
       

       <ImageBackground
        source={require('../../assets/bug4.jpg')}
        resizeMode='cover'
        style={{flex:1, height:500, width:400}}>

</ImageBackground>

<NameBox>
        <Name>Cash Pocket</Name>
        </NameBox>
        
        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={true}
          />
        </AreaInput>

      <SubmitButton onPress={handleLogin}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Log In </SubmitText>
          )
        }
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('SignUp')}>
        <LinkText>New Account!</LinkText>
      </Link>

      </Container>
   </Background>
  );
}