import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

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
      </BrowserRouter>  
    );
  }
export default App;
