
import {applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/index';

import { ITodoStoreState } from '../reducers/todo';


export interface IStore {
    todo: ITodoStoreState
}

let composeEnhancers = compose;
const middlewares = [
    //logger,
    ReduxThunk
];

if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    )
};

export default configureStore;