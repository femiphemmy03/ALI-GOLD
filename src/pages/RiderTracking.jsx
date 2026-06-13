import { Link } from 'react-router-dom';
import './RiderTracking.css';

export default function RiderTracking() {
  return (
    <div className="container section">
      <div className="section-head">
        <span className="badge-soon">Future preview</span>
        <h2>Watch your rider in real time</h2>
        <p className="vision-caption">
          In the full version, customers will see their rider's live location on a map,
          updated automatically as the order moves toward them.
        </p>
      </div>

      <div className="rider-layout">
        <div className="map-placeholder" aria-hidden="true">
          <div className="map-grid" />
          <div className="map-route" />
          <div className="map-pin map-pin-store">🏠<span>ALI-GOLD Store</span></div>
          <div className="map-pin map-pin-rider">🛵<span>Chuka</span></div>
          <div className="map-pin map-pin-customer">📍<span>You</span></div>
        </div>

        <div className="rider-card">
          <div className="rider-status">
            <span className="badge-soon">Out for delivery</span>
            <h3>Arriving in 12 mins</h3>
          </div>

          <div className="rider-profile">
            <div className="rider-avatar">CH</div>
            <div>
              <strong>Chuka Okafor</strong>
              <span>Delivery Rider · Bike</span>
            </div>
          </div>

          <div className="rider-meta">
            <div>
              <span>Order ID</span>
              <strong>AG-203481</strong>
            </div>
            <div>
              <span>Distance</span>
              <strong>2.4 km away</strong>
            </div>
            <div>
              <span>Vehicle</span>
              <strong>Bike · LAG-442-XY</strong>
            </div>
          </div>

          <button className="btn btn-ghost btn-block" disabled>📞 Call Rider (Coming Soon)</button>
        </div>
      </div>

      <div className="vision-actions">
        <Link to="/whatsapp-status" className="btn btn-ghost">← Order tracking preview</Link>
        <Link to="/shop" className="btn btn-outline">Back to shop</Link>
      </div>
    </div>
  );
}
