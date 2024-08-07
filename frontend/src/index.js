import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Adjusted import path
import './index.css'; // Ensure this file exists or remove this line

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
