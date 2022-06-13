import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './comps/header';
import Configurator from "./configurator";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  <Configurator></Configurator>
  </React.StrictMode>,
  document.getElementById('root')
);