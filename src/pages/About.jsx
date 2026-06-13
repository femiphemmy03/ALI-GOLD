import './About.css';

export default function About() {
  return (
    <div className="container section">
      <div className="section-head">
        <span className="eyebrow">About Us</span>
        <h2>The everyday store, elevated.</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            ALI-GOLD is a Owerri-based grocery and essentials delivery brand. We bring
            together everyday groceries, drinks, household items, food stuffs and
            wellbeing products — the things every home needs, sourced from trusted
            brands and delivered to your door.
          </p>
          <p>
            Our goal is simple: make restocking your home as easy as sending a WhatsApp
            message. Whether you shop on our website or chat with us directly, ordering
            should feel effortless — and a little bit gold-standard.
          </p>

          <div className="about-points">
            <div>
              <strong>🛒 Curated essentials</strong>
              <span>From Indomie to detergent — the brands you already trust.</span>
            </div>
            <div>
              <strong>💬 WhatsApp-first ordering</strong>
              <span>Order, track and pay, all from a chat you already use.</span>
            </div>
            <div>
              <strong>🛵 Reliable delivery</strong>
              <span>Partnered riders get your order to you, fast.</span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h3>Get in touch</h3>
          <div className="contact-row">
            <span>📞 Phone</span>
            <strong>08089371721</strong>
          </div>
          <div className="contact-row">
            <span>✉️ Email</span>
            <strong>hello@aligold.ng</strong>
          </div>
          <div className="contact-row">
            <span>📍 Location</span>
            <strong>Owerri, Imo State, Nigeria</strong>
          </div>

          <a
            href="https://wa.me/2348134808602?text=Hi%20ALI-GOLD%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="btn wa-checkout-btn btn-block"
          >
            Chat on WhatsApp
          </a>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Your name
              <input type="text" placeholder="Full name" />
            </label>
            <label>
              Message
              <textarea rows={3} placeholder="How can we help?" />
            </label>
            <button type="submit" className="btn btn-outline btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
