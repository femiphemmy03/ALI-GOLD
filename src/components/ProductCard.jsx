import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <span className="product-unit">{product.unit}</span>
        <div className="product-bottom">
          <span className="product-price">₦{product.price.toLocaleString()}</span>
          <button className="btn btn-ghost add-btn" onClick={() => addItem(product, 1)}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
