import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';

const Abstract = React.lazy(() => import('./components/Abstract'));
const AlbumIdeaGenerator = React.lazy(() =>
  import('./components/AlbumIdeaGenerator/AlbumIdeaGenerator')
);
const AwfHistory = React.lazy(() =>
  import('./components/AWelcomeFuneral/AwfHistory')
);
const AwfPost = React.lazy(() =>
  import('./components/AWelcomeFuneral/AwfPost')
);
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Sandbox = React.lazy(() => import('./components/Sandbox/Sandbox'));
const CustomGradient = React.lazy(() =>
  import('./components/CustomGradient/CustomGradient')
);
const DungeonSynth = React.lazy(() =>
  import('./components/DungeonSynth/DungeonSynth')
);
const DungeonVault = React.lazy(() =>
  import('./components/DungeonSynth/DungeonVault')
);
const Home = React.lazy(() => import('./components/Home/Home'));
const Landing = React.lazy(() => import('./components/Landing'));
const MyMusic = React.lazy(() => import('./components/MyMusic/MyMusic'));
const PasswordGenerator = React.lazy(() =>
  import('./components/PasswordGenerator')
);
const ProjectNameGenerator = React.lazy(() =>
  import('./components/ProjectNameGenerator')
);
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Secret = React.lazy(() => import('./components/Secret'));
const Stories = React.lazy(() => import('./components/Stories'));
const Story = React.lazy(() => import('./components/Story'));
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
          <Route
            exact
            path="/album-idea-generator"
            element={<AlbumIdeaGenerator />}
          />
          <Route
            exact
            path="/a-welcome-funeral/history"
            element={<AwfHistory />}
          />
          <Route exact path="/a-welcome-funeral/:slug" element={<AwfPost />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sandbox" element={<Sandbox />} />
          <Route exact path="/dungeon-synth" element={<DungeonSynth />} />
          <Route exact path="/dungeon-vault" element={<DungeonVault />} />
          <Route exact path="/gradient-maker" element={<CustomGradient />} />
          <Route exact path="/my-music" element={<MyMusic />} />
          <Route
            exact
            path="/password-generator"
            element={<PasswordGenerator />}
          />
          <Route
            exact
            path="/project-name-generator"
            element={<ProjectNameGenerator />}
          />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/secret" element={<Secret />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/stories/:slug" element={<Story />} />
          <Route exact path="/swatches" element={<Swatches />} />
          <Route exact path="/timer" element={<TimerMain />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
