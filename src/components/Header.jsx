import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
              end
            >
              {link.label}
            </NavLink>
          ))}
          <div className="search-bar mobile-only">
            <input type="text" placeholder="Search for groceries, drinks…" aria-label="Search products" />
            <span className="search-icon">⌕</span>
          </div>
        </nav>

        <div className="header-actions">
          <div className="search-bar desktop-only">
            <input type="text" placeholder="Search for groceries, drinks…" aria-label="Search products" />
            <span className="search-icon">⌕</span>
          </div>

          <Link to="/cart" className="cart-link" aria-label="Cart">
            <span className="cart-icon">🛍️</span>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
