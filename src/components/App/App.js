import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator';
import Resume from '../Resume/Resume';
import Abstract from '../Abstract/Abstract';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/abstract-art' component={Abstract} />
      <Route exact path='/password-generator' component={PasswordGenerator} />
      <Route exact path='/resume' component={Resume} />
    </Router>
  );
}