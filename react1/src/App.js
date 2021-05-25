import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';

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
              <li>
                <Link to='/quem-somos'>Quem somos</Link>
              </li>
              <li>
                <Link to='/categoria?tipo=esporte'>Esportes</Link>
              </li>
              <li>
                <Link to='/categoria?tipo=noticias'>Noticias</Link>
              </li>
              <li>
                <Link to='/categoria?tipo=viagem'>viagem</Link>
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
          <Route exact path='/quem-somos'>
            <Redirect to="/sobre"></Redirect>
          </Route>
          <Route path='/categoria'>
            <Categoria></Categoria>
          </Route>
          {/* rota final */}
          <Route path='*'>
            <h4>Pagina não encontrada!</h4>
          </Route>
        </Switch>
        <hr></hr>
        <footer>Todos os direitor reservados - Nelcael Alves Ferreira</footer>
      </BrowserRouter>  
    );
  }
export default App;
