import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../ui/screens/landingScreen/LandingScreen';

const Stack = createStackNavigator();

const LandingStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.LANDING_STACK.LANDING_SCREEN}
        >
            <Stack.Screen
            name={NavigatorConstant.LANDING_STACK.LANDING_SCREEN}
            component={LandingScreen}
            />
        </Stack.Navigator>
    );
}

export default LandingStackNavigator;