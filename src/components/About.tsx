import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

export default function About() {
  const t = useT();
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="kicker">{t('about.kicker')}</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            {t('about.h1')}<br />{t('about.h2')}
          </h2>

          <p className="first">{t('about.first')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>

          <div className="about-stats">
            <div className="stat">
              <div className="n">3,043</div>
              <div className="l">{t('about.stat1')}</div>
            </div>
            <div className="stat">
              <div className="n">658</div>
              <div className="l">{t('about.stat2')}</div>
            </div>
            <div className="stat">
              <div className="n">
                4 — 80
                <span style={{ fontSize: '1rem', color: 'rgba(27,20,16,.5)' }}>名</span>
              </div>
              <div className="l">{t('about.stat3')}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2} className="about-photo">
          <img src="/images/soju-spread.jpg" alt="Aroha table" />
          <div className="stamp">
            <span>JEONPO<br />ALOHA<br />· 2024 ·</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
