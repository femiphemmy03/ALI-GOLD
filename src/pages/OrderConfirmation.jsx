import { Link, useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

export default function OrderConfirmation() {
  const { state } = useLocation();
  const orderId = state?.orderId || 'AG-000000';
  const total = state?.total || 0;
  const name = state?.name || 'there';

  return (
    <div className="container section confirmation">
      <div className="confirm-icon">✅</div>
      <h2>Thank you, {name}!</h2>
      <p className="confirm-sub">
        Your order has been sent to ALI-GOLD via WhatsApp. Our team will confirm
        availability and delivery time with you shortly.
      </p>

      <div className="confirm-card">
        <div className="confirm-row">
          <span>Order ID</span>
          <strong>{orderId}</strong>
        </div>
        <div className="confirm-row">
          <span>Order total</span>
          <strong>₦{total.toLocaleString()}</strong>
        </div>
        <div className="confirm-row">
          <span>Estimated delivery</span>
          <strong>45–60 mins</strong>
        </div>
      </div>

      <div className="confirm-actions">
        <Link to="/whatsapp-status" className="btn btn-primary">Track Order</Link>
        <Link to="/shop" className="btn btn-outline">Continue Shopping</Link>
      </div>

      <p className="confirm-footnote">
        <span className="badge-soon">Coming soon</span> Live order status &amp; payment
        notifications directly inside WhatsApp.
      </p>
    </div>
  );
}
