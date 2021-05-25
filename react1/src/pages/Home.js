import React from 'react';
import{useHistory,Redirect} from 'react-router-dom'

function Home() {
    let history = useHistory();

    function handleButton() {
        setTimeout(()=>{
            history.replace('/sobre');
        },2000)
    }
    return(
        <div>
            <h4>Página HOME</h4>
            <button onClick={handleButton} >Ir para a pagina sobre</button>
            {/* <button><Redirect to="/sobre"></Redirect>Ir para a pagina sobre com Redirect</button> */}
        </div>
    )
}
export default Home;