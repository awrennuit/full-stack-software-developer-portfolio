import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import './stylesheets/app.css';

const Abstract = React.lazy(() => import('./components/Abstract'));
const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));
const CssSandbox = React.lazy(() => import('./components/CssSandbox/CssSandbox'));
const CustomGradient = React.lazy(() =>
  import('./components/CustomGradient/CustomGradient')
);
const Home = React.lazy(() => import('./components/Home'));
const Landing = React.lazy(() => import('./components/Landing'));
const PasswordGenerator = React.lazy(() =>
  import('./components/PasswordGenerator')
);
const ProjectList = React.lazy(() => import('./components/ProjectList'));
const Swatches = React.lazy(() => import('./components/Swatches'));
const TimerMain = React.lazy(() => import('./components/TimerMain'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/abstract-art" element={<Abstract />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/css-sandbox" element={<CssSandbox />} />
          <Route exact path="/gradient-maker" element={<CustomGradient />} />
          <Route
            exact
            path="/password-generator"
            element={<PasswordGenerator />}
          />
          <Route exact path="/projects" element={<ProjectList />} />
          <Route exact path="/swatches" element={<Swatches />} />
          <Route exact path="/timer" element={<TimerMain />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
