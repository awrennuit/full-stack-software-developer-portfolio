import { headerLinks } from '../utils/headerLinks';
import HeaderBtn from './HeaderBtn';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__inner">
          {headerLinks.map((link, i) => (
            <li key={i}>
              <HeaderBtn
                label={link.label}
                subLinks={link.subLinks}
                url={link.url}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
