import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import createSagaMiddleware from'redux-saga';
// import thunk from 'redux-thunk';

import todoReducer from '../screens/Home/stores/reducer';

const initialState = {
    counter: 0
};

export default function configureStore(history, preloadedState = {}) {

    const rootReducer = history => combineReducers({
        // router: connectRouter(history),
        todo: todoReducer
    });

    // for redux-saga
    // const sagaMiddleware = createSagaMiddleware();
    const middleware = [
        // routerMiddleware(history),
        // sagaMiddleware,
        // thunk
    ];

    const enhancers = [];
    // const isDevelopment = process.env.NODE_ENV === 'development';
    // if (isDevelopment && typeof window !== 'undefined' && 
    //     (window as any).devToolsExtension !== undefined && (window as any).devToolsExtension()) {
    //     enhancers.push((window as any).devToolsExtension());
    // }

    const store =  createStore(
        rootReducer(history),
        preloadedState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );

    return store;
}