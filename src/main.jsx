// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "sweetalert2/dist/sweetalert2.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
