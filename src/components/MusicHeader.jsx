import { musicHeaderLinks } from '../utils/headerLinks';
import NavLink from './NavLink';

export default function MusicHeader() {
  return (
    <header className="music-header">
      <nav>
        <ul className="music-header__inner">
          {musicHeaderLinks.map((link, i) => (
            <li key={i}>
              <NavLink label={link.label} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
