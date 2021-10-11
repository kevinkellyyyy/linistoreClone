import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInterceptors';

export default ({password, user_login}) =>
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
        console.log('res.data', res.data);
        console.log('res.data.getUser', res.data.result);

        AsyncStorage.setItem('linistore', res.data.result);
        var token = res.data.result;
        var decoded = jwt_decode(token);

        console.log(decoded);
        AsyncStorage.setItem(
          'warehouse',
          JSON.stringify({
            id: decoded.vendor_id,
            name: decoded.vendor_name,
          }),
        );

        // AsyncStorage.setItem('user', JSON.stringify(res.data.getUser));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
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
