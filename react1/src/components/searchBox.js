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
    useEffect(()=>{
        props. onChangetext(texto);
    },[texto])
    return(
        <>
            <InputText 
                type="text"
                value={texto}
                // onChange permite que o setTexto atualize a variavel texto, assim permitindo a inserção de valores
                onChange={(e)=>setTexto(e.target.value)}
                placeholder={props.frasePadrao ?? "frase padrão de teste"}
            />
        </>
    )
}
export default SearchBox;