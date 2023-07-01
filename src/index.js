import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stateManagement/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        // Here entire component has been provided with store value thus, state has been lifted.
        <HashRouter>
                <Provider store={store}>  
                        
                                        <App/>
                        
                </Provider>
        </HashRouter>
)

