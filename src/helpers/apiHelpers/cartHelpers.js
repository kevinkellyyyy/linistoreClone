import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_CART_EMPTY, SET_CART_SUCCESS} from '../../constants/actionTypes';
import {getData} from './apiHelpers';

export const getCartList = () => {
  return (
    getData('web/cart')
      .then(res => res)
      .catch(err => {
        throw err;
      })
  );
};

export const setCart = cartList => dispatch => {
  dispatch({
    type: SET_CART_SUCCESS,
    payload: cartList
  });
  AsyncStorage.setItem('cart', JSON.stringify(cartList));
};

export const setEmptyCart = () => dispatch => {
  AsyncStorage.removeItem('cart');
  dispatch({
    type: SET_CART_EMPTY,
  });
};
