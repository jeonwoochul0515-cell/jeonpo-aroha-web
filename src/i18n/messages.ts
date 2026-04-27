export type Lang = 'ko' | 'en' | 'ja';

export const LANGS: { code: Lang; label: string; full: string }[] = [
  { code: 'ko', label: 'KO', full: '한국어' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ja', label: 'JA', full: '日本語' },
];

export type Messages = Record<string, string>;

export const messages: Record<Lang, Messages> = {
  ko: {
    // ============ NAV ============
    'nav.about': '소개',
    'nav.signature': '시그니처',
    'nav.menu': '메뉴',
    'nav.vibe': '분위기',
    'nav.review': '리뷰',
    'nav.visit': '오시는 길',
    'nav.reserve': '예약하기',
    'nav.menuOpen': '메뉴 열기',
    'nav.close': '닫기',

    // ============ HERO ============
    'hero.eyebrow': 'A L O H A · 도심 속 휴양지로의 초대',
    'hero.h1.italic': 'Aloha,',
    'hero.h1.kr1': '전포 한가운데',
    'hero.h1.kr2': '야장 술집의 시간.',
    'hero.lead':
      '한식과 양식이 어우러진 휴양지 컨셉의 도심 속 작은 섬. 시원한 야장에서 게즙 가득한 꽃게 요리와 한 잔의 술로 오늘의 피로를 흘려 보내세요.',
    'hero.meta.address': '부산 부산진구 전포대로 225 1F',
    'hero.meta.hours': '일–목 17:00 / 금–토 17:00 — 익일 04:00',
    'hero.meta.transit': '전포역 7번 출구 · 도보 4분',
    'hero.cta.reserve': '캐치테이블 예약',
    'hero.cta.menu': '메뉴 둘러보기',
    'hero.badge': 'NOW OPEN',
    'hero.card.t1': "today's signature",
    'hero.card.t2': '아로하 꽃게탕',

    // ============ ABOUT ============
    'about.kicker': 'our story · 휴양지의 식탁',
    'about.h1': '도심 한복판에서',
    'about.h2': '휴양지의 한 끼를.',
    'about.first':
      '"아로하"는 휴양지에서 편안하게 음식과 음료를 즐기는 그 모습 그대로, 한식과 양식이 어우러진 도심 속 작은 섬이 되고 싶었습니다.',
    'about.p2':
      '전포 한복판 폴딩 도어를 활짝 연 야장, 서해안 꽃게의 수율 가득한 게즙, 매 정각 내리는 슬러시 한 잔. 여행지에 와 있는 듯한 한 시간을 위해, 매일 우리는 새로 끓이고 새로 굽습니다.',
    'about.p3':
      '늦은 오후부터 새벽 3시(주말 4시)까지, 누구든 가볍게 자리 잡아도 좋도록 넓은 테이블과 분리된 화장실, 반려동물 동반, 단체석까지 준비해 두었습니다.',
    'about.stat1': '방문자 리뷰',
    'about.stat2': '블로그 리뷰',
    'about.stat3': '단체 예약',

    // ============ SIGNATURE ============
    'sig.kicker': 'Signature · 아로하의 게요리',
    'sig.h1': '서해안 꽃게,',
    'sig.h2': '수율로만 골라낸 한 접시.',
    'sig.lead':
      '국내산 서해안 꽃게 중에서도 살이 가득 찬 수율 좋은 녀석들만 골라, 아로하만의 방식으로 굽고 끓이고 비빕니다. 게친자라면 절대 놓칠 수 없는 세 가지.',
    'sig.card1.ribbon': '★ Best Seller',
    'sig.card1.name': '버터갈릭 꽃게구이',
    'sig.card1.desc':
      '불향 가득 입혀진 꽃게 위로 버터와 갈릭 소스를 듬뿍. 한 입에 꽃게즙이 팡 터지는 프리미엄 메뉴.',
    'sig.card1.tag': 'Crab · Butter',
    'sig.card2.ribbon': '★ Aroha Special',
    'sig.card2.name': '아로하 꽃게탕',
    'sig.card2.desc':
      '꽃게 두 판이 통째로. 시원한 국물에 수제비 사리까지 더하면 진국. 술 한잔이 절로 부르는 그 맛.',
    'sig.card2.tag': 'Hot Pot',
    'sig.card3.ribbon': "★ Lady's Pick",
    'sig.card3.name': '게내장 크림파스타',
    'sig.card3.desc':
      '녹진한 게내장 소스에 비리지 않은 풍미. 여심 저격 완료, 아로하의 시그니처 파스타.',
    'sig.card3.tag': 'Pasta',
    'sig.viewAll': '전체 메뉴 보기 →',

    // ============ MENU ============
    'menu.kicker': 'Menu · 한식과 양식의 조화',
    'menu.h1': '술이 부르는 안주들,',
    'menu.h2': '모두 정성으로 끓여 냅니다.',
    'menu.lead':
      '테이블마다 비치된 태블릿(티오더)으로 편하게 주문하세요. 가격은 부가세 포함이며, 시즌에 따라 일부 변동될 수 있습니다.',
    'menu.cat.all': '전체',
    'menu.cat.crab': '꽃게 시그니처',
    'menu.cat.spicy': '매콤 안주',
    'menu.cat.pasta': '파스타',
    'menu.cat.jeon': '전 · 사이드',
    'menu.cat.dessert': '디저트',
    'menu.foot.note': '* 메뉴 항목과 가격은 매장 사정에 따라 변동될 수 있습니다.',
    'menu.foot.naver': '네이버 메뉴판 이미지로 보기 →',
    'menu.unit': '원',

    // ============ VIBE ============
    'vibe.kicker': 'Atmosphere · 벚꽃 핀 야장',
    'vibe.h1': '개방감 가득한 야장,',
    'vibe.h2': '매 정각 내리는 한 줌의 설렘.',
    'vibe.lead':
      '전체 폴딩 도어를 활짝 열어 트인 공간으로. 봄에는 벚꽃, 겨울에는 매 정각마다 내리는 눈으로 잠시 휴양지에 데려다 드립니다.',
    'vibe.cap1': '국물닭발',
    'vibe.cap2': 'The Aroha Table',
    'vibe.cap3': '여수식 게장',
    'vibe.cap4': '새벽 3시',
    'vibe.cap5': '술 한 잔',

    // ============ REVIEW ============
    'review.kicker': 'Reviews · 손님이 남긴 이야기',
    'review.h1': '3,000명이 넘는 분들의',
    'review.h2': '같은 한 마디.',
    'review.lead':
      '네이버 방문자·블로그 리뷰에 가장 많이 등장한 키워드와, 매장에 직접 다녀가신 손님의 이야기를 모았습니다. (다이닝코드 다코점수 68점, 사용자 평점 5.0)',
    'review.kw1': '음식이 맛있어요',
    'review.kw2': '기본 안주가 좋아요',
    'review.kw3': '음악이 좋아요',
    'review.kw4': '인테리어가 멋져요',
    'review.kw5': '특별한 메뉴가 있어요',

    // ============ VISIT ============
    'visit.kicker': 'Visit · 오시는 길',
    'visit.h1': '전포역 7번 출구에서',
    'visit.h2': '도보 약 4분, 전포대로 위.',
    'visit.lead':
      '예약 없이도 좋지만, 주말과 야장은 캐치테이블 예약이 가장 편합니다. 4인부터 80인까지 단체 모임도 환영해요.',
    'visit.row.address': '— Address',
    'visit.row.address.val': '부산광역시 부산진구 전포대로 225, 1층 아로하',
    'visit.row.address.sub': '전포역 7번 출구 → 전포사거리 방향 약 250m',
    'visit.row.hours': '— Hours',
    'visit.row.hours.val': '일–목 17:00 — 03:00\n금–토 17:00 — 04:00',
    'visit.row.capacity': '— Capacity',
    'visit.row.capacity.val': '4인 ~ 80인 예약 가능\n단체 모임 환영',
    'visit.row.facilities': '— Facilities',
    'visit.row.facilities.val': '단체석 · 반려동물 동반\n남/녀 화장실 분리 · 무선 인터넷',
    'visit.row.contact': '— Contact',
    'visit.row.contact.val': '010-7334-1272\n캐치테이블 / 네이버 예약',
    'visit.btn.catch': '캐치테이블 예약 →',
    'visit.btn.map': '네이버 지도 보기',
    'visit.btn.tel': '전화로 문의',
    'visit.side.h': '방문 전 알아두세요',
    'visit.side.li1': '주말 및 공휴일은 캐치테이블 웨이팅이 길 수 있어요. 가급적 예약을 권장드립니다.',
    'visit.side.li2': '봄에는 야장 폴딩 전체 개방, 벚꽃과 함께 즐기세요.',
    'visit.side.li3': '매 정각마다 매장 내에서 슬러시 한 잔이 무료로 제공됩니다.',
    'visit.side.li4': '리뷰 작성 시 감자튀김 또는 샤베트 쿠폰을 드려요. (조건 충족 시)',
    'visit.side.li5': '대형 스크린이 있어 시즌에 따라 야구·축구 응원전이 가능합니다.',
    'visit.side.li6': '반려동물 동반 가능 — 단, 안전을 위해 케이지 또는 리드줄 부탁드립니다.',

    // ============ CTA ============
    'cta.eyebrow': 'A L O H A · See you tonight',
    'cta.h.it1': 'The night is',
    'cta.h.it2': 'still young.',
    'cta.h.kr': '오늘 저녁, 전포 아로하에서 만나요.',
    'cta.p':
      '네 명이든 여덟 명이든, 비 오는 날의 한 잔이든 벚꽃 핀 야장이든. 아로하의 자리는 언제나 비워두지 않겠습니다.',
    'cta.btn.reserve': '예약하러 가기 →',
    'cta.btn.menu': '메뉴 다시 보기',

    // ============ FOOTER ============
    'foot.brand.sub': '— 도심 속 휴양지',
    'foot.p':
      '한식과 양식이 어우러진 휴양지 컨셉의 도심 요리주점. 새벽 3시(주말 4시)까지, 누군가의 하루의 끝에 함께합니다.',
    'foot.col1.h': '찾아오는 길',
    'foot.col1.li1': '부산 부산진구 전포대로 225',
    'foot.col1.li2': '1층 아로하',
    'foot.col1.li3': '전포역 7번 출구 250m',
    'foot.col2.h': '운영 시간',
    'foot.col2.li1': '일–목 17:00 — 03:00',
    'foot.col2.li2': '금–토 17:00 — 04:00',
    'foot.col2.li3': '4인 ~ 80인 예약',
    'foot.col3.h': '예약 · SNS',
    'foot.col3.catch': '캐치테이블 예약',
    'foot.col3.naver': '네이버 플레이스',
    'foot.col3.insta': 'Instagram',
    'foot.copy': '© 2026 JEONPO ALOHA · ALL RIGHTS RESERVED.',
    'foot.tag': 'Crafted with 🌺 for the late nights of 전포.',

    // ============ LANG SWITCHER ============
    'lang.aria': '언어 선택',

    // ============ PROMO POPUP ============
    'promo.tag': 'NEW · 신메뉴 알림',
    'promo.title': '아로하에서 맛볼 수 있는\n한우대창 국물 닭발',
    'promo.body':
      '통통한 닭발과 쫀득한 식감의 대창, 양념 잘 배여 진짜 JMT~ 한번 빠지면 헤어나올 수 없으세요. 마무리로 볶음밥은 꼭 드세요.',
    'promo.cta': '메뉴 보러 가기',
    'promo.close': '닫기',
    'promo.alt': '한우대창 국물 닭발',

    // ============ INSTAGRAM ============
    'insta.kicker': 'Instagram · @jeonpo_aloha_',
    'insta.h1': '오늘의 아로하,',
    'insta.h2': '인스타에서 더 가까이.',
    'insta.lead':
      '오픈 알림, 신메뉴, 야장 분위기의 매일을 인스타에 올립니다. #전포아로하 태그로 손님들이 남겨주신 사진도 함께 보세요.',
    'insta.follow': 'Instagram에서 팔로우 →',
    'insta.tag': '#전포아로하 모아보기',
  },

  en: {
    'nav.about': 'About',
    'nav.signature': 'Signature',
    'nav.menu': 'Menu',
    'nav.vibe': 'Vibe',
    'nav.review': 'Reviews',
    'nav.visit': 'Visit',
    'nav.reserve': 'Reserve',
    'nav.menuOpen': 'Open menu',
    'nav.close': 'Close',

    'hero.eyebrow': 'A L O H A · An invitation to a city resort',
    'hero.h1.italic': 'Aloha,',
    'hero.h1.kr1': 'In the heart of Jeonpo,',
    'hero.h1.kr2': 'time at the open-air bar.',
    'hero.lead':
      'A small island in the city — Korean and Western dishes meet under the resort spirit. Settle in on the open patio, share a steaming pot of crab and a quiet drink, and let the day slip away.',
    'hero.meta.address': '225 Jeonpo-daero 1F, Busanjin-gu, Busan',
    'hero.meta.hours': 'Sun–Thu 17:00 / Fri–Sat 17:00 — 04:00',
    'hero.meta.transit': '4-min walk from Jeonpo Stn. Exit 7',
    'hero.cta.reserve': 'Reserve on Catch Table',
    'hero.cta.menu': 'Browse the menu',
    'hero.badge': 'NOW OPEN',
    'hero.card.t1': "today's signature",
    'hero.card.t2': 'Aroha Crab Hot Pot',

    'about.kicker': 'our story · the resort table',
    'about.h1': 'In the middle of the city,',
    'about.h2': 'a meal of the resort.',
    'about.first':
      '"Aroha" was born from the image of relaxed dining at a far-away resort — a small island in the city where Korean and Western kitchens meet without pretense.',
    'about.p2':
      'Folding doors flung wide, full-yield West-coast crab, a slushie poured every hour on the hour. Each day, we boil and grill again, just for the hour you spend with us.',
    'about.p3':
      'From late afternoon until 3 a.m. (4 a.m. on weekends), we keep wide tables, separated restrooms, pet-friendly seating and group rooms — so anyone can drop by and feel at home.',
    'about.stat1': 'Visitor reviews',
    'about.stat2': 'Blog reviews',
    'about.stat3': 'Group seats',

    'sig.kicker': 'Signature · Aroha crab',
    'sig.h1': 'West-coast blue crab,',
    'sig.h2': 'hand-picked by yield only.',
    'sig.lead':
      'From Korea\'s West-coast blue crab we select only the heaviest, most-filled shells, then grill, simmer and toss them the Aroha way. Three plates true crab lovers must not miss.',
    'sig.card1.ribbon': '★ Best Seller',
    'sig.card1.name': 'Butter Garlic Crab',
    'sig.card1.desc':
      'Smoke-charred crab cloaked in butter and garlic. One bite and the sweet juice bursts.',
    'sig.card1.tag': 'Crab · Butter',
    'sig.card2.ribbon': '★ Aroha Special',
    'sig.card2.name': 'Aroha Crab Hot Pot',
    'sig.card2.desc':
      'Two whole crabs in a clear, briny broth — add hand-torn dough flakes and the night feels long.',
    'sig.card2.tag': 'Hot Pot',
    'sig.card3.ribbon': "★ Lady's Pick",
    'sig.card3.name': 'Crab Roe Cream Pasta',
    'sig.card3.desc':
      'Velvet crab-roe sauce with no fishy edge. Aroha\'s most adored pasta plate.',
    'sig.card3.tag': 'Pasta',
    'sig.viewAll': 'See full menu →',

    'menu.kicker': 'Menu · Korean meets Western',
    'menu.h1': 'Drinks call for these,',
    'menu.h2': 'and we cook them slow.',
    'menu.lead':
      'Order easily from the tablet on every table. Prices include VAT and may shift slightly by season.',
    'menu.cat.all': 'All',
    'menu.cat.crab': 'Crab Signatures',
    'menu.cat.spicy': 'Spicy Bites',
    'menu.cat.pasta': 'Pasta',
    'menu.cat.jeon': 'Jeon · Sides',
    'menu.cat.dessert': 'Dessert',
    'menu.foot.note': '* Menu and prices may change subject to in-store conditions.',
    'menu.foot.naver': 'See full menu on Naver →',
    'menu.unit': 'KRW',

    'vibe.kicker': 'Atmosphere · Patio in bloom',
    'vibe.h1': 'A wide-open patio,',
    'vibe.h2': 'a flutter every hour on the hour.',
    'vibe.lead':
      'Folding doors thrown open from end to end. In spring, cherry blossoms; in winter, snowfall every hour — a fleeting trip to a resort, in-city.',
    'vibe.cap1': 'Spicy chicken feet',
    'vibe.cap2': 'The Aroha Table',
    'vibe.cap3': 'Yeosu-style crab',
    'vibe.cap4': '3 a.m.',
    'vibe.cap5': 'A glass to share',

    'review.kicker': 'Reviews · words from our guests',
    'review.h1': 'Three thousand people,',
    'review.h2': 'one same line.',
    'review.lead':
      'The most-mentioned tags from Naver visitor and blog reviews, alongside notes from guests who dined with us. (Diningcode score 68, user rating 5.0)',
    'review.kw1': 'The food is delicious',
    'review.kw2': 'Lovely starter snacks',
    'review.kw3': 'Great music',
    'review.kw4': 'Beautiful interior',
    'review.kw5': 'Special menu items',

    'visit.kicker': 'Visit · Find us',
    'visit.h1': 'Four minutes on foot',
    'visit.h2': 'from Jeonpo Stn. Exit 7.',
    'visit.lead':
      'Walk-ins welcome, but Catch Table reservations are easiest for weekends and patio seating. Group bookings 4 — 80 guests welcomed.',
    'visit.row.address': '— Address',
    'visit.row.address.val': '225 Jeonpo-daero, Busanjin-gu, Busan · 1F Aroha',
    'visit.row.address.sub': 'Exit 7, Jeonpo Stn. → ~250 m toward Jeonpo crossing',
    'visit.row.hours': '— Hours',
    'visit.row.hours.val': 'Sun–Thu 17:00 — 03:00\nFri–Sat 17:00 — 04:00',
    'visit.row.capacity': '— Capacity',
    'visit.row.capacity.val': 'Reservable for 4 — 80 guests\nGroup events welcomed',
    'visit.row.facilities': '— Facilities',
    'visit.row.facilities.val': 'Group seating · Pet-friendly\nGendered restrooms · Wi-Fi',
    'visit.row.contact': '— Contact',
    'visit.row.contact.val': '+82 10-7334-1272\nCatch Table / Naver',
    'visit.btn.catch': 'Reserve on Catch Table →',
    'visit.btn.map': 'Open in Naver Map',
    'visit.btn.tel': 'Call us',
    'visit.side.h': 'Before you visit',
    'visit.side.li1':
      'Weekends and holidays can run a long Catch Table queue — reservations are recommended.',
    'visit.side.li2': 'In spring, the patio fully unfolds for the cherry blossoms.',
    'visit.side.li3': 'A complimentary slushie is poured every hour, on the hour.',
    'visit.side.li4':
      'Leave a review and receive a fries or sherbet coupon (terms apply).',
    'visit.side.li5':
      'Our large screen broadcasts seasonal baseball and football games.',
    'visit.side.li6':
      'Pets are welcome — please bring a carrier or leash for everyone\'s safety.',

    'cta.eyebrow': 'A L O H A · See you tonight',
    'cta.h.it1': 'The night is',
    'cta.h.it2': 'still young.',
    'cta.h.kr': "Tonight, let's meet at Jeonpo Aroha.",
    'cta.p':
      'Four of you, eight of you, a quiet glass on a rainy night, or a patio under cherry blossoms — the seat at Aroha is always kept warm.',
    'cta.btn.reserve': 'Reserve now →',
    'cta.btn.menu': 'See the menu again',

    'foot.brand.sub': '— a city resort',
    'foot.p':
      'A resort-style city pub where Korean and Western kitchens meet. Until 3 a.m. — 4 a.m. on weekends — we close out the day with you.',
    'foot.col1.h': 'How to find us',
    'foot.col1.li1': '225 Jeonpo-daero, Busanjin-gu, Busan',
    'foot.col1.li2': '1F Aroha',
    'foot.col1.li3': 'Jeonpo Stn. Exit 7 — 250 m',
    'foot.col2.h': 'Hours',
    'foot.col2.li1': 'Sun–Thu 17:00 — 03:00',
    'foot.col2.li2': 'Fri–Sat 17:00 — 04:00',
    'foot.col2.li3': 'Reservations 4 — 80 guests',
    'foot.col3.h': 'Reserve · Social',
    'foot.col3.catch': 'Catch Table',
    'foot.col3.naver': 'Naver Place',
    'foot.col3.insta': 'Instagram',
    'foot.copy': '© 2026 JEONPO ALOHA · ALL RIGHTS RESERVED.',
    'foot.tag': 'Crafted with 🌺 for the late nights of Jeonpo.',

    'lang.aria': 'Choose language',

    'promo.tag': 'NEW · just-launched',
    'promo.title': "Aroha's new arrival —\nKorean beef chitterlings & spicy chicken feet stew",
    'promo.body':
      'Plump chicken feet meet chewy chitterlings, drenched in a sauce that lingers. Once you start, you cannot stop — and finish with the fried-rice on the bottom.',
    'promo.cta': 'See the menu',
    'promo.close': 'Close',
    'promo.alt': 'Spicy chicken feet stew with chitterlings',

    'insta.kicker': 'Instagram · @jeonpo_aloha_',
    'insta.h1': "Today's Aroha,",
    'insta.h2': 'closer on Instagram.',
    'insta.lead':
      'Opening hours, new dishes, and patio mood — every day on Instagram. Find guests\' shots under #JeonpoAroha too.',
    'insta.follow': 'Follow on Instagram →',
    'insta.tag': 'See #JeonpoAroha',
  },

  ja: {
    'nav.about': '紹介',
    'nav.signature': 'シグネチャー',
    'nav.menu': 'メニュー',
    'nav.vibe': '雰囲気',
    'nav.review': 'レビュー',
    'nav.visit': 'アクセス',
    'nav.reserve': '予約する',
    'nav.menuOpen': 'メニューを開く',
    'nav.close': '閉じる',

    'hero.eyebrow': 'A L O H A · 都心のリゾートへご招待',
    'hero.h1.italic': 'Aloha,',
    'hero.h1.kr1': '田浦のど真ん中、',
    'hero.h1.kr2': 'オープンエア酒場の時間。',
    'hero.lead':
      '韓食と洋食が出会うリゾート・コンセプトの都市の小島。風の通る野外席で、旨味あふれる蟹料理と一杯の酒を。今日の疲れを、ここで流していってください。',
    'hero.meta.address': '釜山広域市 釜山鎮区 田浦大路225 1F',
    'hero.meta.hours': '日–木 17:00 / 金–土 17:00 — 翌04:00',
    'hero.meta.transit': '田浦駅7番出口から徒歩4分',
    'hero.cta.reserve': 'Catch Tableで予約',
    'hero.cta.menu': 'メニューを見る',
    'hero.badge': 'NOW OPEN',
    'hero.card.t1': "today's signature",
    'hero.card.t2': 'アロハ蟹チゲ',

    'about.kicker': 'our story · リゾートの食卓',
    'about.h1': '都市のど真ん中に、',
    'about.h2': 'リゾートの一皿を。',
    'about.first':
      '「アロハ」は、リゾートでくつろぎながら食事と酒を楽しむあの情景を、韓食と洋食が交わる小さな都市の島として再現したいと願って生まれました。',
    'about.p2':
      '田浦の中央に開かれた折戸の野外席、西海岸の身入り抜群の蟹、毎正時に注がれるスラッシュ。旅先のような一時間のために、私たちは毎日新しく煮て、新しく焼きます。',
    'about.p3':
      '夕方から翌3時(週末は4時)まで。広いテーブル、男女別トイレ、ペット同伴、団体席までご用意。誰でもふらりと立ち寄れる場所です。',
    'about.stat1': '訪問者レビュー',
    'about.stat2': 'ブログレビュー',
    'about.stat3': '団体席',

    'sig.kicker': 'Signature · アロハの蟹料理',
    'sig.h1': '西海岸の渡り蟹、',
    'sig.h2': '身入りだけで選び抜いた一皿。',
    'sig.lead':
      '国産の渡り蟹の中でも、身がぎっしり詰まったものだけを選び、アロハ流に焼き、煮て、和える。蟹好きなら絶対に外せない三品です。',
    'sig.card1.ribbon': '★ Best Seller',
    'sig.card1.name': 'バターガーリック蟹焼き',
    'sig.card1.desc':
      '炭の香りをまとわせた蟹に、バターとガーリックをたっぷり。一口で蟹の旨味が口いっぱいに弾けます。',
    'sig.card1.tag': 'Crab · Butter',
    'sig.card2.ribbon': '★ Aroha Special',
    'sig.card2.name': 'アロハ蟹チゲ',
    'sig.card2.desc':
      '渡り蟹を二尾まるごと。澄んだスープに手延べのスジェビを加えれば、夜は長くなる。',
    'sig.card2.tag': 'Hot Pot',
    'sig.card3.ribbon': "★ Lady's Pick",
    'sig.card3.name': '蟹ミソクリームパスタ',
    'sig.card3.desc':
      'なめらかな蟹ミソソースに、生臭みのない深い旨味。アロハ屈指の人気パスタ。',
    'sig.card3.tag': 'Pasta',
    'sig.viewAll': 'メニュー全体を見る →',

    'menu.kicker': 'Menu · 韓食と洋食の調和',
    'menu.h1': '酒が呼ぶおつまみたち、',
    'menu.h2': 'すべて手間ひまかけて。',
    'menu.lead':
      '各テーブルのタブレット(T-Order)から簡単にご注文いただけます。価格は税込、季節により変更の場合あり。',
    'menu.cat.all': 'すべて',
    'menu.cat.crab': '蟹シグネチャー',
    'menu.cat.spicy': '辛口おつまみ',
    'menu.cat.pasta': 'パスタ',
    'menu.cat.jeon': 'チヂミ・サイド',
    'menu.cat.dessert': 'デザート',
    'menu.foot.note': '※ メニューと価格は店舗の都合により変更の場合があります。',
    'menu.foot.naver': 'NAVERでメニュー画像を見る →',
    'menu.unit': '₩',

    'vibe.kicker': 'Atmosphere · 桜咲くテラス',
    'vibe.h1': '開放感あふれるテラス、',
    'vibe.h2': '毎正時に降る、ひと粒の高鳴り。',
    'vibe.lead':
      '折戸を端から端まで全開。春は桜、冬は毎正時の雪降る演出で、つかの間のリゾートへとお連れします。',
    'vibe.cap1': '鶏足の煮込み',
    'vibe.cap2': 'The Aroha Table',
    'vibe.cap3': '麗水式 蟹醤油漬け',
    'vibe.cap4': '深夜3時',
    'vibe.cap5': 'グラスを傾けて',

    'review.kicker': 'Reviews · お客様の声',
    'review.h1': '3,000人を超える方々の、',
    'review.h2': '同じ一言。',
    'review.lead':
      'NAVER訪問者・ブログレビューで最もよく挙がるキーワードと、ご来店いただいたお客様の声を集めました。(Diningcodeスコア68点、ユーザー評価5.0)',
    'review.kw1': '料理が美味しい',
    'review.kw2': 'お通しが嬉しい',
    'review.kw3': '音楽が良い',
    'review.kw4': 'インテリアが素敵',
    'review.kw5': '特別なメニューがある',

    'visit.kicker': 'Visit · アクセス',
    'visit.h1': '田浦駅7番出口から、',
    'visit.h2': '徒歩約4分。田浦大路沿い。',
    'visit.lead':
      'ご予約なしでも歓迎ですが、週末・テラス席はCatch Tableのご予約が安心です。4名から80名まで、団体のご利用もどうぞ。',
    'visit.row.address': '— Address',
    'visit.row.address.val': '釜山広域市 釜山鎮区 田浦大路225, 1階 アロハ',
    'visit.row.address.sub': '田浦駅7番出口 → 田浦交差点方向 約250m',
    'visit.row.hours': '— Hours',
    'visit.row.hours.val': '日–木 17:00 — 03:00\n金–土 17:00 — 04:00',
    'visit.row.capacity': '— Capacity',
    'visit.row.capacity.val': '4名〜80名 ご予約可\n団体歓迎',
    'visit.row.facilities': '— Facilities',
    'visit.row.facilities.val': '団体席・ペット同伴可\n男女別トイレ・Wi-Fi完備',
    'visit.row.contact': '— Contact',
    'visit.row.contact.val': '+82 10-7334-1272\nCatch Table / NAVER予約',
    'visit.btn.catch': 'Catch Tableで予約 →',
    'visit.btn.map': 'NAVERマップで見る',
    'visit.btn.tel': 'お電話で問い合わせ',
    'visit.side.h': 'ご来店前にお読みください',
    'visit.side.li1':
      '週末・祝日はCatch Tableの待ちが長い場合があります。ご予約をおすすめします。',
    'visit.side.li2': '春は折戸を全開、桜とともにお楽しみください。',
    'visit.side.li3': '毎正時に、店内ではスラッシュを一杯ずつ無料でご提供。',
    'visit.side.li4':
      'レビュー投稿で、フライドポテトまたはシャーベットのクーポンを進呈(条件あり)。',
    'visit.side.li5':
      '大型スクリーンを設置。シーズンに応じて野球・サッカー観戦も。',
    'visit.side.li6':
      'ペット同伴可。安全のため、キャリーまたはリードのご協力をお願いします。',

    'cta.eyebrow': 'A L O H A · See you tonight',
    'cta.h.it1': 'The night is',
    'cta.h.it2': 'still young.',
    'cta.h.kr': '今夜は、田浦アロハで会いましょう。',
    'cta.p':
      '4名様でも8名様でも。雨の夜の一杯でも、桜咲くテラスでも。アロハの席は、いつでもあなたを待っています。',
    'cta.btn.reserve': '予約に進む →',
    'cta.btn.menu': 'メニューをもう一度',

    'foot.brand.sub': '— 都心のリゾート',
    'foot.p':
      '韓食と洋食が出会うリゾート・コンセプトの都市の酒場。深夜3時(週末は4時)まで、誰かの一日の終わりに寄り添います。',
    'foot.col1.h': 'アクセス',
    'foot.col1.li1': '釜山広域市 釜山鎮区 田浦大路225',
    'foot.col1.li2': '1階 アロハ',
    'foot.col1.li3': '田浦駅7番出口から250m',
    'foot.col2.h': '営業時間',
    'foot.col2.li1': '日–木 17:00 — 03:00',
    'foot.col2.li2': '金–土 17:00 — 04:00',
    'foot.col2.li3': '4名〜80名のご予約',
    'foot.col3.h': '予約 · SNS',
    'foot.col3.catch': 'Catch Table',
    'foot.col3.naver': 'NAVERプレイス',
    'foot.col3.insta': 'Instagram',
    'foot.copy': '© 2026 JEONPO ALOHA · ALL RIGHTS RESERVED.',
    'foot.tag': 'Crafted with 🌺 for the late nights of 田浦.',

    'lang.aria': '言語を選択',

    'promo.tag': 'NEW · 新メニュー',
    'promo.title': 'アロハの新作 —\n韓牛ホルモンと鶏足のピリ辛煮込み',
    'promo.body':
      'ぷっくり鶏足にコリッとしたホルモン、味が染み込んでまさにJMT(うますぎ)。一度ハマると抜け出せません。仕上げの炒飯まで、ぜひ。',
    'promo.cta': 'メニューを見る',
    'promo.close': '閉じる',
    'promo.alt': '韓牛ホルモンと鶏足のピリ辛煮込み',

    'insta.kicker': 'Instagram · @jeonpo_aloha_',
    'insta.h1': '今日のアロハを、',
    'insta.h2': 'Instagramで、もっと近くに。',
    'insta.lead':
      'オープン情報、新メニュー、テラスの雰囲気を毎日アップ。#田浦アロハ のハッシュタグでお客様の投稿もぜひ。',
    'insta.follow': 'Instagramでフォロー →',
    'insta.tag': '#田浦アロハ をまとめて見る',
  },
};
