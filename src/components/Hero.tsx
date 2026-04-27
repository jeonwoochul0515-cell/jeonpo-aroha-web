import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

const marqueeItems = [
  '버터갈릭꽃게구이',
  '여수식 돌산게장',
  '게내장 크림파스타',
  '매콤 대창 국물닭발',
  '치즈많이쭈삼',
  '아로하 꽃게탕',
  '핵맛있닭 분모자 지코바',
  '마라물떡오뎅탕',
];

export default function Hero() {
  const t = useT();
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal className="hero-text">
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>
            <em>{t('hero.h1.italic')}</em>
            <span className="kr-line">
              {t('hero.h1.kr1')}
              <br />
              {t('hero.h1.kr2')}
            </span>
          </h1>
          <p className="lead">{t('hero.lead')}</p>

          <div className="hero-meta">
            <span><i className="icon"></i> {t('hero.meta.address')}</span>
            <span><i className="icon"></i> {t('hero.meta.hours')}</span>
            <span><i className="icon"></i> {t('hero.meta.transit')}</span>
          </div>

          <div className="hero-actions">
            <a
              href="https://catchtable.co.kr/jeonpoah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('hero.cta.reserve')} <span className="arrow">→</span>
            </a>
            <a href="#menu" className="btn-ghost">{t('hero.cta.menu')}</a>
          </div>
        </Reveal>

        <Reveal delay={2} className="hero-card">
          <div className="badge"><span className="pulse"></span> {t('hero.badge')}</div>
          <img src="/images/signature-crab-tang.jpg" alt={t('hero.card.t2')} />
          <div className="caption">
            <div className="t1">{t('hero.card.t1')}</div>
            <div className="t2">{t('hero.card.t2')}</div>
          </div>
        </Reveal>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
