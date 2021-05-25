import { combaineReducers } from "redux";
import UsuarioReducer from "./UsuarioReducer";

export default combaineReducers({
    usuario : UsuarioReducer
})