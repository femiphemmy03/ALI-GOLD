import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="page">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
