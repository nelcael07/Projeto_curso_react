import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBox from './components/searchBox'
function App() {

  const [textoAtual,setTextoAtual] = useState('');

  const[list,setList] = useState([]);
  
  useEffect(()=>{
    setList([
      {title:'comprar o bolo', done:false},
      {title:'Aniversario da magali', done:true},
      {title:'Aniversario do José geraldo', done:true}
    ])
  },[])

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
       
       {/* exibição de listas */}
       {/* aqui é feito uma condição para ver se o item.done é falso ou true */}

       <ul>
        {list.map((item, index)=>(
          <li key={index}>
            {item.done &&
              <div>{item.title} - {item.done.toString()}</div>
            }
            { !item.done &&
              <h3>Aqui era falso</h3>
            }
          </li>
        ))}
       </ul>


      </>  
  );
}
export default App;
