import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBox from './components/searchBox'

function App() {

  const [textoAtual,setTextoAtual] = useState('')
  function handleSearchInput(novoTexto) {
    setTextoAtual(novoTexto);
  }
  
  return (
    <>
      <h1>lista de tarefas</h1>
       <SearchBox 
        frasePadrao="faça a busca..." 
        onChangetext = {handleSearchInput}
       ></SearchBox>
       <hr></hr>

       texto procurado: {textoAtual}
      </>  
  );
}
export default App;
