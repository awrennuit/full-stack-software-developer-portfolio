import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import '../stylesheets/app.css';

const Abstract = React.lazy(() => import('./Abstract'));
const Blog = React.lazy(() => import('./Blog'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const CssSandbox = React.lazy(() => import('./CssSandbox/CssSandbox'));
const CustomGradient = React.lazy(() =>
  import('./CustomGradient/CustomGradient')
);
const Home = React.lazy(() => import('./Home'));
const Landing = React.lazy(() => import('./Landing'));
const PasswordGenerator = React.lazy(() =>
  import('./PasswordGenerator')
);
const ProjectList = React.lazy(() => import('./ProjectList'));
const Swatches = React.lazy(() => import('./Swatches'));
const TimerMain = React.lazy(() => import('./TimerMain'));

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
