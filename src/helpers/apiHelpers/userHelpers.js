import { useState } from 'react';
import { GlobalContext } from '../../context/Provider';
import {getData} from './apiHelpers';

export const getUser = () => {

  let userId;

  const {
    authState : {isLoggedin, data},
  } = useContext(contextValue)
  const [user, setUser] = useState([]);
  const [userLoading, setUserLoading] = useState(false);

  setUserLoading(true);
  return getData('web/user', null, null, null)
    .then(res => {
      console.log('res.data', res.data);
      setUser(res.data.result);
      setUserLoading(false);
    })
    .catch(err => {
      throw err;
  });
};