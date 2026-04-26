export interface KeywordReview {
  emoji: string;
  label: string;
  count: number;
}

export const keywordReviews: KeywordReview[] = [
  { emoji: '🍴', label: '음식이 맛있어요', count: 2748 },
  { emoji: '🥜', label: '기본 안주가 좋아요', count: 1272 },
  { emoji: '🎵', label: '음악이 좋아요', count: 1140 },
  { emoji: '🪴', label: '인테리어가 멋져요', count: 1071 },
  { emoji: '⭐', label: '특별한 메뉴가 있어요', count: 1046 },
];

export interface QuoteReview {
  text: string;
  who: string;
  stars: number;
}

export const quoteReviews: QuoteReview[] = [
  {
    text: '요즘 같은 날씨에 야장 감성 너무너무 좋고, 게친자들 무조건 여기로 꼭 오세요!! 불향 가득한 버터갈릭 꽃게구이는 살이 꽉 차서 정말 좋아요.',
    who: '육아일상과부동산정보',
    stars: 5,
  },
  {
    text: '꽃게 너무 부드럽고 촉촉하고 계속 들어가요. 게새밥은 이름은 당황스럽지만 맛은 더 당황스럽게 맛있어요. 새우 탱글, 달콤, 매콤 미쳤습니다.',
    who: '근두에요',
    stars: 5,
  },
  {
    text: '전포 올 때 한 번 와봤던 곳인데 파스타가 너무 맛있어서 재방문했어요. 웨이팅 있는 곳인데 비 와서 그런지 오늘은 바로 들어왔고, 그때 먹었던 파스타가 오늘도 맛있네요.',
    who: '루비루생쥐',
    stars: 4,
  },
  {
    text: '저번에 왔다가 대기 많아서 못 먹어서 이번에는 오픈하고 바로 왔어요. 지코바 치즈랑 같이 너무 맛있고, 슬러시 계속 먹을 수 있어서 최고. 야장 맛집!',
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
