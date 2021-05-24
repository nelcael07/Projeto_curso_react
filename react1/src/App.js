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

    function addAction(newItem) {
      
      let newList = [...list,{title:newItem, done:false}];
      
      setList(newList)
    }
  return (
    <>
      <h1>lista de tarefas</h1>
       <SearchBox 
          frasePadrao="Adicione um item.." 
          onEnter={addAction}
       ></SearchBox>
       <hr></hr>
       {/* exibição de listas */}
       {/* aqui é feito uma condição para ver se o item.done é falso ou true */}
        <ul>
        {list.map((item, index)=>(
          <li key={index}>
            <div>{item.title} - {item.done.toString()}</div>
          </li>
        ))}
       </ul>
      </>  
  );
}
export default App;
