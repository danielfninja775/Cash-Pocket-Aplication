import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #004a4a;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
height: 50px;
width: 210px;
background-color: rgba(255,255,255, 0.9);
margin-top: 30px;
font-size: 17px;
color: black;
border-radius:5px;
`;
export const SubmitButton = styled.TouchableOpacity`
height: 50px;
width: 160px;
margin-top: 10px;
align-items: center;
justify-content: center;
background-color:  #004a4a;
border-radius: 40px;
`;
export const SubmitText= styled.Text`
font-size: 22px;
font-weight: bold;
color: #FFF;
`;
export const Area= styled.View`

align-items: center;
align-self: center;
height: 400px;
width: 400px;
margin-bottom:400px;
margin-top:25px;

`;
