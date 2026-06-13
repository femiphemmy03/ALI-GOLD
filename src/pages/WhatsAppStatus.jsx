import { Link } from 'react-router-dom';
import './WhatsAppStatus.css';

const steps = [
  { key: 'confirmed', label: 'Order Confirmed', time: '10:02 AM' },
  { key: 'preparing', label: 'Preparing Your Order', time: '10:08 AM' },
  { key: 'delivery', label: 'Out for Delivery', time: '10:24 AM' },
  { key: 'delivered', label: 'Delivered', time: 'Pending' },
];

const currentStepIndex = 2; // "Out for Delivery"

export default function WhatsAppStatus() {
  return (
    <div className="container section">
      <div className="section-head">
        <span className="badge-soon">Future preview</span>
        <h2>Order tracking, right inside WhatsApp</h2>
        <p className="vision-caption">
          Once connected, customers will receive live updates like this directly in
          their WhatsApp chat — no app download needed.
        </p>
      </div>

      <div className="wa-mock">
        <div className="wa-mock-header">
          <span className="wa-back">←</span>
          <div className="wa-mock-avatar">AG</div>
          <div className="wa-mock-titles">
            <strong>ALI-GOLD Bot</strong>
            <span>online</span>
          </div>
          <span className="wa-mock-icons">📞 ⋮</span>
        </div>

        <div className="wa-mock-body">
          <div className="wa-bubble received">
            Hi Tola! Your order <strong>#AG-203481</strong> has been confirmed. We'll keep you
            posted here every step of the way. 🛍️
          </div>

          <div className="wa-bubble received">
            <strong>Order summary</strong>
            <ul>
              <li>Indomie Noodles (70g) x4 — ₦400</li>
              <li>Peak Milk (170g) x2 — ₦900</li>
              <li>Dangote Salt (500g) x1 — ₦150</li>
              <li>Delivery fee — ₦500</li>
            </ul>
            <div className="wa-total">Total: ₦1,950</div>
          </div>

          <div className="wa-status-card">
            <h4>Order Status</h4>
            <div className="status-stepper">
              {steps.map((step, idx) => (
                <div
                  key={step.key}
                  className={`status-step ${idx < currentStepIndex ? 'done' : ''} ${idx === currentStepIndex ? 'current' : ''}`}
                >
                  <span className="step-dot" />
                  <div className="step-text">
                    <strong>{step.label}</strong>
                    <span>{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wa-bubble received">
            🛵 Your rider <strong>Chuka</strong> is on the way — estimated arrival in <strong>12 mins</strong>.
          </div>

          <div className="wa-bubble sent">
            Thank you! Can't wait 😊
          </div>
        </div>

        <div className="wa-mock-input">
          <span>Type a message</span>
          <span className="wa-send">➤</span>
        </div>
      </div>

      <div className="vision-actions">
        <Link to="/rider-tracking" className="btn btn-ghost">Preview rider tracking →</Link>
        <Link to="/shop" className="btn btn-outline">Back to shop</Link>
      </div>
    </div>
  );
}
