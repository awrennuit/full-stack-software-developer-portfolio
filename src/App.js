import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';

const Abstract = React.lazy(() => import('./components/Abstract'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const CssSandbox = React.lazy(() =>
  import('./components/CssSandbox/CssSandbox')
);
const CustomGradient = React.lazy(() =>
  import('./components/CustomGradient/CustomGradient')
);
const DungeonSynth = React.lazy(() =>
  import('./components/DungeonSynth/DungeonSynth')
);
const Home = React.lazy(() => import('./components/Home/Home'));
const Landing = React.lazy(() => import('./components/Landing'));
const PasswordGenerator = React.lazy(() =>
  import('./components/PasswordGenerator')
);
const Projects = React.lazy(() =>
  import('./components/Projects/Projects')
);
const Swatches = React.lazy(() => import('./components/Swatches'));
const TimerMain = React.lazy(() => import('./components/Timer/TimerMain'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/abstract-art" element={<Abstract />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/css-sandbox" element={<CssSandbox />} />
          <Route exact path="/dungeon-synth" element={<DungeonSynth />} />
          <Route exact path="/gradient-maker" element={<CustomGradient />} />
          <Route
            exact
            path="/password-generator"
            element={<PasswordGenerator />}
          />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/swatches" element={<Swatches />} />
          <Route exact path="/timer" element={<TimerMain />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
