export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              JEONPO ALOHA
              <span className="sub">— 도심 속 휴양지</span>
            </div>
            <p>
              한식과 양식이 어우러진 휴양지 컨셉의 도심 요리주점. 새벽 3시(주말 4시)까지,
              누군가의 하루의 끝에 함께합니다.
            </p>
          </div>

          <div className="foot-col">
            <h4>찾아오는 길</h4>
            <ul>
              <li>부산 부산진구 전포대로 225</li>
              <li>1층 아로하</li>
              <li>전포역 7번 출구 250m</li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>운영 시간</h4>
            <ul>
              <li>일–목 17:00 — 03:00</li>
              <li>금–토 17:00 — 04:00</li>
              <li>4인 ~ 80인 예약</li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>예약 · SNS</h4>
            <ul>
              <li>
                <a
                  href="https://catchtable.co.kr/jeonpoah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  캐치테이블 예약
                </a>
              </li>
              <li>
                <a
                  href="https://map.naver.com/p/search/%EC%A0%84%ED%8F%AC%20%EC%95%84%EB%A1%9C%ED%95%98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  네이버 플레이스
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/explore/tags/%EC%A0%84%ED%8F%AC%EC%95%84%EB%A1%9C%ED%95%98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="tel:010-7334-1272">010-7334-1272</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 JEONPO ALOHA · ALL RIGHTS RESERVED.</span>
          <span>Crafted with 🌺 for the late nights of 전포.</span>
        </div>
      </div>
    </footer>
  );
}
