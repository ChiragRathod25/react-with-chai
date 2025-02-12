import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("index.js is rendered",Date.now())
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
console.log("Index.js rendering finished",Date.now())