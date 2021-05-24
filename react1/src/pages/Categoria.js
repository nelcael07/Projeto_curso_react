import React from 'react';
import {useLocation} from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Categoria() {
    let query = useQuery();
    let cat = query.get('tipo')
    let subcat = query.get('subtipo')
    return(
        <div>
            <h4>Página Categoria</h4>
            <h2>exibindo coisas da categoria: {cat} - {subcat}</h2>
        </div>
    )
}
export default Categoria;