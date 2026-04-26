import Reveal from './Reveal';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="kicker">our story · 휴양지의 식탁</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            도심 한복판에서
            <br />
            휴양지의 한 끼를.
          </h2>

          <p className="first">
            "아로하"는 휴양지에서 편안하게 음식과 음료를 즐기는 그 모습 그대로,
            <br />
            한식과 양식이 어우러진 도심 속 작은 섬이 되고 싶었습니다.
          </p>

          <p>
            전포 한복판 폴딩 도어를 활짝 연 야장, 서해안 꽃게의 수율 가득한 게즙,
            매 정각 내리는 슬러시 한 잔. 여행지에 와 있는 듯한 한 시간을 위해, 매일
            우리는 새로 끓이고 새로 굽습니다.
          </p>

          <p>
            늦은 오후부터 새벽 3시(주말 4시)까지, 누구든 가볍게 자리 잡아도 좋도록
            넓은 테이블과 분리된 화장실, 반려동물 동반, 단체석까지 준비해 두었습니다.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="n">3,043</div>
              <div className="l">방문자 리뷰</div>
            </div>
            <div className="stat">
              <div className="n">658</div>
              <div className="l">블로그 리뷰</div>
            </div>
            <div className="stat">
              <div className="n">
                4 — 80
                <span style={{ fontSize: '1rem', color: 'rgba(27,20,16,.5)' }}>名</span>
              </div>
              <div className="l">단체 예약</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2} className="about-photo">
          <img src="/images/soju-spread.jpg" alt="아로하의 식탁 한 상" />
          <div className="stamp">
            <span>
              JEONPO
              <br />
              ALOHA
              <br />· 2024 ·
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
