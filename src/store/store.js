import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
//import {count} from "./reducers/reducer"
import * as reducers from "./reducers/reducer"
  
const _reducers = combineReducers(reducers)
// const logger = creatLogger() //Since 3.0.0 redux-logger exports by default logger with default settings.
const store = createStore(_reducers,applyMiddleware(thunk,logger))

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

export default store

 