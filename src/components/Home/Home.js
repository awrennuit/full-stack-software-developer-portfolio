import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import About from '../About/About';

export default function Home() {

  return(
    <>
      <Header />
      <div className="main-container">
        <About />
      </div>
    </>
  );
}