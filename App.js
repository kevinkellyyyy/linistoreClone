import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <NativeBaseProvider>
      <GlobalProvider>
        <AppNavContainer></AppNavContainer>
      </GlobalProvider>
    </NativeBaseProvider>
  );
};

export default App;
