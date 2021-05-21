import React,{useState, useEffect} from 'react'
import styled from  'styled-components';


const InputText = styled.input`
    border:2px solid #000;
    border-radius:5px
    padding:15px;
    font-size:17px;
`
function SearchBox(props) {
    
    const[texto, setTexto] = useState('');
    
    function handleKeyup(e) {
        
        if (e.keyCode == 13) {
            
            if (props.onEnter) {
                props.onEnter(texto);
            }
            setTexto('');
        }
    }

    return(
        <>
            <InputText 
                type="text"
                value={texto}
                // onChange permite que o setTexto atualize a variavel texto, assim permitindo a inserção de valores
                onChange={(e)=>setTexto(e.target.value)}
                onKeyUp={handleKeyup}
                placeholder={props.frasePadrao ?? "frase padrão de teste"}
            />
        </>
    )
}
export default SearchBox;