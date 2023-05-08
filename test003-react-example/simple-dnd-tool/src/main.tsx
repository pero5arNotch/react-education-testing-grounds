import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import root CSS
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
