import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const featured = products.filter((p) => [5, 8, 11, 13, 1, 20, 7, 17].includes(p.id));

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Lagos · Same-day delivery</span>
            <h1>
              Everyday essentials,<br />
              <span className="hero-accent">gold-standard</span> delivery.
            </h1>
            <p className="hero-sub">
              From garri to gas-station drinks, ALI-GOLD brings your groceries, drinks,
              household items and wellbeing essentials to your door — order on the web
              or straight from WhatsApp.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <a href="https://wa.me/2348134808602" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Order on WhatsApp
              </a>
            </div>
            <div className="hero-stats">
              <div><strong>20+</strong><span>everyday items</span></div>
              <div><strong>5</strong><span>categories</span></div>
              <div><strong>₦100</strong><span>starting price</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card-1">
              <span className="hero-card-icon">🛒</span>
              <strong>Order placed</strong>
              <span>4 items · ₦3,400</span>
            </div>
            <div className="hero-card hero-card-2">
              <span className="hero-card-icon">🛵</span>
              <strong>Arriving in 18 min</strong>
              <span>Rider on the way</span>
            </div>
            <div className="hero-blob" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Browse</span>
          <h2>Shop by category</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link to={`/shop?category=${c.id}`} key={c.id} className="category-card">
              <span className="category-icon">{c.icon}</span>
              <span className="category-name">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container section">
        <div className="section-head">
          <span className="eyebrow">Popular this week</span>
          <h2>Featured products</h2>
        </div>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="section-footer-action">
          <Link to="/shop" className="btn btn-outline">View all products</Link>
        </div>
      </section>

      {/* FUTURE VISION STRIP */}
      <section className="container section">
        <div className="vision-strip">
          <div className="vision-text">
            <span className="badge-soon">Coming soon</span>
            <h3>Track every order, right inside WhatsApp.</h3>
            <p>
              Place your order, get your Flutterwave payment confirmation, and watch your
              rider make their way to you — all through WhatsApp updates.
            </p>
            <div className="vision-links">
              <Link to="/whatsapp-status" className="btn btn-ghost">Preview order tracking</Link>
              <Link to="/rider-tracking" className="btn btn-ghost">Preview rider tracking</Link>
            </div>
          </div>
          <div className="vision-visual" aria-hidden="true">
            <div className="vision-phone">
              <div className="vision-phone-bar" />
              <div className="vision-bubble">Your order is out for delivery 🛵</div>
              <div className="vision-bubble alt">Rider is 12 mins away</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
