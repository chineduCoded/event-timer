import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { CountDownProvider } from "./context/CountDownContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountDownProvider>
      <App />
    </CountDownProvider>
  </React.StrictMode>
);

