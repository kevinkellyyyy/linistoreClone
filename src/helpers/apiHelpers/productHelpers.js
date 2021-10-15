import {getData} from './apiHelpers';

export const getProductList = vendorId => {
  const pagination = {
    row: 10,
    page: 1,
  };
  const filter = {
    random: true,
  };
  if (vendorId) {
    Object.assign(filter, {vendor_id: vendorId});
  }
  return getData('web/product', pagination, null, filter)
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const getProductById = productId => {
  return getData('web/product/' + productId)
    .then(res => res)
    .catch(err => {
      throw err;
    });
};
