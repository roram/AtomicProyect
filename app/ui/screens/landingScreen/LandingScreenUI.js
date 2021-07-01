import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LandingScreenUI = ({logout}) =>{
    return(
        <View
        style={styles.componentContainer}
        >
            <Text
            style={styles.textStyle}
            >LANDING SCREEN</Text>
            <Button
            title='Log out'
            onPress={logout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    textStyle:{
        textAlign:'center',
        fontSize:30
    }
});

export default LandingScreenUI;