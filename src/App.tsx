import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Signature from './components/Signature';
import Menu from './components/Menu';
import Vibe from './components/Vibe';
import Review from './components/Review';
import Visit from './components/Visit';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Signature />
        <Menu />
        <Vibe />
        <Review />
        <Visit />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
