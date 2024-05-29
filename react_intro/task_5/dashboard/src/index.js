import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
            <Notifications />
        </React.StrictMode>
    );
} else {
    console.error("No element with it root found in index.html");
}