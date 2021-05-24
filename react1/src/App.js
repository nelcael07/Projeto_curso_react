import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
      <BrowserRouter>
        <header>
          <h1>Meu site legal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/sobre'>Sobre</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr></hr>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/sobre'>
            <Sobre></Sobre>
          </Route>

        </Switch>
        <hr></hr>
        <footer>Todos os direitor reservados - Nelcael Alves Ferreira</footer>
      </BrowserRouter>  
    );
  }
export default App;
