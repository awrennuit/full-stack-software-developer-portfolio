import React from 'react';

const Abstract = React.lazy(() => import('./components/Abstract'));
const AlbumIdeaGenerator = React.lazy(
  () => import('./components/AlbumIdeaGenerator/AlbumIdeaGenerator'),
);
const AwfHistory = React.lazy(
  () => import('./components/AWelcomeFuneral/AwfHistory'),
);
const AwfPost = React.lazy(
  () => import('./components/AWelcomeFuneral/AwfPost'),
);
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Sandbox = React.lazy(() => import('./components/Sandbox/Sandbox'));
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
const Landing = React.lazy(() => import('./components/Landing'));
const MyMusic = React.lazy(() => import('./components/MyMusic/MyMusic'));
const PasswordGenerator = React.lazy(
  () => import('./components/PasswordGenerator'),
);
const ProjectNameGenerator = React.lazy(
  () => import('./components/ProjectNameGenerator'),
);
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Secret = React.lazy(() => import('./components/Secret'));
const Stories = React.lazy(() => import('./components/Stories'));
const Story = React.lazy(() => import('./components/Story'));
const Swatches = React.lazy(() => import('./components/Swatches'));
const TimerMain = React.lazy(() => import('./components/Timer/TimerMain'));

const routes = [
  { path: '/', element: <Landing /> },
  { path: '/about', element: <Home /> },
  { path: '/abstract-art', element: <Abstract /> },
  { path: '/album-idea-generator', element: <AlbumIdeaGenerator /> },
  { path: '/a-welcome-funeral/history', element: <AwfHistory /> },
  { path: '/a-welcome-funeral/:slug', element: <AwfPost /> },
  { path: '/contact', element: <Contact /> },
  { path: '/sandbox', element: <Sandbox /> },
  { path: '/dungeon-synth', element: <DungeonSynth /> },
  { path: '/dungeon-vault', element: <DungeonVault /> },
  { path: '/gradient-maker', element: <CustomGradient /> },
  { path: '/my-music', element: <MyMusic /> },
  { path: '/password-generator', element: <PasswordGenerator /> },
  { path: '/project-name-generator', element: <ProjectNameGenerator /> },
  { path: '/projects', element: <Projects /> },
  { path: '/secret', element: <Secret /> },
  { path: '/stories', element: <Stories /> },
  { path: '/stories/:slug', element: <Story /> },
  { path: '/swatches', element: <Swatches /> },
  { path: '/timer', element: <TimerMain /> },
];

export default routes;
