import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: '소개' },
  { href: '#signature', label: '시그니처' },
  { href: '#menu', label: '메뉴' },
  { href: '#vibe', label: '분위기' },
  { href: '#review', label: '리뷰' },
  { href: '#visit', label: '오시는 길' },
];

export default function Header() {
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
          {navItems.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="https://catchtable.co.kr/jeonpoah"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn mobile-cta"
        >
          예약하기 <span className="arrow">→</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="메뉴 열기"
          onClick={() => setOpen(true)}
        >
          <span></span>
        </button>
      </header>

      <div className={`drawer${open ? ' open' : ''}`}>
        <button className="close" aria-label="닫기" onClick={() => setOpen(false)}>
          ✕
        </button>
        {navItems.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a
          href="https://catchtable.co.kr/jeonpoah"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          onClick={() => setOpen(false)}
        >
          예약하기 →
        </a>
      </div>
    </>
  );
}
