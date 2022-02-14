import React, { Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

const Abstract = React.lazy(() => import("../Abstract/Abstract"));
const Blog = React.lazy(() => import("../Blog/Blog"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const CssSandbox = React.lazy(() => import("../CssSandbox/CssSandbox"));
const CustomGradient = React.lazy(() => import("../CustomGradient/CustomGradient"));
const Home = React.lazy(() => import("../Home/Home"));
const Landing = React.lazy(() => import("../Landing/Landing"));
const PasswordGenerator = React.lazy(() => import("../PasswordGenerator/PasswordGenerator"));
const ProjectList = React.lazy(() => import("../Projects/ProjectList"));
const Swatches = React.lazy(() => import("../Swatches/Swatches"));
const TimerMain = React.lazy(() => import("../TimerMain/TimerMain"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/abstract-art" component={Abstract} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/css-sandbox" component={CssSandbox} />
        <Route exact path="/gradient-maker" component={CustomGradient} />
        <Route exact path="/password-generator" component={PasswordGenerator} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/swatches" component={Swatches} />
        <Route exact path="/timer" component={TimerMain} />
      </Suspense>
    </Router>
  );
}
