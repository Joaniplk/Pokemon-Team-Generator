import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(() => {
  console.log('%cHello Pokemon fans!', 'color: red; font-size: 33px');
  console.log('%cAnd programmers ;', 'color: blue; font-size: 22px')
});
