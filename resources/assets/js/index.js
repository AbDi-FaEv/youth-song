import './bootstrap';

import ReactDOM from "react-dom";
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';

import '../css/grid.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>, rootEl);