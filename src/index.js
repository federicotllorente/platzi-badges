import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/main.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<Provider><App /></Provider>, container);