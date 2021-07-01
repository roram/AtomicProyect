import React from 'react';
import { View, Button, Text } from 'react-native';
import InputComponent from '../../components/InputComponent';

export default LoginScreen = ({
    buttonLabel, loginControl,
    emailControl, emailTextInput, modifyEmailText, emailState, emailLabel, emailPlaceholder, emailSecureText,
    passwordControl, passwordTextInput, modifyPasswordText, passwordState, passwordLabel, passwordPlaceholder, passwordSecureText
    }) =>{

    return(
        <View>
            <InputComponent
            dataControl={emailControl}
            textInput={emailTextInput}
            textUpdate={modifyEmailText}
            dataState={emailState}
            label={emailLabel}
            placeholder={emailPlaceholder}
            secureText={emailSecureText}
            />
            <InputComponent
            dataControl={passwordControl}
            textInput={passwordTextInput}
            textUpdate={modifyPasswordText}
            dataState={passwordState}
            label={passwordLabel}
            placeholder={passwordPlaceholder}
            secureText={passwordSecureText}
            />
            <Button
            title={buttonLabel}
            onPress={loginControl}
            />
        </View>
    );
}