import React, {useContext, useState} from 'react';
import { Platform, ActivityIndicator,ImageBackground } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText,BoxInput,NameBox,Name} from '../SignUp/styles';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp , loadingAuth } = useContext(AuthContext);

function handleSignUp(){
  signUp (email,password,nome);
}

 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
   <ImageBackground
        source={require('../../assets/bug2.jpg')}
        resizeMode='cover'
        style={{height:400,width:480,marginBottom:110}}>

        </ImageBackground>

         <BoxInput>
         <NameBox>
        <Name>Cash Pocket</Name>
        </NameBox>
        
        <AreaInput>
          <Input
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="nome"
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

      <SubmitButton onPress={handleSignUp} >
      {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>New account</SubmitText>
          )
        }

      </SubmitButton>
</BoxInput>
      </Container>
   </Background>
  );
}