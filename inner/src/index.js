import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers,createStore } from 'redux';
import App from './App';
import {counterReducer,loginReducer} from "./file/reducer.js"


let rootReducer=combineReducers({
  count:counterReducer,
  logged:loginReducer,
})
let myStore=createStore(rootReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
