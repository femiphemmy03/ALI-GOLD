import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const DELIVERY_FEE = 500;

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  const total = items.length > 0 ? subtotal + DELIVERY_FEE : 0;

  if (items.length === 0) {
    return (
      <div className="container section empty-cart">
        <span className="empty-icon">🛍️</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet. Let's fix that.</p>
        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <div className="section-head">
        <span className="eyebrow">{items.length} item{items.length !== 1 ? 's' : ''}</span>
        <h2>Your Cart</h2>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-row" key={item.id}>
              <Link to={`/product/${item.id}`} className="cart-row-img">
                <img src={item.img} alt={item.name} />
              </Link>
              <div className="cart-row-info">
                <Link to={`/product/${item.id}`} className="cart-row-name">{item.name}</Link>
                <span className="cart-row-unit">{item.unit}</span>
                <button className="cart-row-remove" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
              <div className="cart-row-qty">
                <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase">+</button>
              </div>
              <div className="cart-row-price">₦{(item.price * item.qty).toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery fee</span>
            <span>₦{DELIVERY_FEE.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <button className="btn btn-primary btn-block" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
          <Link to="/shop" className="continue-shopping">← Continue shopping</Link>
        </div>
      </div>
    </div>
  );
}
