import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

export const configureStore=(preLoadedState)=>{
    const middlewares=[];
    const middlewareEnhancer=applyMiddleware(...middlewares);
    const storeEnhancers=[middlewareEnhancer];
    const composedEnhancer=composeWithDevTools(...storeEnhancers);

    const store=createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );
    if(process.env.NODE_ENV!=='production'){
        if(module.hot){
            module.hot.accept('../reducers/rootReducer',()=>{
                const newRootReducer=require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }
    return store;
}