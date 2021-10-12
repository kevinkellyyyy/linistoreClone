// import React from 'react';
// import AxiosInstance from '../../helpers/axiosInterceptor';

import _ from 'lodash';
import {useCallback} from 'react';
import AxiosInstance from '../axiosInterceptors';

export const getData = (path, pagination, ordering, filter, headers) => {
  console.log('apihelpers: getData');
  const params = appendParams(pagination, ordering, filter);
  return AxiosInstance.get(path, {params})
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const postData = () => {
  console.log('apihelpers: postData');
};

export const patchData = () => {
  console.log('apihelpers: patchData');
};

export const putData = () => {
  console.log('apihelpers: putData');
};

export const deleteData = () => {
  console.log('apihelpers: deleteData');
};

const appendParams = (pagination, ordering, filter) => {
  const params = {};
  if (pagination) {
    Object.assign(params, {row: pagination.row});
    Object.assign(params, {page: pagination.page});
  }
  if (ordering) {
    Object.assign(params, {order_by: ordering.orderBy});
    Object.assign(params, {order_type: ordering.orderType});
  }
  if (filter) {
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        if (_.isArray(filter[key])) {
          for (const index in filter[key]) {
            if (filter[key].hasOwnProperty(index)) {
              Object.assign(params, {key: filter[key][index]});
            }
          }
        } else {
          Object.assign(params, {key: filter[key]});
        }
      }
    }
  }
  return params;
};
