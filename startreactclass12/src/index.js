import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// step 1 create context
export const studentContext = createContext();
const students = ["Goutam", "Prashant", "Ritika"];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // step2  done  and step -3 value ko likh do jisko use karna chahte ho 
  <studentContext.Provider value={students}>
    <App />
  </studentContext.Provider>

);

