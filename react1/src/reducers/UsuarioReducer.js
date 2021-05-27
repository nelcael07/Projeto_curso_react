const initialState = {
    name:'Nelcael',
    contador : 0
}
const UsuarioReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'SET_NAME':
         return{...state, name:action.payload.name}
         break; 
        case 'AUTO_INCREMENT':
            let newContador = state.contador+1
            return{...state, contador:newContador} 
            break;
        }
    return state
};
export default UsuarioReducer;
