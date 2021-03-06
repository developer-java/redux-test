import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';
import {routerReducer } from 'react-router-redux';

export default createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }), 
    {}, 
    applyMiddleware(thunk)
);
