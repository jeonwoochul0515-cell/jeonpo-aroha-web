import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

const photos = [
  { cls: 'v1', src: '/images/spicy-daechang.png', capKey: 'vibe.cap1' },
  { cls: 'v2', src: '/images/hero-spread.jpg', capKey: 'vibe.cap2' },
  { cls: 'v3', src: '/images/crab-jang.jpg', capKey: 'vibe.cap3' },
  { cls: 'v4', src: '/images/night-noodle.jpg', capKey: 'vibe.cap4' },
  { cls: 'v5', src: '/images/soju-spread.jpg', capKey: 'vibe.cap5' },
];

export default function Vibe() {
  const t = useT();
  return (
    <section className="vibe" id="vibe">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('vibe.kicker')}</span>
          <h2 className="h-section">{t('vibe.h1')}<br />{t('vibe.h2')}</h2>
          <p className="lead">{t('vibe.lead')}</p>
        </Reveal>

        <div className="vibe-grid">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              as="figure"
              className={p.cls}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
            >
              <img src={p.src} alt={t(p.capKey)} loading="lazy" />
              <figcaption>{t(p.capKey)}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
