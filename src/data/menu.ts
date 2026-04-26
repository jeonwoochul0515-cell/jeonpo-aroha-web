export type MenuCategory = 'crab' | 'spicy' | 'pasta' | 'jeon' | 'dessert';

export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  cat: MenuCategory;
  pill?: 'SIGNATURE' | 'HOT' | 'FREE';
}

export const menu: MenuItem[] = [
  { name: '버터갈릭 꽃게구이', desc: '버터향 솔솔, 빠삭하게 구워 낸 한 접시.', price: 31000, cat: 'crab', pill: 'SIGNATURE' },
  { name: '여수식 돌산게장', desc: '맵·달의 감칠맛이 죽여주는 양념 꽃게장.', price: 30000, cat: 'crab', pill: 'HOT' },
  { name: '아로하 꽃게탕', desc: '꽃게 2판 + 수제비 사리, 시원한 국물 진국.', price: 39000, cat: 'crab', pill: 'SIGNATURE' },
  { name: '게새밥', desc: '새우장과 게내장 밥의 환상의 조합.', price: 30000, cat: 'crab' },

  { name: '매콤 대창 국물닭발', desc: '통통한 대창과 양념 잘 밴 닭발의 칼칼한 국물.', price: 30000, cat: 'spicy', pill: 'HOT' },
  { name: '치즈많이쭈삼', desc: '고기·주꾸미·치즈 가득, 마무리 볶음밥까지.', price: 35000, cat: 'spicy' },
  { name: '핵맛있닭 분모자 지코바', desc: '맛없없 조합. 콘치즈 분모자 지코바.', price: 28000, cat: 'spicy' },
  { name: '마라물떡오뎅탕', desc: '물떡·오뎅·곤약을 마라 버전으로. 입문자 OK.', price: 29000, cat: 'spicy' },

  { name: '게내장 크림파스타', desc: '녹진한 게내장 소스, 비리지 않은 풍미.', price: 33000, cat: 'pasta', pill: 'SIGNATURE' },
  { name: '명란갈비 크림파스타', desc: '부드러운 LA갈비와 명란 크림의 만남.', price: 28000, cat: 'pasta' },

  { name: '아로하 샤브샤브', desc: '담백한 국물과 버섯의 우러나는 깊은 맛.', price: 30000, cat: 'jeon' },
  { name: '바삭 통감자전', desc: '바삭하게 구운 감자전. 가볍게 한잔.', price: 18000, cat: 'jeon' },
  { name: '해물부추전', desc: '갓 부쳐 낸 해물 가득 부추전.', price: 19000, cat: 'jeon' },
  { name: '김치전', desc: '잘 익은 김치의 깊은 맛, 비 오는 날의 인사.', price: 17000, cat: 'jeon' },

  { name: '생크림 연유 토스트', desc: '달큰한 마무리, 도톰한 토스트 위 연유 생크림.', price: 13000, cat: 'dessert' },
  { name: '슬러시', desc: '매장 내 무료 제공. 식사 후 한 잔 챙기세요.', price: 0, cat: 'dessert', pill: 'FREE' },
];

export const categories: { key: MenuCategory | 'all'; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'crab', label: '꽃게 시그니처' },
  { key: 'spicy', label: '매콤 안주' },
  { key: 'pasta', label: '파스타' },
  { key: 'jeon', label: '전 · 사이드' },
  { key: 'dessert', label: '디저트' },
];
