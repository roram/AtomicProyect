import React, {Component} from 'react';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import LandingScreenUI from './LandingScreenUI';
import {connect} from 'react-redux';
import {controlLogout} from '../../../redux/slices/LoginSlice'

class LandingScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            test:true
        }
    }

    //Log Out Logic
    logout(){
        console.log("ME EJECUTO");
        console.log(this)
        //this.props.controlLogout();
        //this.props.navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN_FLOW);
    }

    render(){
        return(
            <LandingScreenUI
            //Button Logic prop
            logout={this.logout}
            />
        );
    }
}

const mapDispatchToProps = {
    controlLogout: controlLogout
}

export default connect(null, mapDispatchToProps)(LandingScreen);