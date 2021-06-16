import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import LandingStackNavigator from './LandingStackNavigator';

const Stack = createStackNavigator();

export default RootNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
            >
                <Stack.Screen
                name={NavigatorConstant.NAVIGATOR.LOGIN_FLOW}
                component={LandingStackNavigator}
                />
            </Stack.Navigator> 
        </NavigationContainer>
    );
}