export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">A L O H A · See you tonight</span>
        <h2>
          <em>The night is</em> <em>still young.</em>
          <span className="kr">오늘 저녁, 전포 아로하에서 만나요.</span>
        </h2>
        <p>
          네 명이든 여덟 명이든, 비 오는 날의 한 잔이든 벚꽃 핀 야장이든.
          <br />
          아로하의 자리는 언제나 비워두지 않겠습니다.
        </p>
        <div className="cta-actions">
          <a
            href="https://catchtable.co.kr/jeonpoah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            예약하러 가기 →
          </a>
          <a href="#menu" className="btn-ghost">
            메뉴 다시 보기
          </a>
        </div>
      </div>
    </section>
  );
}
