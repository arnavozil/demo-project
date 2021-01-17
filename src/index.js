import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './sass/main.scss';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('main')
);
