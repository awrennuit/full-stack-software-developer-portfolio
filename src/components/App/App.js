import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Link to='/'>
          <Header />
        </Link>
        <Route exact path='/' component={Home} />
      </Router>
    </>
  );
}

export default App;
