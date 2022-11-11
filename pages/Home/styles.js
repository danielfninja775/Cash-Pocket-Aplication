import styled from 'styled-components/native';

export const Background = styled.View`
 flex:1;
 background-color: #004a4a;
`;
export const Nome = styled.Text`
    font-size: 25px;
    color:white;
  font-weight:bold;
  
`;
export const Saldo = styled.Text`
margin-left: 10px;
margin-top: 3px;
font-size: 18px;
color:white;

`;

export const Title = styled.Text`
margin-left: 1px;
color:white;
margin-bottom: 10px;
margin-top: 1px;
font-size:18px;

`;
export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 7px;
    margin-right: 7px;
    margin-top: -15px;

`;
export const Area = styled.View`
flex-direction: row;
margin-left: 15px;

margin-top:-120px;
margin-bottom:5px;
`;

export const TouchableOpacity = styled.View`
margin-top:5px;
`;
export const Homefoto = styled.Image`

width:100%;
height:150px;
border-radius: 10px;

`;
export const NameBox = styled.View`
margin-top: -25px;
margin-bottom: 5px;
align-items: center;
align-self: center;
background-color:#acbfbe;
border-radius:7px;
width: 100%;
padding-bottom:155px;
`;
export const Welcome = styled.View`
margin-top: 20px;
align-items: center;
align-self: center;

border-radius:5px;
`;
export const Backgroundstyle = styled.View`
margin-left:10px;
height: 450px;
width: 150px;
border-radius:15px;

`;
export const SaldoBox = styled.View`
margin-top:-8px;
margin-left:5px;
height: 30px;
width: 220px;
background-color:#004a4a;
border-radius: 3px;

`;
export const ListBox = styled.View`
flex:3;
margin-top:15px;


`;












