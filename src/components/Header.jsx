import { headerLinks } from '../utils/headerLinks';
import HeaderBtn from './HeaderBtn';
import '../stylesheets/header.css';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <ul className="header-flex">
          {headerLinks.map((link, i) => (
            <li>
              <HeaderBtn key={i} label={link.label} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
