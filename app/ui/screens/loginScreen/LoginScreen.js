import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import LoginScreenUI from './LoginScreenUI';
import InputControls from '../../../helpers/InputControls';
import {connect} from 'react-redux';
import {controlEmail, controlPassword, LoginWS} from '../../../redux/slices/LoginSlice';


class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            emailTextInput:'',
            emailState:false,
            passwordTextInput:'',
            passwordState:false
        }
    }

    // Email functions
    modifyEmailText = (emailText) =>{
        this.setState({
            emailTextInput: emailText
        });
    }
    controlEmailFormat = () =>{

        let controlResult = InputControls.email(this.state.emailTextInput);

        if(controlResult === true){
            this.setState({
                emailState: InputControls.email(this.state.emailTextInput)
            });
            this.props.controlEmail(this.state.emailTextInput);
        }else{
            this.setState({
                emailState: InputControls.email(this.state.emailTextInput)
            });
        }
        
    }

    // Password Functions
    modifyPasswordText = (passwordText) =>{
        this.setState({
            passwordTextInput: passwordText
        });
    }
    controlPasswordFormat = () =>{

        let controlResult = InputControls.password(this.state.passwordTextInput);

        if(controlResult === true){
            this.setState({
                passwordState: InputControls.password(this.state.passwordTextInput)
            });
            this.props.controlPassword(this.state.passwordTextInput);
        }else{
            this.setState({
                passwordState: InputControls.password(this.state.passwordTextInput)
            });
        }

    }

    //Login functions

    controlLoginData = () =>{
        if(this.state.emailState === true && this.state.passwordState === true){
            this.props.LoginWS({email:this.props.email, password:this.props.password});
        }
    }

    //Navigation logic

    userAuthorized = () =>{
        this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_FLOW);
    }

    //UPDATE COMPONENT CONTROL STATE
    componentDidUpdate(){
        if(this.props.sessionStarted){
            this.userAuthorized();
        }
    }

    render(){
        return(
            <LoginScreenUI
            buttonLabel='Log In'
            loginControl={this.controlLoginData}
            // Email PROPS
            emailControl={this.controlEmailFormat}
            emailTextInput={this.state.emailTextInput}
            modifyEmailText={this.modifyEmailText}
            emailState ={this.state.emailState}
            emailLabel='Username'
            emailPlaceholder='mail@gmail.com'
            emailSecureText={false}            
            // Password PROPS
            passwordControl={this.controlPasswordFormat}
            passwordTextInput={this.state.passwordTextInput}
            modifyPasswordText={this.modifyPasswordText}
            passwordState={this.state.passwordState}
            passwordLabel='Password'
            passwordPlaceholder='Your password.'
            passwordSecureText={true}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    //TODO: MODIFY THE NAME INPUT IN THE STORE, IS NOT AN EASY TO READ VARIABLE NAME.
    email: state.input.email,
    password: state.input.password,
    sessionStarted: state.input.sessionStarted
});

const mapDispatchToProps = {
    controlEmail: controlEmail,
    controlPassword: controlPassword,
    LoginWS: LoginWS
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);