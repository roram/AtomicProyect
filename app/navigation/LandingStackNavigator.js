import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../ui/screens/loginScreen/LoginScreen';

const Stack = createStackNavigator();

export default LandingStackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
            component={LoginScreen}
            />
        </Stack.Navigator>
    );
}