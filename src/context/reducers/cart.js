import {
  SET_CART_EMPTY,
  SET_CART_FAIL,
  SET_CART_LOADING,
  SET_CART_SUCCESS,
} from '../../constants/actionTypes';

const cart = (state, {type, payload}) => {
  switch (type) {
    case SET_CART_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartData: payload,
      };
    case SET_CART_FAIL:
      return {
        ...state,
        loading: false,
      };
    case SET_CART_EMPTY:
      return {
        ...state,
        loading: false,
        cartData: {}
      };
    default:
      return state;
  }
};

export default cart;
