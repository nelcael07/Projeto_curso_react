import React from 'react';
import{useHistory,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

function Home(props) {
    let history = useHistory();

    const handleCristiano= ()=>{
        props.setName('Cristiano')
    }
    const handleIncrement = ()=>{
        props.increment();
    }
    function handleButton() {
        setTimeout(()=>{
            history.replace('/sobre');
        },2000)
    }
    return(
        <div>
            <h4>Página HOME</h4>

            NOME: {props.name}<br></br>
            CONTADOR: {props.contador}
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

const mapStateToProps = (state) =>{
    return{
        name: state.usuario.name,
        contador:state.usuario.contador
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
            setName:(newName)=> dispatch({
                type:'SET_NAME',
                payload:{name:newName}
            }),
            increment:()=> dispatch({
                type:'AUTO_INCREMENT'
            })
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);

