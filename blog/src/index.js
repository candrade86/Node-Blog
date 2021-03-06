import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from './App';
import PostsList from './PostsList';

import { injectGlobal } from 'styled-components';




injectGlobal`

html,body { 
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
    font-family: arial;
    font-size: 62.5%;
}

`

ReactDOM.render(

  <Router>  
    <div>
      <Route exact path="/" component={App} />
      <Route path="/posts/:id" component={PostsList} />
    </div>
  </Router>    

, document.getElementById('root'));


