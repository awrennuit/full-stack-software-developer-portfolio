import { Link, useLocation } from 'react-router-dom';

export default function HeaderBtn({ label, subLinks, url }) {
  const location = useLocation();
  const isCurPage = location.pathname === url;

  return (
    <>
      {url && (
        <Link
          className={`header-btn${isCurPage ? ' header-btn--current' : ''}
      `}
          to={location.pathname !== url ? url : '#'}
          tabIndex={isCurPage ? '-1' : '0'}
        >
          <span className="header-btn__corner-one"></span>
          <span className="header-btn__corner-two"></span>
          {label}
        </Link>
      )}
      {subLinks && (
        <span className="header-btn header-btn--with-sublist" tabIndex={0}>
          <span className="header-btn__corner-one"></span>
          <span className="header-btn__corner-two"></span>
          {label}
          <ul className="header-btn__sublist">
            {subLinks.map((subLink, i) => (
              <li className="header-btn__subitem" key={i}>
                <Link to={subLink.url}>{subLink.label}</Link>
              </li>
            ))}
          </ul>
        </span>
      )}
    </>
  );
}
