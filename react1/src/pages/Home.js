import React, { useEffect } from 'react';
import{useHistory,Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';

function Home() {

    const name =  useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);
    const dispatch = useDispatch();
    
    let history = useHistory();

    const handleCristiano= ()=>{    
       dispatch({
           type: 'SET_NOME',
           payload: {nome:'Cristino'}
       })
    }
    const handleIncrement = ()=>{
        dispatch({
            type: 'AUTO_INCREMENT',
        })
    }
    function handleButton() {
        setTimeout(()=>{
            history.replace('/sobre');
        },2000)
    }
    return(
        <div>
            <h4>Página HOME</h4>

            NOME: {name}<br></br>
            CONTADOR: {contador}
            <br></br>
            <br></br>
            <button onClick={handleCristiano}>Setar Nome para Cristiano</button>
            <br></br>
            <br></br>
            <button onClick={handleIncrement}>Setar para mais 1</button>
            <br></br>
            <br></br>
            <button onClick={handleButton} >Ir para a pagina sobre</button>
            {/* <button><Redirect to="/sobre"></Redirect>Ir para a pagina sobre com Redirect</button> */}
        </div>
    )
}

export default Home;


