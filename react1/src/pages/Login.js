import React from 'react';
import {connect} from 'react-redux';
function Login(props) {
    function handleRogerio() {
        props.setName('Rogerio')
    }

    return(
        <div>
            <h1>Página Login</h1>
            <h3>Tem que fazer o login aqui</h3>
            O nome é {props.name}

            <br></br>
            <br></br> 
            <button onClick={handleRogerio}>Trocar nome para Rogerio</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        name: state.usuario.name
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setName:(newName) => dispatch({
            type:'SET_NAME',
            payload:{name:newName}
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)