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

        AsyncStorage.setItem('linistore', res.data.result);
        const token = res.data.result;
        const decoded = jwt_decode(token);
        const userData = {token: token, data: decoded};
        console.log(decoded)

        AsyncStorage.setItem('user', JSON.stringify(userData));

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
          payload: userData,
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
