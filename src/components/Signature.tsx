import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

const cards = [
  {
    img: '/images/table-crab.jpg',
    ribbonKey: 'sig.card1.ribbon',
    nameKey: 'sig.card1.name',
    descKey: 'sig.card1.desc',
    tagKey: 'sig.card1.tag',
    price: '31,000',
  },
  {
    img: '/images/signature-crab-tang.jpg',
    ribbonKey: 'sig.card2.ribbon',
    nameKey: 'sig.card2.name',
    descKey: 'sig.card2.desc',
    tagKey: 'sig.card2.tag',
    price: '39,000',
  },
  {
    img: '/images/crab-cream-pasta.jpg',
    ribbonKey: 'sig.card3.ribbon',
    nameKey: 'sig.card3.name',
    descKey: 'sig.card3.desc',
    tagKey: 'sig.card3.tag',
    price: '33,000',
  },
];

export default function Signature() {
  const t = useT();
  return (
    <section className="signature" id="signature">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('sig.kicker')}</span>
          <h2 className="h-section">{t('sig.h1')}<br />{t('sig.h2')}</h2>
          <p className="lead">{t('sig.lead')}</p>
        </Reveal>

        <div className="crab-grid">
          {cards.map((c, i) => (
            <Reveal
              key={c.nameKey}
              delay={(i + 1) as 1 | 2 | 3 | 4}
              as="article"
              className="crab-card"
            >
              <div className="img-wrap">
                <img src={c.img} alt={t(c.nameKey)} loading="lazy" />
              </div>
              <div className="body">
                <span className="ribbon">{t(c.ribbonKey)}</span>
                <h3>{t(c.nameKey)}</h3>
                <p>{t(c.descKey)}</p>
                <div className="price">
                  <span className="v">
                    {c.price}<small>{t('menu.unit')}</small>
                  </span>
                  <span className="tag">{t(c.tagKey)}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: 60, textAlign: 'center' }}>
            <a
              href="#menu"
              className="btn-ghost"
              style={{ borderColor: 'rgba(245,235,219,.4)', color: 'var(--cream)' }}
            >
              {t('sig.viewAll')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
