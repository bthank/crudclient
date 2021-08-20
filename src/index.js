import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetAll from './GetAll';
import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  /*<React.StrictMode>*/
  /* wrap all routing in App.js which is a common pattern 
     Also, BrowserRouter can take only 1 child element
  */
    <BrowserRouter>
      <App/>  
    </BrowserRouter>
  /*</React.StrictMode>*/,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
