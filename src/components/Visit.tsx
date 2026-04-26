import Reveal from './Reveal';

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Visit · 오시는 길</span>
          <h2 className="h-section">
            전포역 7번 출구에서
            <br />
            도보 약 4분, 전포대로 위.
          </h2>
          <p className="lead">
            예약 없이도 좋지만, 주말과 야장은 캐치테이블 예약이 가장 편합니다. 4인부터
            80인까지 단체 모임도 환영해요.
          </p>
        </Reveal>

        <div className="visit-grid">
          <Reveal className="info-card">
            <div className="row full">
              <div className="lbl">— Address</div>
              <div className="val">부산광역시 부산진구 전포대로 225, 1층 아로하</div>
              <div className="sub">전포역 7번 출구 → 전포사거리 방향 약 250m</div>
            </div>
            <div className="row">
              <div className="lbl">— Hours</div>
              <div className="val">
                일–목 17:00 — 03:00
                <br />
                금–토 17:00 — 04:00
              </div>
            </div>
            <div className="row">
              <div className="lbl">— Capacity</div>
              <div className="val">
                4인 ~ 80인 예약 가능
                <br />
                단체 모임 환영
              </div>
            </div>
            <div className="row">
              <div className="lbl">— Facilities</div>
              <div className="val">
                단체석 · 반려동물 동반
                <br />
                남/녀 화장실 분리 · 무선 인터넷
              </div>
            </div>
            <div className="row">
              <div className="lbl">— Contact</div>
              <div className="val">
                010-7334-1272
                <br />
                캐치테이블 / 네이버 예약
              </div>
            </div>

            <div className="visit-actions">
              <a
                href="https://catchtable.co.kr/jeonpoah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                캐치테이블 예약 →
              </a>
              <a
                href="https://map.naver.com/p/search/%EC%A0%84%ED%8F%AC%20%EC%95%84%EB%A1%9C%ED%95%98"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                네이버 지도 보기
              </a>
              <a href="tel:010-7334-1272" className="btn-ghost">
                전화로 문의
              </a>
            </div>
          </Reveal>

          <Reveal delay={1} as="aside" className="visit-side">
            <h3>방문 전 알아두세요</h3>
            <ul>
              <li>주말 및 공휴일은 캐치테이블 웨이팅이 길 수 있어요. 가급적 예약을 권장드립니다.</li>
              <li>봄에는 야장 폴딩 전체 개방, 벚꽃과 함께 즐기세요.</li>
              <li>매 정각마다 매장 내에서 슬러시 한 잔이 무료로 제공됩니다.</li>
              <li>리뷰 작성 시 감자튀김 또는 샤베트 쿠폰을 드려요. (조건 충족 시)</li>
              <li>대형 스크린이 있어 시즌에 따라 야구·축구 응원전이 가능합니다.</li>
              <li>반려동물 동반 가능 — 단, 안전을 위해 케이지 또는 리드줄 부탁드립니다.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
