import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import routes from './routes';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            {/* TODO: make 404 page */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
