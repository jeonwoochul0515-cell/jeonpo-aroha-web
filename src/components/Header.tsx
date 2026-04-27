import { useEffect, useState } from 'react';
import { useT } from '../i18n/I18nContext';
import LangSwitcher from './LangSwitcher';

const navKeys = [
  { href: '#about', tKey: 'nav.about' },
  { href: '#signature', tKey: 'nav.signature' },
  { href: '#menu', tKey: 'nav.menu' },
  { href: '#vibe', tKey: 'nav.vibe' },
  { href: '#review', tKey: 'nav.review' },
  { href: '#visit', tKey: 'nav.visit' },
];

export default function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#top" className="brand">
          <span className="dot"></span>
          JEONPO ALOHA
        </a>
        <nav className="nav">
          {navKeys.map((n) => (
            <a key={n.href} href={n.href}>
              {t(n.tKey)}
            </a>
          ))}
        </nav>
        <div className="topbar-right">
          <LangSwitcher />
          <a
            href="https://catchtable.co.kr/jeonpoah"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn mobile-cta"
          >
            {t('nav.reserve')} <span className="arrow">→</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={t('nav.menuOpen')}
            onClick={() => setOpen(true)}
          >
            <span></span>
          </button>
        </div>
      </header>

      <div className={`drawer${open ? ' open' : ''}`}>
        <button className="close" aria-label={t('nav.close')} onClick={() => setOpen(false)}>
          ✕
        </button>
        {navKeys.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {t(n.tKey)}
          </a>
        ))}
        <div style={{ marginTop: 8 }}><LangSwitcher /></div>
        <a
          href="https://catchtable.co.kr/jeonpoah"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          onClick={() => setOpen(false)}
        >
          {t('nav.reserve')} →
        </a>
      </div>
    </>
  );
}
