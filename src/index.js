import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './App';
import App from './App';
import Education from './education';
import Home from './Home';
import Navbar from './navbar';
import Personal from './personalinfo';
import Projects from './projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router/>)

