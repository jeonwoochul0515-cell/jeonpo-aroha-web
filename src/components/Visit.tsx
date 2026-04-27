import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

const rows = [
  { lblKey: 'visit.row.address', valKey: 'visit.row.address.val', subKey: 'visit.row.address.sub', full: true },
  { lblKey: 'visit.row.hours', valKey: 'visit.row.hours.val' },
  { lblKey: 'visit.row.capacity', valKey: 'visit.row.capacity.val' },
  { lblKey: 'visit.row.facilities', valKey: 'visit.row.facilities.val' },
  { lblKey: 'visit.row.contact', valKey: 'visit.row.contact.val' },
];

export default function Visit() {
  const t = useT();
  return (
    <section className="visit" id="visit">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('visit.kicker')}</span>
          <h2 className="h-section">{t('visit.h1')}<br />{t('visit.h2')}</h2>
          <p className="lead">{t('visit.lead')}</p>
        </Reveal>

        <div className="visit-grid">
          <Reveal className="info-card">
            {rows.map((r) => (
              <div key={r.lblKey} className={`row${r.full ? ' full' : ''}`}>
                <div className="lbl">{t(r.lblKey)}</div>
                <div className="val" style={{ whiteSpace: 'pre-line' }}>{t(r.valKey)}</div>
                {r.subKey && <div className="sub">{t(r.subKey)}</div>}
              </div>
            ))}

            <div className="visit-actions">
              <a
                href="https://catchtable.co.kr/jeonpoah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('visit.btn.catch')}
              </a>
              <a
                href="https://map.naver.com/p/search/%EC%A0%84%ED%8F%AC%20%EC%95%84%EB%A1%9C%ED%95%98"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {t('visit.btn.map')}
              </a>
              <a href="tel:010-7334-1272" className="btn-ghost">
                {t('visit.btn.tel')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={1} as="aside" className="visit-side">
            <h3>{t('visit.side.h')}</h3>
            <ul>
              <li>{t('visit.side.li1')}</li>
              <li>{t('visit.side.li2')}</li>
              <li>{t('visit.side.li3')}</li>
              <li>{t('visit.side.li4')}</li>
              <li>{t('visit.side.li5')}</li>
              <li>{t('visit.side.li6')}</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
