import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="container section">
        <p>Product not found.</p>
        <Link to="/shop" className="btn btn-primary">Back to shop</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container section">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
      </nav>

      <div className="pd-layout">
        <div className="pd-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="pd-info">
          <h1>{product.name}</h1>
          <p className="pd-unit">{product.unit}</p>
          <p className="pd-price">₦{product.price.toLocaleString()}</p>
          <p className="pd-description">{product.description}</p>

          <div className="pd-qty">
            <span>Quantity</span>
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div className="pd-actions">
            <button className="btn btn-primary btn-block" onClick={() => addItem(product, qty)}>
              Add {qty} to Cart — ₦{(product.price * qty).toLocaleString()}
            </button>
            <button
              className="btn btn-outline btn-block"
              onClick={() => { addItem(product, qty); navigate('/cart'); }}
            >
              Add & Go to Cart
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <div className="section-head">
            <span className="eyebrow">You may also need</span>
            <h2>Related products</h2>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
