import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-community/Picker';
import { PickerView } from './styles';

export default function Picker({ onChange, type }){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width:'100%'
            }}
            selectedValue={type}
            onValueChange={ (valor) => onChange(valor) }
            >
           <RNPickerSelect.Item label="Cash In" value="receita" />  
              <RNPickerSelect.Item label="Cash Out" value="despesa" />   
            </RNPickerSelect>
        </PickerView>
    )
}