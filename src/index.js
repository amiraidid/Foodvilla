import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartContext } from './context/MyContext';
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartContext>
        <App />
      </CartContext>
    </Router>
    </React.StrictMode>
);


