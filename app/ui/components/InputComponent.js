import React, { useState } from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

export default InputComponent = ({dataControl, textUpdate, textInput, dataState, label, placeholder, secureText}) =>{

    const [text, setText] = useState('');

    return(
        <>
            <Text>{label}</Text>
            <TextInput
            style={textInput === '' ? styles.inputStyle : (dataState == true ? styles.inputStylePass : styles.inputStyleError)}
            value={textInput}
            onChangeText={(textInput)=>textUpdate(textInput)}
            onSubmitEditing={dataControl}
            placeholder={placeholder}
            secureTextEntry={secureText}
            />
        </>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        color:'orange',
        textAlign:'center'
    },
    inputStyle:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'black',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    },
    inputStyleError:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'red',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    },
    inputStylePass:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'green',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    }
})