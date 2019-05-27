import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Blog from './Blog/Blog';

ReactDOM.render(
  <BrowserRouter> 
    <Blog/> 
  </BrowserRouter>,
  document.getElementById('root')
);