import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
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
              <RNPickerSelect.Item label="Cash In" value="cash in" />  
              <RNPickerSelect.Item label="Cash Out" value="cash out" />  
            </RNPickerSelect>
        </PickerView>
    )
}