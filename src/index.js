import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import logger from 'redux-logger';


//import { HashRouter as Router, Route, Link } from 'react-router-dom';

const surveyResponse = (state ={feeling: '',understanding: '', support: '', comments: ''}, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload}
    } else if (action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload}
    } else if (action.type === 'ADD_COMMENTS') {
        return {...state, comments: action.payload}
    } else if(action.type === 'CLEAR') {
        return {feeling: '',understanding: '', support: '', comments: ''}
    }
return state
}

const store = createStore(
    combineReducers({
        surveyResponse
    }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
