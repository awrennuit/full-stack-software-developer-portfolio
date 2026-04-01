import React from 'react';
import { Navigate } from 'react-router-dom';

const Abstract = React.lazy(() => import('./components/Abstract'));
const AwfHistory = React.lazy(
  () => import('./components/AWelcomeFuneral/AwfHistory'),
);
const AwfPost = React.lazy(
  () => import('./components/AWelcomeFuneral/AwfPost'),
);
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const CustomGradient = React.lazy(
  () => import('./components/CustomGradient/CustomGradient'),
);
const DungeonSynth = React.lazy(
  () => import('./components/DungeonSynth/DungeonSynth'),
);
const DungeonVault = React.lazy(
  () => import('./components/DungeonSynth/DungeonVault'),
);
const Home = React.lazy(() => import('./components/Home/Home'));
const IdeaGenerator = React.lazy(
  () => import('./components/IdeaGenerator/IdeaGenerator'),
);
const Landing = React.lazy(() => import('./components/Landing'));
const MyMusic = React.lazy(() => import('./components/MyMusic/MyMusic'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const PasswordGenerator = React.lazy(
  () => import('./components/PasswordGenerator'),
);
const ProjectNameGenerator = React.lazy(
  () => import('./components/ProjectNameGenerator'),
);
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Sandbox = React.lazy(() => import('./components/Sandbox/Sandbox'));
const Secret = React.lazy(() => import('./components/Secret'));
const Stories = React.lazy(() => import('./components/Stories'));
const Story = React.lazy(() => import('./components/Story'));
const Swatches = React.lazy(() => import('./components/Swatches'));
const Timer = React.lazy(() => import('./components/Timer'));

export const routes = [
  { path: '/', element: <Landing /> },
  { path: '/about', element: <Home /> },
  { path: '/abstract-art', element: <Abstract /> },
  {
    path: '/album-idea-generator/',
    element: <Navigate to="/idea-generator/album" replace />,
  },
  { path: '/a-welcome-funeral/history', element: <AwfHistory /> },
  { path: '/a-welcome-funeral/:slug', element: <AwfPost /> },
  { path: '/contact', element: <Contact /> },
  { path: '/dungeon-synth', element: <DungeonSynth /> },
  { path: '/dungeon-vault', element: <DungeonVault /> },
  { path: '/gradient-maker', element: <CustomGradient /> },
  { path: '/idea-generator/:slug', element: <IdeaGenerator /> },
  {
    path: '/idea-generator/',
    element: <Navigate to="/idea-generator/album" replace />,
  },
  { path: '/my-music', element: <MyMusic /> },
  { path: '/password-generator', element: <PasswordGenerator /> },
  { path: '/project-name-generator', element: <ProjectNameGenerator /> },
  { path: '/projects', element: <Projects /> },
  { path: '/sandbox', element: <Sandbox /> },
  { path: '/secret', element: <Secret /> },
  { path: '/stories', element: <Stories /> },
  { path: '/stories/:slug', element: <Story /> },
  { path: '/swatches', element: <Swatches /> },
  { path: '/timer', element: <Timer /> },
  { path: '*', element: <NotFound /> },
];
