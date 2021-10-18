import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import jwt_decode from 'jwt-decode';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  HOME_NAVIGATOR,
  HOME,
} from '../../constants/actionTypes';
import axiosInstance from '../axiosInterceptors';

export const loginUser =
  ({password, user_login}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('web/auth/login', {
        user_login,
        password,
      })
      .then(res => {
        AsyncStorage.setItem('linistore', res.data.result);
        const token = res.data.result;
        const decoded = jwt_decode(token);

        AsyncStorage.setItem(
          'warehouse',
          JSON.stringify({
            id: decoded.vendor_id,
            name: decoded.vendor_name,
          }),
        );
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: decoded,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Tidak Ada Koneksi'},
        });
      });
  };

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export const regisUser =
  ({name, vendor_id, phone_number, password, password_confirmation}) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('web/auth/registerr', {
        name,
        vendor_id,
        phone_number,
        password,
        password_confirmation,
      })
      .then(res => {
        console.log('res', res);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
      });
  };

export const logoutUser = () => dispatch => {
  AsyncStorage.removeItem('linistore');
  AsyncStorage.removeItem('warehouse');

  dispatch({
    type: LOGOUT_USER,
  });
};
