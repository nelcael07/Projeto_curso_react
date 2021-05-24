import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBox from './components/searchBox'
function App() {
  const[nome,setNome] = useState(localStorage.getItem('nome'))
  const[teste,setTeste] = useState(localStorage.getItem('teste'))

  useEffect(()=>{
    localStorage.setItem('nome', nome)
  },[nome])

  return (
    <>
      nome: {nome} - funciona com duas variaveis? {teste}
      <input placeholder='digite aqui...' type="text" value={nome} onChange={e=>setNome(e.target.value)}></input>
    </>  
  );
}
export default App;
