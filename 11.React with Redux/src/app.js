import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//we use the 'Switch' to make the 404 page available

  const componentDiv = $("#app")[0];
  ReactDOM.render(<AppRouter />,componentDiv);
