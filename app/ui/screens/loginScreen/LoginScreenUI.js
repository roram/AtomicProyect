import React from 'react';
import { View, Button, Text } from 'react-native';
import InputComponent from '../../components/InputComponent';

export default LoginScreen = ({
    buttonLabel,
    emailControl, emailTextInput, modifyEmailText, emailLabel, emailPlaceholder, emailSecureText,
    passwordControl, passwordTextInput, modifyPasswordText, passwordLabel, passwordPlaceholder, passwordSecureText
    }) =>{

    return(
        <View>
            <InputComponent
            dataControl={emailControl}
            textInput={emailTextInput}
            textUpdate={modifyEmailText}
            label={emailLabel}
            placeholder={emailPlaceholder}
            secureText={emailSecureText}
            />
            <InputComponent
            dataControl={passwordControl}
            textInput={passwordTextInput}
            textUpdate={modifyPasswordText}
            label={passwordLabel}
            placeholder={passwordPlaceholder}
            secureText={passwordSecureText}
            />
            <Button
            title={buttonLabel}
            />
        </View>
    );
}