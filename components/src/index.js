import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavigationProvider } from './context/navigation';

const ele  = document.getElementById('root');
const root = ReactDOM.createRoot(ele);

root.render(<NavigationProvider>
        <App />
    </NavigationProvider>
)