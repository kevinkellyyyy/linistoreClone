import { GET_UPDATED_USER } from '../../constants/actionTypes';
import {getData} from './apiHelpers';

export const getUser = () => dispatch => {
  return getData('web/user/profile')
    .then(res => {
      console.log('data get user ',res.data);
      dispatch({
        type: GET_UPDATED_USER,
        payload: res.data.result,
      });
    })
    .catch(err => {
      throw err;
    });
};