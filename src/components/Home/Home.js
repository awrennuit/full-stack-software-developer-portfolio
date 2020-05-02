import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';

export default function Home() {

  return(
    <>
      <Header />
      <div className="main-container">
        <About />
        <br />
        <Skills />
      </div>
    </>
  );
}