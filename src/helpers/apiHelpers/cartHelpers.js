import {getData} from './apiHelpers';

export const getCartList = () => {
  return getData('web/cart')
    .then(res => res)
    .catch(err => {
      throw err;
    });
};
