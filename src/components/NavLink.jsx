import { Link, useLocation } from 'react-router-dom';

export default function HeaderBtn({ label, url, backupUrl }) {
  const location = useLocation();
  const isCurPage =
    location.pathname === url || location.pathname === backupUrl;

  return (
    <Link
      className={`nav-link${isCurPage ? ' nav-link--current' : ''}`}
      to={isCurPage ? '#' : url}
      tabIndex={isCurPage ? '-1' : '0'}
    >
      {label}
    </Link>
  );
}
