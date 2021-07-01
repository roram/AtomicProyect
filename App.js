import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './app/navigation/index';
import Store from './app/redux/Store';
import {Provider} from 'react-redux';

export default App = () =>{
  return(
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
    
  );
}