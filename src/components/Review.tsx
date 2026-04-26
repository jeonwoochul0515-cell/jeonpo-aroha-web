import Reveal from './Reveal';
import { keywordReviews, quoteReviews } from '../data/reviews';

const fmt = new Intl.NumberFormat('ko-KR');

export default function Review() {
  return (
    <section className="review" id="review">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Reviews · 손님이 남긴 이야기</span>
          <h2 className="h-section">
            3,000명이 넘는 분들의
            <br />
            같은 한 마디.
          </h2>
          <p className="lead">
            네이버 방문자·블로그 리뷰에 가장 많이 등장한 키워드와, 매장에 직접 다녀가신
            손님의 이야기를 모았습니다. (다이닝코드 다코점수 68점, 사용자 평점 5.0)
          </p>
        </Reveal>

        <div className="review-grid">
          <Reveal className="keyword-list">
            {keywordReviews.map((kw) => (
              <div key={kw.label} className="kw">
                <div className="k-name">
                  <span className="em">{kw.emoji}</span> {kw.label}
                </div>
                <div className="k-num">{fmt.format(kw.count)}</div>
              </div>
            ))}
          </Reveal>

          <div className="review-quotes">
            {quoteReviews.map((q, i) => (
              <Reveal
                key={q.who + i}
                as="blockquote"
                className="quote"
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
              >
                <p>{q.text}</p>
                <footer>
                  <span className="who">{q.who}</span>
                  <span className="stars">{'★'.repeat(q.stars)}{'☆'.repeat(5 - q.stars)}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
