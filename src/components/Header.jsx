import { headerLinks } from '../utils/headerLinks';
import HeaderBtn from './HeaderBtn';
import '../stylesheets/header.css';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header-flex">
          {headerLinks.map((link, i) => (
            <li key={i}>
              <HeaderBtn label={link.label} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
