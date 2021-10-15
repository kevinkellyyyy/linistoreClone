import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import { LOGIN_SUCCESS } from '../constants/actionTypes';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';

const AppNavContainer = () => {
  const {
    authDispatch,
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log('isautehn', isLoggedIn);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

    // <NavigationContainer>
    //   {isLoggedIn ? <StackNavigator /> : <AuthNavigator />}
    // </NavigationContainer>
  );
};

export default AppNavContainer;
