import React, {Component} from 'react';
import LoginScreenUI from './LoginScreenUI';
import InputControls from '../../../helpers/InputControls';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            emailTextInput:'',
            passwordTextInput:''
            
        }
    }

    // Email functions
    modifyEmailText = (emailText) =>{
        console.log("DENTRO DE FUNCION");
        console.log(emailText);
        this.setState({
            emailTextInput: emailText
        });
    }



    // Password Functions
    modifyPasswordText = (passwordText) =>{
        this.setState({
            passwordTextInput: passwordText
        });
    }

    // componentDidUpdate(){
    //     console.log(this.state.emailTextInput);
    // }

    render(){
        return(
            <LoginScreenUI
            buttonLabel='Log In'
            // Email PROPS
            emailControl={InputControls.email}
            emailTextInput={this.state.emailTextInput}
            modifyEmailText={this.modifyEmailText}
            emailLabel='Username'
            emailPlaceholder='mail@gmail.com'
            emailSecureText={false}            
            // Password PROPS
            passwordControl={InputControls.password}
            passwordTextInput={this.state.passwordTextInput}
            modifyPasswordText={this.modifyPasswordText}
            passwordLabel='Password'
            passwordPlaceholder='Your password.'
            passwordSecureText={true}
            />
        );
    }
}