import styled from 'styled-components/native';




export const Background = styled.View`
flex: 1;
background-color: #074343;
`;
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const AreaInput = styled.View`
margin-bottom: 20px;
flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'black'
})`
background:white;
width: 90%;
font-size: 17px;
color: black;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #252525;
  width: 90%;
  height: 45px
  border-radius: 7px;
  margin-top: 10px;
  padding-left:5px;
  padding-right: 5px;
`;
export const SubmitText= styled.Text`
 font-size: 30px;
 color:white;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 9px;
 
`;

export const LinkText = styled.Text`
  color: #FFF;
  
`;
export const Name = styled.Text`

  color: white;

  font-size: 40px;
  
`;
export const NameBox = styled.View`
align-items: center;
align-self: center;
background-color:#252525;
margin-bottom: 70px;
height: 50px;
width: 300px;
border-bottom-left-radius:60px;
`;
