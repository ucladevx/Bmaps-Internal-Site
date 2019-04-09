import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';

const root = (
    <div className='wrapper'>
        <h1>Mappening</h1>
        <Home />
    </div>
);

ReactDOM.render(root, document.getElementById('root'));
