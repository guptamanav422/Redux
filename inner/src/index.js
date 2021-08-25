import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import reducer from "./Redux/reducers"
import {Provider} from "react-redux";
let myStore= createStore(reducer)

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
