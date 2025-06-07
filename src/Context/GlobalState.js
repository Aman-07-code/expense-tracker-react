import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Cash', amount: -400 },
    { id: 2, text: 'Deposit', amount: 800 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Camera', amount: 300 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component

export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        dispatch: dispatch // This allows components to dispatch actions
    }}>
        {children}
    </GlobalContext.Provider>);

}

