import React from 'react';

import App from './App';
import Page1 from './Page1'
import Page2 from './Page2'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  const HomePage = () => <>
  
    <Router>
        <Link to='page1'>Page1</Link> | 
        <Link to='page2'>Page2</Link> | 
        <Link to='app'>App</Link>


        <Switch>
            <Route path='/page1'>
                <Page1 />
            </Route>
            
            <Route path='/page2'>
                <Page2 />
            </Route>
            
            <Route path='/' exact={false}>
                <App />
            </Route>

        </Switch>
    </Router>
  
  </>;

  export default HomePage;