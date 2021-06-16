import React, { useState } from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

export default InputComponent = ({dataControl, textUpdate, textInput, label, placeholder, secureText}) =>{

    const [text, setText] = useState('');

    return(
        <>
            <Text>{label}</Text>
            <TextInput
            value={textInput}
            onChangeText={(textInput)=>textUpdate(textInput)}
            onSubmitEditing={(textInput)=>dataControl(textInput)}
            placeholder={placeholder}
            secureTextEntry={secureText}
            />
        </>
    );
}