import Reveal from './Reveal';

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
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal className="hero-text">
          <span className="eyebrow">A L O H A · 도심 속 휴양지로의 초대</span>
          <h1>
            <em>Aloha,</em>
            <span className="kr-line">
              전포 한가운데
              <br />
              야장 술집의 시간.
            </span>
          </h1>
          <p className="lead">
            한식과 양식이 어우러진 휴양지 컨셉의 도심 속 작은 섬. 시원한 야장에서
            게즙 가득한 꽃게 요리와 한 잔의 술로 오늘의 피로를 흘려 보내세요.
          </p>

          <div className="hero-meta">
            <span>
              <i className="icon"></i> 부산 부산진구 전포대로 225 1F
            </span>
            <span>
              <i className="icon"></i> 일–목 17:00 / 금–토 17:00 — 익일 04:00
            </span>
            <span>
              <i className="icon"></i> 전포역 7번 출구 · 도보 4분
            </span>
          </div>

          <div className="hero-actions">
            <a
              href="https://catchtable.co.kr/jeonpoah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              캐치테이블 예약 <span className="arrow">→</span>
            </a>
            <a href="#menu" className="btn-ghost">
              메뉴 둘러보기
            </a>
          </div>
        </Reveal>

        <Reveal delay={2} className="hero-card">
          <div className="badge">
            <span className="pulse"></span> NOW OPEN
          </div>
          <img src="/images/signature-crab-tang.jpg" alt="아로하 시그니처 꽃게탕" />
          <div className="caption">
            <div className="t1">today's signature</div>
            <div className="t2">아로하 꽃게탕</div>
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
