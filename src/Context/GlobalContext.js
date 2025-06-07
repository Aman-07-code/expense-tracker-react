import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Cash', amount: -400 },
    { id: 2, text: 'Deposit', amount: 800 },
    { id: 3, text: 'Book', amount: -100 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component

export const GlobalProvider = () => {

}

