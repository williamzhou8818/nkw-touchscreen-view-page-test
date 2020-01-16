import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Container from './Container';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {BrowserRouter as Router} from 'react-router-dom';

// layout   
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
///main contents for each page




import './App.css';


function App() {
  
  

  return (
    <Fragment>
     
    <Router>
      <div className="App">
            <Header />
          
              <main>

              <Container />
              </main>
            <Footer />
      </div>
    </Router>
    </Fragment>
  );
}

export default App;
