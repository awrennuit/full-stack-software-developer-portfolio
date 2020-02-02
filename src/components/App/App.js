import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Router>
        <Link to='/'>
          <Header />
        </Link>
        {/* <Route exact path='/' component={Home} /> */}
      </Router>
    </>
  );
}

export default App;
