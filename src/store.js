import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import logger from "redux-logger";

var middlewares = [thunk];
if(process.env.REACT_ENV == 'dev'){
    middlewares.push(logger);
}

function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export default configureStore({});