import {getData} from './apiHelpers';

export const getProductList = () => {
  let vendorId;
  const pagination = {
    row: 50,
    page: 1,
  };
  const filter = {
    random: true,
  };
  // const temp = this.cache.currentUser;
  const temp = null;
  if (temp) {
    vendorId = temp.vendor_id;
  } else {
    vendorId = 1;
  }
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
