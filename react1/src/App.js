import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';



function App() {

  const [contagem, setContagem] = useState(0);

  useEffect(()=>{
      if (contagem == 0 ) {
        document.title = 'Começando a brincadeira'
      }else{
        document.title = 'A contagem está em :'+contagem
      }
  },[contagem])

  function aumentarAction() {
    setContagem(contagem+1)
  }
  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Apertar</button>
    </>
  );
}
export default App;
