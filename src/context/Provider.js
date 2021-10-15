import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/userState';
import auth from './reducers/auth';

import userState from './initialStates/userState';
import warehouseInitialState from './initialStates/warehouseInitialState';
import warehouse from './reducers/warehouse';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, userState);
  const [dataState, dataDispatch] = useReducer(
    warehouse,
    warehouseInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        dataState,

        authDispatch,
        dataDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
