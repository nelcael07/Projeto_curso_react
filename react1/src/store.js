import React from 'react';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import Reducers from './reducers';

const persistConfig = {
    key:'root',
    storage: storage,
    // pode colocar os redux que vc quer que persista, esse atributo é opcional
    whitelist:['usuario']
}

const pReducer = persistReducer(persistConfig, Reducers);

const store = createStore(pReducer);

const persistor = persistStore(store)

export{store, persistor};
