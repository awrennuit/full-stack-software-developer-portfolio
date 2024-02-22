import { Link, useLocation } from 'react-router-dom';

export default function AwfHeader() {
  const location = useLocation();

  return (
    <header className="awf-header">
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/a-welcome-funeral/a-little-intro">
                a welcome funeral
              </Link>
            </h1>
          </li>
          <li>
            {location?.pathname !== '/a-welcome-funeral/history' && (
              <Link to="/a-welcome-funeral/history">history</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
