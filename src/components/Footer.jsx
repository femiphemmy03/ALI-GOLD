import { Link } from 'react-router-dom';
import Logo from './Logo';
import { categories } from '../data/products';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-tagline">Your everyday essentials, delivered with gold-standard care.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter / X">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.id}><Link to={`/shop?category=${c.id}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Contact</Link></li>
            <li><Link to="/whatsapp-status">Order Tracking (Preview)</Link></li>
            <li><Link to="/rider-tracking">Rider Tracking (Preview)</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li>📞 08089371721</li>
            <li>✉️ hello@aligold.ng</li>
            <li>📍 Owerri, Imo State, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} ALI-GOLD. All rights reserved.</span>
        <span className="footer-demo-note">Demo build — frontend preview only</span>
      </div>
    </footer>
  );
}
