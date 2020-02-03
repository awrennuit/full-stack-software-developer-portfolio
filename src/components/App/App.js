import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';

function App() {
  return (
    <>
      <Router>
        <Link to='/'>
          <Header />
        </Link>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
      </Router>
    </>
  );
}

export default App;
