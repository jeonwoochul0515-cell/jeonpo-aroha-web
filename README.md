# 전포 아로하 — JEONPO ALOHA

부산 전포 야장 게요리 주점 **전포 아로하**의 공식 홈페이지.
React + Vite + TypeScript로 작성되었으며 Cloudflare Pages에 배포됩니다.

> "아로하"는 휴양지에서 편안하게 음식과 음료를 즐기는 그 모습 그대로,
> 한식과 양식이 어우러진 도심 속 작은 섬이 되고 싶었습니다.

## Tech

- **Vite 5** + **React 18** + **TypeScript 5**
- 단일 페이지(랜딩) — Hero, About, Signature 게요리, Menu, Vibe, Review, Visit, CTA, Footer
- 글로벌 CSS (Pretendard / Cormorant Garamond / Noto Serif KR / Caveat)
- IntersectionObserver 기반 reveal 애니메이션

## 개발

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc -b && vite build → dist/
npm run preview      # build 미리보기
```

## 배포 (Cloudflare Pages)

```bash
npm run build
npm run deploy       # wrangler pages deploy dist --project-name=jeonpo-aroha
```

또는 GitHub 리포를 Cloudflare Pages에 연동해 push할 때마다 자동 배포되도록 구성합니다.

## 매장 정보

- 부산 부산진구 전포대로 225, 1층 아로하
- 일–목 17:00 — 03:00 / 금–토 17:00 — 04:00
- 010-7334-1272
- 캐치테이블 예약: <https://catchtable.co.kr/jeonpoah>
