import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Abstract from "../Abstract/Abstract";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import CssSandbox from "../CssSandbox/CssSandbox";
import Landing from "../Landing/Landing";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import ProjectList from "../Projects/ProjectList";
import TimerMain from "../TimerMain/TimerMain";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={Home} />
      <Route exact path="/abstract-art" component={Abstract} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/css-sandbox" component={CssSandbox} />
      <Route exact path="/password-generator" component={PasswordGenerator} />
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/timer" component={TimerMain} />
    </Router>
  );
}
