import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { menu, categories, type MenuCategory } from '../data/menu';

const fmt = new Intl.NumberFormat('ko-KR');

export default function Menu() {
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
          <span className="kicker">Menu · 한식과 양식의 조화</span>
          <h2 className="h-section">
            술이 부르는 안주들,
            <br />
            모두 정성으로 끓여 냅니다.
          </h2>
          <p className="lead">
            테이블마다 비치된 태블릿(티오더)으로 편하게 주문하세요. 가격은 부가세
            포함이며, 시즌에 따라 일부 변동될 수 있습니다.
          </p>
        </Reveal>

        <Reveal>
          <div className="menu-tabs">
            {categories.map((c) => (
              <button
                key={c.key}
                className={active === c.key ? 'active' : ''}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="menu-grid">
            <div>
              {left.map((m) => (
                <Row key={m.name} {...m} />
              ))}
            </div>
            <div>
              {right.map((m) => (
                <Row key={m.name} {...m} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="menu-foot">
          <p>* 메뉴 항목과 가격은 매장 사정에 따라 변동될 수 있습니다.</p>
          <a
            href="https://m.place.naver.com/restaurant/1387800087/menu/list"
            target="_blank"
            rel="noopener noreferrer"
          >
            네이버 메뉴판 이미지로 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

interface RowProps {
  name: string;
  desc: string;
  price: number;
  pill?: 'SIGNATURE' | 'HOT' | 'FREE';
}

function Row({ name, desc, price, pill }: RowProps) {
  return (
    <div className="menu-row">
      <div>
        <div className="name">
          {name}{' '}
          {pill && (
            <span className={`pill${pill !== 'SIGNATURE' ? ' gold' : ''}`}>{pill}</span>
          )}
        </div>
        <div className="desc">{desc}</div>
      </div>
      <div className="price">
        {fmt.format(price)}
        <small>원</small>
      </div>
    </div>
  );
}
