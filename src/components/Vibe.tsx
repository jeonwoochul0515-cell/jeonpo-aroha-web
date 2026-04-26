import Reveal from './Reveal';

const photos = [
  { cls: 'v1', src: '/images/spicy-daechang.png', caption: '국물닭발', alt: '매콤 대창 국물닭발' },
  { cls: 'v2', src: '/images/hero-spread.jpg', caption: 'The Aroha Table', alt: '아로하 한 상' },
  { cls: 'v3', src: '/images/crab-jang.jpg', caption: '여수식 게장', alt: '여수식 돌산게장' },
  { cls: 'v4', src: '/images/night-noodle.jpg', caption: '새벽 3시', alt: '밤의 한 상' },
  { cls: 'v5', src: '/images/soju-spread.jpg', caption: '술 한 잔', alt: '술과 함께' },
];

export default function Vibe() {
  return (
    <section className="vibe" id="vibe">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Atmosphere · 벚꽃 핀 야장</span>
          <h2 className="h-section">
            개방감 가득한 야장,
            <br />매 정각 내리는 한 줌의 설렘.
          </h2>
          <p className="lead">
            전체 폴딩 도어를 활짝 열어 트인 공간으로. 봄에는 벚꽃, 겨울에는 매 정각마다
            내리는 눈으로 잠시 휴양지에 데려다 드립니다.
          </p>
        </Reveal>

        <div className="vibe-grid">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              as="figure"
              className={p.cls}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
