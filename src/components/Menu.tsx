import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { menu, categories, type MenuCategory } from '../data/menu';
import { useI18n } from '../i18n/I18nContext';

const fmt = new Intl.NumberFormat('ko-KR');

export default function Menu() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<MenuCategory | 'all'>('all');

  const filtered = useMemo(
    () => (active === 'all' ? menu : menu.filter((m) => m.cat === active)),
    [active],
  );

  const half = Math.ceil(filtered.length / 2);
  const left = filtered.slice(0, half);
  const right = filtered.slice(half);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('menu.kicker')}</span>
          <h2 className="h-section">{t('menu.h1')}<br />{t('menu.h2')}</h2>
          <p className="lead">{t('menu.lead')}</p>
        </Reveal>

        <Reveal>
          <div className="menu-tabs">
            {categories.map((c) => (
              <button
                key={c.key}
                className={active === c.key ? 'active' : ''}
                onClick={() => setActive(c.key)}
              >
                {t(c.tKey)}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="menu-grid">
            <div>{left.map((m) => <Row key={m.id} item={m} lang={lang} t={t} />)}</div>
            <div>{right.map((m) => <Row key={m.id} item={m} lang={lang} t={t} />)}</div>
          </div>
        </Reveal>

        <div className="menu-foot">
          <p>{t('menu.foot.note')}</p>
          <a
            href="https://m.place.naver.com/restaurant/1387800087/menu/list"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('menu.foot.naver')}
          </a>
        </div>
      </div>
    </section>
  );
}

interface RowProps {
  item: (typeof menu)[number];
  lang: 'ko' | 'en' | 'ja';
  t: (k: string) => string;
}

function Row({ item, lang, t }: RowProps) {
  return (
    <div className="menu-row">
      <div>
        <div className="name">
          {item.name[lang]}{' '}
          {item.pill && (
            <span className={`pill${item.pill !== 'SIGNATURE' ? ' gold' : ''}`}>{item.pill}</span>
          )}
        </div>
        <div className="desc">{item.desc[lang]}</div>
      </div>
      <div className="price">
        {fmt.format(item.price)}
        <small>{t('menu.unit')}</small>
      </div>
    </div>
  );
}
