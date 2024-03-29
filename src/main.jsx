import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { App } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Route>
      <CartProvider>
        <App />
      </CartProvider>
    </Route>
  </React.StrictMode>
);
