import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-seal" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="34" height="34">
          <circle cx="24" cy="24" r="22" fill="currentColor" className="seal-ring" />
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" className="seal-dash" />
          <text x="24" y="29" textAnchor="middle" className="seal-text">AG</text>
        </svg>
      </span>
      <span className="logo-text">
        <span className="logo-ali">ALI</span><span className="logo-dash">-</span><span className="logo-gold">GOLD</span>
      </span>
    </Link>
  );
}
