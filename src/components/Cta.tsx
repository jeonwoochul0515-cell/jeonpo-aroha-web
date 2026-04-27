import { useT } from '../i18n/I18nContext';

export default function Cta() {
  const t = useT();
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">{t('cta.eyebrow')}</span>
        <h2>
          <em>{t('cta.h.it1')}</em> <em>{t('cta.h.it2')}</em>
          <span className="kr">{t('cta.h.kr')}</span>
        </h2>
        <p>{t('cta.p')}</p>
        <div className="cta-actions">
          <a
            href="https://catchtable.co.kr/jeonpoah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('cta.btn.reserve')}
          </a>
          <a href="#menu" className="btn-ghost">{t('cta.btn.menu')}</a>
        </div>
      </div>
    </section>
  );
}
