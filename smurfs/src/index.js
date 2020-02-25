import React from 'react';
import ReactDOM from 'react-dom';
import SmurfApp from './SmurfApp';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Reducer } from './reducers/';
import thunk from 'redux-thunk';
import './SmurfApp.css';

const store = createStore(Reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><SmurfApp /></Provider>, rootElement);