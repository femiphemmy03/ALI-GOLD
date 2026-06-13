import './WhatsAppButton.css';

const PHONE = '2348134808602';

export default function WhatsAppButton({ message }) {
  const text = encodeURIComponent(
    message || "Hi ALI-GOLD! I'd like to ask about your products and delivery."
  );
  const href = `https://wa.me/${PHONE}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with ALI-GOLD on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="#fff" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-2c1.9 1 4.1 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4C5.5 18 4.9 16.5 4.9 15c0-6.1 5-11 11.1-11s11.1 4.9 11.1 11-5 10.8-11.1 10.8zm6.1-8.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.1-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-1-.4-2-1-2.9-1.9-.8-.8-1.4-1.7-1.8-2.6-.1-.3 0-.5.1-.7.2-.2.5-.5.7-.7.2-.2.3-.4.1-.7-.1-.3-.7-1.7-1-2.3-.2-.5-.5-.4-.7-.4-.2 0-.5 0-.7 0-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.3 3.6 5.7 4.9 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
      </svg>
    </a>
  );
}
