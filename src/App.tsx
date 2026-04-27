import { I18nProvider } from './i18n/I18nContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Signature from './components/Signature';
import Menu from './components/Menu';
import Vibe from './components/Vibe';
import Instagram from './components/Instagram';
import Review from './components/Review';
import Visit from './components/Visit';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Promo from './components/Promo';

export default function App() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Signature />
        <Menu />
        <Vibe />
        <Instagram />
        <Review />
        <Visit />
        <Cta />
      </main>
      <Footer />
      <Promo />
    </I18nProvider>
  );
}
