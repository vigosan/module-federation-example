import React, { createContext, useMemo, useReducer } from 'react';

const AppContext = createContext();
const actionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
};

const initialState = {
  isSignedIn: false,
};

function uiReducer(state, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN: {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    case actionTypes.SIGN_OUT: {
      return {
        ...state,
        isSignedIn: false,
      };
    }
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  function signIn() {
    dispatch({ type: actionTypes.SIGN_IN });
  }

  function signOut() {
    dispatch({ type: actionTypes.SIGN_OUT });
  }

  const value = useMemo(
    () => ({
      ...state,
      signIn,
      signOut,
    }),
    [state],
  );

  return <AppContext.Provider value={value} {...props} />;
}

export { AppContext, AppProvider };

