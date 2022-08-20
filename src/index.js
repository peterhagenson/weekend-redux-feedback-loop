import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


const feeling = (state = {}, action) => {
    if (action.type === 'ADD_FEELING') {
        console.log(action.payload);
        return action.payload;
    }
return state;
}

const understanding = (state = {}, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log(action.payload);
        return action.payload;
    }
return state;
}

const support = (state = ' ', action) => {
    if (action.type === 'ADD_SUPPORT') {
        console.log(action.payload);
        return action.payload;
    }
return state;
}

const comments = (state = {}, action) => {
    if (action.type === 'ADD_COMMENTS') {
        console.log(action.payload);
        return action.payload;
}
return state;
}

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
