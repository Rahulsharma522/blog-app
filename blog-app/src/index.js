import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import './stylesheet/style.css'


import App from './component/app'

ReactDOM.render(
    
        <BrowserRouter>
            <App />
        </BrowserRouter>
    
    , document.getElementById('root'));