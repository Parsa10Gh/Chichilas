import ReactDOM  from "react-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import App from './app';
import {BrowserRouter} from 'react-router-dom';


// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));