import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/userState';
import auth from './reducers/auth';
import cart from './reducers/cart';

import userState from './initialStates/userState';
import cartListState from './initialStates/cartListState';
import warehouseInitialState from './initialStates/warehouseInitialState';
import warehouse from './reducers/warehouse';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, userState);
  const [cartState, cartDispatch] = useReducer(cart, cartListState);
  const [dataState, dataDispatch] = useReducer(
    warehouse,
    warehouseInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        dataState,
        cartState,
        authDispatch,
        dataDispatch,
        cartDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
