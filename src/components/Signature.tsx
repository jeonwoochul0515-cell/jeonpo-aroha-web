import Reveal from './Reveal';

interface CrabCard {
  img: string;
  alt: string;
  ribbon: string;
  name: string;
  desc: string;
  price: string;
  tag: string;
}

const cards: CrabCard[] = [
  {
    img: '/images/table-crab.jpg',
    alt: '버터갈릭 꽃게구이',
    ribbon: '★ Best Seller',
    name: '버터갈릭 꽃게구이',
    desc: '불향 가득 입혀진 꽃게 위로 버터와 갈릭 소스를 듬뿍. 한 입에 꽃게즙이 팡 터지는 프리미엄 메뉴.',
    price: '31,000',
    tag: 'Crab · Butter',
  },
  {
    img: '/images/signature-crab-tang.jpg',
    alt: '아로하 꽃게탕',
    ribbon: '★ Aroha Special',
    name: '아로하 꽃게탕',
    desc: '꽃게 두 판이 통째로. 시원한 국물에 수제비 사리까지 더하면 진국. 술 한잔이 절로 부르는 그 맛.',
    price: '39,000',
    tag: 'Hot Pot',
  },
  {
    img: '/images/crab-cream-pasta.jpg',
    alt: '게내장 크림파스타',
    ribbon: "★ Lady's Pick",
    name: '게내장 크림파스타',
    desc: '녹진한 게내장 소스에 비리지 않은 풍미. 여심 저격 완료, 아로하의 시그니처 파스타.',
    price: '33,000',
    tag: 'Pasta',
  },
];

export default function Signature() {
  return (
    <section className="signature" id="signature">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Signature · 아로하의 게요리</span>
          <h2 className="h-section">
            서해안 꽃게,
            <br />
            수율로만 골라낸 한 접시.
          </h2>
          <p className="lead">
            국내산 서해안 꽃게 중에서도 살이 가득 찬 수율 좋은 녀석들만 골라,
            아로하만의 방식으로 굽고 끓이고 비빕니다. 게친자라면 절대 놓칠 수 없는
            세 가지.
          </p>
        </Reveal>

        <div className="crab-grid">
          {cards.map((c, i) => (
            <Reveal
              key={c.name}
              delay={(i + 1) as 1 | 2 | 3 | 4}
              as="article"
              className="crab-card"
            >
              <div className="img-wrap">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="body">
                <span className="ribbon">{c.ribbon}</span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <div className="price">
                  <span className="v">
                    {c.price}
                    <small>원</small>
                  </span>
                  <span className="tag">{c.tag}</span>
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
              전체 메뉴 보기 →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
