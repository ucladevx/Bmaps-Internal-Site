import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home';
import { Helmet } from 'react-helmet';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';

const root = (
    <div className='wrapper'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Mappening Internal Site</title>
        </Helmet>
        <h1>Mappening Internal Site</h1>
        <Home />
    </div>
);

ReactDOM.render(root, document.getElementById('root'));
