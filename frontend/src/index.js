import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './store/UserContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Context>
        <App />
    </Context>
);

reportWebVitals();