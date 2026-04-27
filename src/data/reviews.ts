import type { Lang } from '../i18n/messages';

export interface KeywordReview {
  emoji: string;
  tKey: string;
  count: number;
}

export const keywordReviews: KeywordReview[] = [
  { emoji: '🍴', tKey: 'review.kw1', count: 2748 },
  { emoji: '🥜', tKey: 'review.kw2', count: 1272 },
  { emoji: '🎵', tKey: 'review.kw3', count: 1140 },
  { emoji: '🪴', tKey: 'review.kw4', count: 1071 },
  { emoji: '⭐', tKey: 'review.kw5', count: 1046 },
];

type Localized = Record<Lang, string>;

export interface QuoteReview {
  text: Localized;
  who: string;
  stars: number;
}

export const quoteReviews: QuoteReview[] = [
  {
    text: {
      ko: '요즘 같은 날씨에 야장 감성 너무너무 좋고, 게친자들 무조건 여기로 꼭 오세요!! 불향 가득한 버터갈릭 꽃게구이는 살이 꽉 차서 정말 좋아요.',
      en: "The patio mood is unmatched in this weather. Crab lovers, this is the place — the smoke-charred butter garlic crab is packed with meat. So good!",
      ja: 'こんな季節のテラスは最高。蟹好きは絶対ここ。スモーキーなバターガーリック蟹は身がぎっしりで本当に美味しい！',
    },
    who: '육아일상과부동산정보',
    stars: 5,
  },
  {
    text: {
      ko: '꽃게 너무 부드럽고 촉촉하고 계속 들어가요. 게새밥은 이름은 당황스럽지만 맛은 더 당황스럽게 맛있어요. 새우 탱글, 달콤, 매콤 미쳤습니다.',
      en: 'The crab is tender, juicy, and disappears in a flash. The crab-and-shrimp rice has a name that startles, but the taste startles more. Plump shrimp, sweet, spicy — wild.',
      ja: '蟹は柔らかくジューシーで、ついどんどん食べてしまう。「蟹海老ご飯」は名前にびっくり、味にもっとびっくり。プリッとした海老が甘辛で最高。',
    },
    who: '근두에요',
    stars: 5,
  },
  {
    text: {
      ko: '전포 올 때 한 번 와봤던 곳인데 파스타가 너무 맛있어서 재방문했어요. 웨이팅 있는 곳인데 비 와서 그런지 오늘은 바로 들어왔고, 그때 먹었던 파스타가 오늘도 맛있네요.',
      en: 'Came back for the pasta after one visit — usually a wait, but the rain helped tonight. Just as good as I remembered.',
      ja: '一度訪れてパスタが忘れられず再訪。普段は待ちますが、今日は雨のおかげですぐ入れました。あのパスタ、相変わらず美味しい。',
    },
    who: '루비루생쥐',
    stars: 4,
  },
  {
    text: {
      ko: '저번에 왔다가 대기 많아서 못 먹어서 이번에는 오픈하고 바로 왔어요. 지코바 치즈랑 같이 너무 맛있고, 슬러시 계속 먹을 수 있어서 최고. 야장 맛집!',
      en: "Last time I gave up on the wait, so this time I came right at opening. The Jicoba with cheese is so good, and the free slushies are unlimited — top-tier patio spot!",
      ja: '前回は行列で諦めたので、今回はオープン直後に。ジコバとチーズが美味しすぎて、スラッシュも飲み放題で最高。テラスの名店!',
    },
    who: '영2',
    stars: 5,
  },
];

export const press = [
  { name: '다이닝코드', score: '다코점수 68점' },
  { name: '식신', score: '맛집 등록' },
  { name: '디너의여왕', score: '리뷰 등록' },
  { name: '뉴스앤피플', score: '매체 소개' },
  { name: '캐치테이블', score: '예약 운영' },
];
