import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from '../src/store/Store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
