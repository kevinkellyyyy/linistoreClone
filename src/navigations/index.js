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
  const [isAuthenticated, setIsAutheticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const [userAvaiable, setuserAvaiable] = React.useState(null);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        console.log('isi user di async', JSON.parse(user))
        // setIsAutheticated(true);
        setuserAvaiable(JSON.parse(user));
        updateUser()(authDispatch);
      } else {
        // setAuthLoaded(true);
        setIsAutheticated(false);
      }
    } catch (error) {}
  };

  const updateUser = () => dispatch => {
    console.log('test')
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userAvaiable,
    });
  } 

  useEffect(() => {
    getUser();
  }, []);

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
