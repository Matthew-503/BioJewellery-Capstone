import React from 'react';
import ReactDOM from 'react-dom';
//provider determines the access to the store
import { Provider } from 'react-redux';
//store we are using in our application
import { store } from './app/store';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        //wrapping up app inside provider, everything in App and it's child components have access to the store
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </ BrowserRouter>
        </Provider>


    </React.StrictMode>
)



