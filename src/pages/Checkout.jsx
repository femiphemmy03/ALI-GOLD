import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const DELIVERY_FEE = 500;
const PHONE = '2348134808602';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const total = subtotal + (items.length ? DELIVERY_FEE : 0);
  const isValid = form.name.trim() && form.phone.trim() && form.address.trim();

  if (items.length === 0) {
    return (
      <div className="container section empty-cart">
        <span className="empty-icon">🧾</span>
        <h2>Nothing to check out</h2>
        <p>Your cart is empty — add some items first.</p>
        <Link to="/shop" className="btn btn-primary">Browse Shop</Link>
      </div>
    );
  }

  const buildMessage = () => {
    const lines = items.map(
      (i) => `• ${i.name} (${i.unit}) x${i.qty} — ₦${(i.price * i.qty).toLocaleString()}`
    );
    return [
      `Hello ALI-GOLD! I'd like to place an order:`,
      '',
      ...lines,
      '',
      `Subtotal: ₦${subtotal.toLocaleString()}`,
      `Delivery fee: ₦${DELIVERY_FEE.toLocaleString()}`,
      `Total: ₦${total.toLocaleString()}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Delivery Address: ${form.address}`,
    ].join('\n');
  };

  const handleOrder = () => {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank');
    const orderId = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart();
    navigate('/order-confirmation', { state: { orderId, total, name: form.name } });
  };

  return (
    <div className="container section">
      <div className="section-head">
        <span className="eyebrow">Step 2 of 2</span>
        <h2>Checkout</h2>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form">
          <h3>Delivery details</h3>
          <label>
            Full name
            <input
              type="text"
              placeholder="e.g. Aisha Bello"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              placeholder="e.g. 080 1234 5678"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label>
            Delivery address
            <textarea
              rows={3}
              placeholder="House number, street, area, city"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </label>

          <div className="checkout-note">
            <span className="badge-soon">Coming soon</span>
            <p>Card &amp; bank payment via Flutterwave will be available here in the full version. For now, orders are confirmed via WhatsApp.</p>
          </div>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-item-list">
            {items.map((i) => (
              <div className="checkout-item" key={i.id}>
                <span>{i.name} <em>x{i.qty}</em></span>
                <span>₦{(i.price * i.qty).toLocaleString()}</span>
              </div>
            ))}
          </div>
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

          <button
            className="btn btn-block wa-checkout-btn"
            disabled={!isValid}
            onClick={handleOrder}
          >
            <svg viewBox="0 0 32 32" width="18" height="18" fill="#fff" aria-hidden="true">
              <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-2c1.9 1 4.1 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4C5.5 18 4.9 16.5 4.9 15c0-6.1 5-11 11.1-11s11.1 4.9 11.1 11-5 10.8-11.1 10.8zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-1-.4-2-1-2.9-1.9-.8-.8-1.4-1.7-1.8-2.6-.1-.3 0-.5.1-.7.2-.2.5-.5.7-.7.2-.2.3-.4.1-.7-.1-.3-.7-1.7-1-2.3-.2-.5-.5-.4-.7-.4-.2 0-.5 0-.7 0-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.3 3.6 5.7 4.9 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
            </svg>
            Confirm &amp; Order via WhatsApp
          </button>
          {!isValid && <p className="form-hint">Fill in your name, phone and address to continue.</p>}
        </div>
      </div>
    </div>
  );
}
