import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { sirGContext } from './contextApi/context.js';
import {user} from "./contextApi/context.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <sirGContext.Provider value={user}>
    <App />
  </sirGContext.Provider>

);