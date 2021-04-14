import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './styles/main.scss';
import reducer from './reducers';
import App from './components/App';

const container = document.getElementById('app');

const initialState = {
    loading: true,
    data: undefined,
    error: null
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);