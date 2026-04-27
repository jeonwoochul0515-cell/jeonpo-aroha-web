import Reveal from './Reveal';
import { keywordReviews, quoteReviews } from '../data/reviews';
import { useI18n } from '../i18n/I18nContext';

const fmt = new Intl.NumberFormat('ko-KR');

export default function Review() {
  const { t, lang } = useI18n();
  return (
    <section className="review" id="review">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('review.kicker')}</span>
          <h2 className="h-section">{t('review.h1')}<br />{t('review.h2')}</h2>
          <p className="lead">{t('review.lead')}</p>
        </Reveal>

        <div className="review-grid">
          <Reveal className="keyword-list">
            {keywordReviews.map((kw) => (
              <div key={kw.tKey} className="kw">
                <div className="k-name">
                  <span className="em">{kw.emoji}</span> {t(kw.tKey)}
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
                <p>{q.text[lang]}</p>
                <footer>
                  <span className="who">{q.who}</span>
                  <span className="stars">
                    {'★'.repeat(q.stars)}
                    {'☆'.repeat(5 - q.stars)}
                  </span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
