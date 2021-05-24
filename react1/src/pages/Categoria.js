import React from 'react';
import {useParams} from 'react-router-dom';
function Categoria() {
    let{cat} = useParams();
    return(
        <div>
            <h4>Página Categoria</h4>
            <h2>exibindo coisas da categoria: {cat}</h2>
        </div>
    )
}
export default Categoria;