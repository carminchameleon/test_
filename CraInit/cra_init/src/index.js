import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import GlobalStyle from 'Styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
