// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      Hello, Is this working???
      <Route path='/industries'>

      </Route>
      <Route path='/services'>

      </Route>
      <Route path='/aboutUs'>
        
      </Route>
    </BrowserRouter>
  );
}

export default App;
