import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { useT } from '../i18n/I18nContext';

/**
 * 인스타그램 임베드 섹션
 *
 * - `INSTAGRAM_HANDLE`을 매장 공식 인스타그램 핸들로 교체하세요. (현재는 가상 핸들)
 * - 실제 게시물을 임베드하려면 `EMBED_POSTS`에 게시물 URL을 채워 넣으세요.
 *   (인스타 게시물 우상단 메뉴 → "임베드" → 첫 번째 따옴표 안 URL을 그대로 붙여넣기)
 * - URL이 비어 있으면 정적 카드(현재 모드)로 폴백합니다.
 *
 * Instagram 공식 임베드 스크립트: https://www.instagram.com/embed.js
 */

const INSTAGRAM_HANDLE = 'jeonpo_aroha';
const HASHTAG = '%EC%A0%84%ED%8F%AC%EC%95%84%EB%A1%9C%ED%95%98'; // #전포아로하

const EMBED_POSTS: string[] = [
  // 예: 'https://www.instagram.com/p/XXXXXXXXX/',
  // 비어 있으면 아래 정적 카드가 표시됩니다.
];

const fallbackCards = [
  { img: '/images/crab-cream-pasta.jpg', cap: '게내장 크림파스타 한 컷.', likes: 1284 },
  { img: '/images/signature-crab-tang.jpg', cap: '오늘의 아로하 꽃게탕.', likes: 982 },
  { img: '/images/spicy-daechang.png', cap: '한우 대창 국물 닭발 신메뉴!', likes: 1721 },
];

export default function Instagram() {
  const t = useT();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!EMBED_POSTS.length) return;
    const id = 'instagram-embed-script';
    if (document.getElementById(id)) {
      // @ts-expect-error 인스타 글로벌 객체
      window.instgrm?.Embeds?.process?.();
      return;
    }
    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="insta" id="instagram">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('insta.kicker')}</span>
          <h2 className="h-section">
            {t('insta.h1')}
            <br />
            {t('insta.h2')}
          </h2>
          <p className="lead">{t('insta.lead')}</p>
        </Reveal>

        {EMBED_POSTS.length > 0 ? (
          <div className="insta-embed-grid" ref={wrapRef}>
            {EMBED_POSTS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ background: '#FFF', border: 0, margin: 0, minWidth: 280 }}
              />
            ))}
          </div>
        ) : (
          <div className="insta-grid">
            {fallbackCards.map((c, i) => (
              <Reveal
                key={c.img}
                as="article"
                className="insta-card"
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
              >
                <header className="insta-card-head">
                  <span className="ig-avatar" aria-hidden="true">A</span>
                  <div>
                    <div className="ig-handle">@{INSTAGRAM_HANDLE}</div>
                    <div className="ig-loc">전포 · 부산</div>
                  </div>
                  <span className="ig-dots" aria-hidden="true">···</span>
                </header>
                <div className="insta-card-img">
                  <img src={c.img} alt={c.cap} loading="lazy" />
                </div>
                <footer className="insta-card-foot">
                  <div className="ig-icons" aria-hidden="true">
                    <span>♡</span><span>💬</span><span>↗</span>
                  </div>
                  <div className="ig-likes">좋아요 {c.likes.toLocaleString('ko-KR')}개</div>
                  <p className="ig-cap">
                    <strong>@{INSTAGRAM_HANDLE}</strong> {c.cap}
                  </p>
                </footer>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal>
          <div className="insta-actions">
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('insta.follow')}
            </a>
            <a
              href={`https://www.instagram.com/explore/tags/${HASHTAG}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost btn-ghost-dark"
            >
              {t('insta.tag')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
