import type { Lang } from '../i18n/messages';

export type MenuCategory = 'crab' | 'spicy' | 'pasta' | 'jeon' | 'dessert';

type Localized = Record<Lang, string>;

export interface MenuItem {
  id: string;
  name: Localized;
  desc: Localized;
  price: number;
  cat: MenuCategory;
  pill?: 'SIGNATURE' | 'HOT' | 'FREE';
}

export const menu: MenuItem[] = [
  {
    id: 'butter-garlic',
    name: { ko: '버터갈릭 꽃게구이', en: 'Butter Garlic Crab', ja: 'バターガーリック蟹焼き' },
    desc: {
      ko: '버터향 솔솔, 빠삭하게 구워 낸 한 접시.',
      en: 'Crisp-grilled crab cloaked in butter and garlic.',
      ja: 'バターの香り、こんがり焼き上げた一皿。',
    },
    price: 31000, cat: 'crab', pill: 'SIGNATURE',
  },
  {
    id: 'yeosu-jang',
    name: { ko: '여수식 돌산게장', en: 'Yeosu-style Soy Crab', ja: '麗水式 蟹醤油漬け' },
    desc: {
      ko: '맵·달의 감칠맛이 죽여주는 양념 꽃게장.',
      en: 'Sweet-and-spicy seasoned blue crab from Yeosu.',
      ja: '甘辛の旨味が際立つ、麗水式の蟹醤油漬け。',
    },
    price: 30000, cat: 'crab', pill: 'HOT',
  },
  {
    id: 'crab-tang',
    name: { ko: '아로하 꽃게탕', en: 'Aroha Crab Hot Pot', ja: 'アロハ蟹チゲ' },
    desc: {
      ko: '꽃게 2판 + 수제비 사리, 시원한 국물 진국.',
      en: 'Two whole crabs in a clear briny broth — add hand-torn dough.',
      ja: '渡り蟹2尾と手延べスジェビ。澄んだスープで深い味わい。',
    },
    price: 39000, cat: 'crab', pill: 'SIGNATURE',
  },
  {
    id: 'gae-saebap',
    name: { ko: '게새밥', en: 'Crab & Shrimp Rice', ja: '蟹と海老のご飯' },
    desc: {
      ko: '새우장과 게내장 밥의 환상의 조합.',
      en: 'Soy shrimp meets crab-roe rice — a wild pairing.',
      ja: '海老醤油漬けと蟹ミソご飯の最強の組み合わせ。',
    },
    price: 30000, cat: 'crab',
  },

  {
    id: 'daechang-feet',
    name: {
      ko: '매콤 대창 국물닭발',
      en: 'Spicy Chitterlings & Chicken Feet Stew',
      ja: '韓牛ホルモン入り 鶏足ピリ辛煮込み',
    },
    desc: {
      ko: '통통한 대창과 양념 잘 밴 닭발의 칼칼한 국물.',
      en: 'Plump chitterlings and chicken feet in a fiery, savoury broth.',
      ja: 'ぷっくりホルモンと味の染みた鶏足、ピリッとくるスープ。',
    },
    price: 30000, cat: 'spicy', pill: 'HOT',
  },
  {
    id: 'cheese-jjusam',
    name: {
      ko: '치즈많이쭈삼',
      en: 'Cheesy Pork & Octopus',
      ja: 'チーズたっぷり 豚と小蛸炒め',
    },
    desc: {
      ko: '고기·주꾸미·치즈 가득, 마무리 볶음밥까지.',
      en: 'Pork, baby octopus and cheese — finish with fried rice.',
      ja: '豚肉・小蛸・チーズたっぷり。締めは炒飯で。',
    },
    price: 35000, cat: 'spicy',
  },
  {
    id: 'jicoba',
    name: {
      ko: '핵맛있닭 분모자 지코바',
      en: 'Jicoba Chicken with Glass Noodles',
      ja: 'ジコバチキン 春雨入り',
    },
    desc: {
      ko: '맛없없 조합. 콘치즈 분모자 지코바.',
      en: 'Corn cheese, glass noodles and Jicoba-style chicken — instant winner.',
      ja: 'コーンチーズと春雨が絡む、ジコバ風チキン。',
    },
    price: 28000, cat: 'spicy',
  },
  {
    id: 'mala-mool',
    name: { ko: '마라물떡오뎅탕', en: 'Mala Rice Cake & Fishcake Pot', ja: '麻辣 餅と練り物の鍋' },
    desc: {
      ko: '물떡·오뎅·곤약을 마라 버전으로. 입문자 OK.',
      en: 'Mala-style rice cake, fishcake and konjac — mild enough for beginners.',
      ja: '物떡・練り物・こんにゃくを麻辣で。初心者にも◎。',
    },
    price: 29000, cat: 'spicy',
  },

  {
    id: 'crab-cream-pasta',
    name: { ko: '게내장 크림파스타', en: 'Crab Roe Cream Pasta', ja: '蟹ミソクリームパスタ' },
    desc: {
      ko: '녹진한 게내장 소스, 비리지 않은 풍미.',
      en: 'Velvet crab-roe sauce with zero fishy edge.',
      ja: 'まろやかな蟹ミソソース、生臭さなし。',
    },
    price: 33000, cat: 'pasta', pill: 'SIGNATURE',
  },
  {
    id: 'myungran-pasta',
    name: { ko: '명란갈비 크림파스타', en: 'Pollack Roe & LA Galbi Cream Pasta', ja: '明太子と LA カルビのクリームパスタ' },
    desc: {
      ko: '부드러운 LA갈비와 명란 크림의 만남.',
      en: 'Tender LA-cut short rib over pollack-roe cream pasta.',
      ja: '柔らかなLAカルビと明太子クリームの出会い。',
    },
    price: 28000, cat: 'pasta',
  },

  {
    id: 'aroha-shabu',
    name: { ko: '아로하 샤브샤브', en: 'Aroha Shabu-shabu', ja: 'アロハしゃぶしゃぶ' },
    desc: {
      ko: '담백한 국물과 버섯의 우러나는 깊은 맛.',
      en: 'Light broth deepened by mushrooms — pure, clean flavour.',
      ja: '澄んだスープにキノコの旨味、奥深い味わい。',
    },
    price: 30000, cat: 'jeon',
  },
  {
    id: 'potato-jeon',
    name: { ko: '바삭 통감자전', en: 'Crispy Potato Pancake', ja: 'カリカリ じゃがいもチヂミ' },
    desc: {
      ko: '바삭하게 구운 감자전. 가볍게 한잔.',
      en: 'Crispy potato pancake — perfect with a quiet drink.',
      ja: 'カリッと焼き上げた じゃがいもチヂミ。軽く一杯と。',
    },
    price: 18000, cat: 'jeon',
  },
  {
    id: 'seafood-jeon',
    name: { ko: '해물부추전', en: 'Seafood & Chive Pancake', ja: '海鮮ニラチヂミ' },
    desc: {
      ko: '갓 부쳐 낸 해물 가득 부추전.',
      en: 'Just-fried chive pancake loaded with seafood.',
      ja: '焼き立て、海鮮たっぷりのニラチヂミ。',
    },
    price: 19000, cat: 'jeon',
  },
  {
    id: 'kimchi-jeon',
    name: { ko: '김치전', en: 'Kimchi Pancake', ja: 'キムチチヂミ' },
    desc: {
      ko: '잘 익은 김치의 깊은 맛, 비 오는 날의 인사.',
      en: 'Aged kimchi for a rainy-day pancake.',
      ja: '熟成キムチの深い旨味、雨の日の定番。',
    },
    price: 17000, cat: 'jeon',
  },

  {
    id: 'cream-toast',
    name: { ko: '생크림 연유 토스트', en: 'Whipped Cream & Condensed Milk Toast', ja: '生クリーム＆練乳トースト' },
    desc: {
      ko: '달큰한 마무리, 도톰한 토스트 위 연유 생크림.',
      en: 'A sweet finish — thick toast topped with cream and condensed milk.',
      ja: '甘い締めくくり、ふっくらトーストに練乳と生クリーム。',
    },
    price: 13000, cat: 'dessert',
  },
  {
    id: 'slush',
    name: { ko: '슬러시', en: 'Complimentary Slushie', ja: 'スラッシュ(無料)' },
    desc: {
      ko: '매장 내 무료 제공. 식사 후 한 잔 챙기세요.',
      en: 'Free in-store. Help yourself after the meal.',
      ja: '店内無料サービス。食後に一杯どうぞ。',
    },
    price: 0, cat: 'dessert', pill: 'FREE',
  },
];

export const categories: { key: MenuCategory | 'all'; tKey: string }[] = [
  { key: 'all', tKey: 'menu.cat.all' },
  { key: 'crab', tKey: 'menu.cat.crab' },
  { key: 'spicy', tKey: 'menu.cat.spicy' },
  { key: 'pasta', tKey: 'menu.cat.pasta' },
  { key: 'jeon', tKey: 'menu.cat.jeon' },
  { key: 'dessert', tKey: 'menu.cat.dessert' },
];
