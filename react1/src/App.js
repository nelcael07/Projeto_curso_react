import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBox from './components/searchBox'

function App() {
  return (
    <>
      <h1>lista de tarefas</h1>
       <SearchBox frasePadrao="faça a busca..."></SearchBox>
       <SearchBox frasePadrao="faça a busca teste segunda..."></SearchBox>
       <SearchBox></SearchBox>
    </>  
  );
}
export default App;
