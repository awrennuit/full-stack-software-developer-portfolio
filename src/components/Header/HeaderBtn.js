import { useLocation, useNavigate } from 'react-router-dom';

export default function HeaderBtn({ label, url }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={location.pathname === url ? 'header-btn-here' : 'header-btn'}
      onClick={() => (location.pathname !== url ? navigate(url) : null)}
    >
      <span className="header-btn-corner-one"></span>
      <span className="header-btn-corner-two"></span>
      {label}
    </button>
  );
}
