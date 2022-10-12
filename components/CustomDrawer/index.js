import React, {useContext} from 'react';
import { View, Text , Image, ImageBackground} from 'react-native';
import { DrawerContentScrollView , DrawerItemList ,DrawerItem} from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
    const {user,signOut} =useContext(AuthContext);

 return (
    <DrawerContentScrollView {...props} >

     <Text style={{color:'#f0f8ff', fontSize:25, fontWeight:'bold',alignItems:'center',alignSelf:'center',
   marginTop:30}}>  Welcome   {user && user.nome} 
     </Text>
  
   
     

 
  
    <ImageBackground
        source={require('../../assets/bug5.jpg')}
        resizeMode='cover'
        style={{flex:1, height:760, width:400,marginTop:50}}>

    </ImageBackground>


    
<View style={{marginTop:-695, marginBottom:230}}>

<DrawerItemList {...props} />
<DrawerItem
{...props}
label="                                  Logout "
inactiveBackgroundColor="#c62c36"
onPress={()=>  signOut() }
/>

</View>

</DrawerContentScrollView>
  );
}