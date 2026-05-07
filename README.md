# 💰 스마트 가계부 대시보드

> Vue 3 + Pinia + Bootstrap 5 + Google Charts로 만든 현대적인 개인 가계부 애플리케이션

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.12-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-2.2.4-42a883?logo=vue.js)](https://pinia.vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [설치 및 실행](#-설치-및-실행)
- [프로젝트 구조](#-프로젝트-구조)
- [API 명세](#-api-명세)
- [사용 예시](#-사용-예시)
- [스크린샷](#-스크린샷)
- [개발 로드맵](#-개발-로드맵)

---

## 🎯 프로젝트 소개

**스마트 가계부 대시보드**는 개인의 일일 금융 거래를 효율적으로 관리하기 위한 Single Page Application(SPA)입니다.

### 핵심 특징

✅ **실시간 대시보드** — 총수입, 총지출, 순이익, 거래 건수를 한눈에 파악  
✅ **직관적인 시각화** — Google Charts를 활용한 다양한 차트 분석  
✅ **빠른 거래 추가** — 간편한 폼으로 수입/지출 기록  
✅ **유연한 관리** — 거래 내역 검색, 필터링, 삭제 기능  
✅ **반응형 디자인** — 모바일/태블릿/데스크톱 완벽 지원  
✅ **로컬 Mock API** — json-server로 별도 백엔드 없이 개발/테스트

---

## 🚀 주요 기능

| 기능 | 설명 |
|------|------|
| 📊 **대시보드** | 수입/지출 통계, 3가지 차트, 최근 거래 목록 |
| 💳 **거래 관리** | 수입/지출 추가, 카테고리 분류, 메모 기록 |
| 🔍 **검색 & 필터** | 거래 내역 실시간 검색, 카테고리별 필터 |
| 📈 **차트 분석** | 파이 차트(카테고리별), 라인 차트(추이), 바 차트(월별) |
| 🎨 **UI/UX** | Bootstrap 5 기반 현대적 디자인, Font Awesome 아이콘 |

---

## 🛠 기술 스택

### 프론트엔드

```
┌─────────────────────────────────────┐
│        Vue 3 (Composition API)      │  
│       프레임워크 & UI 로직           │
└─────────────────────────────────────┘
         ↓          ↓          ↓
   ┌────────┐  ┌────────┐  ┌────────┐
   │  Pinia │  │ Vue    │  │Bootstrap│
   │ 상태관리│  │ Router │  │  CSS   │
   └────────┘  └────────┘  └────────┘
         ↓
   ┌────────────────────┐
   │   Google Charts    │
   │    데이터 시각화    │
   └────────────────────┘
         ↓
   ┌────────────────────┐
   │      Axios         │
   │   HTTP 통신       │
   └────────────────────┘
```

| 카테고리 | 기술 | 버전 | 용도 |
|---------|------|------|------|
| **프레임워크** | Vue.js | 3.5.12 | Progressive JavaScript Framework |
| **상태 관리** | Pinia | 2.2.4 | Vue 상태 관리 (Vuex 후속) |
| **라우팅** | Vue Router | 4.4.5 | SPA 라우팅 |
| **UI 프레임워크** | Bootstrap | 5.3.3 | 반응형 CSS 프레임워크 |
| **차트** | Google Charts | - | 데이터 시각화 (파이, 라인, 바) |
| **HTTP 클라이언트** | Axios | 1.7.7 | REST API 통신 |
| **Mock 서버** | json-server | 0.17.4 | 로컬 REST API 서버 |
| **빌드 도구** | Vite | 5.4.10 | 초고속 번들러 (ES 모듈) |
| **아이콘** | Font Awesome 6 | - | 아이콘 라이브러리 (CDN) |
| **병렬 실행** | concurrently | 9.0.1 | 여러 npm 스크립트 동시 실행 |

### 개발 환경

```json
{
  "nodeVersion": ">=16.0.0",
  "packageManager": "npm",
  "buildTool": "Vite",
  "moduleType": "ES Module"
}
```

---

## 📦 설치 및 실행

### 1️⃣ 저장소 클론

```bash
git clone https://github.com/pisejin/ai-lovable.git
cd ai-lovable
```

### 2️⃣ 의존성 설치

```bash
npm install
```

### 3️⃣ 개발 서버 실행

#### 방법 1️⃣ — 모든 서버 동시 실행 (권장)

```bash
npm start
```

- 📱 **프론트엔드**: http://localhost:5173
- 🔌 **Mock API**: http://localhost:3001

#### 방법 2️⃣ — 별도 터미널에서 실행

```bash
# 터미널 1: json-server 시작
npm run server

# 터미널 2: Vite 개발 서버 시작
npm run dev
```

### 4️⃣ 빌드 & 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

---

## 🗂 프로젝트 구조

```
ai-lovable/
├── 📄 index.html              # HTML 진입점
├── 📦 package.json            # 의존성 & 스크립트
├── ⚙️  vite.config.js          # Vite 설정
├── 💾 db.json                 # Mock 데이터 (샘플 거래 100건)
│
├── 📁 src/
│   ├── 📄 main.js             # Vue 앱 초기화
│   ├── 📄 App.vue             # 루트 컴포넌트
│   │
│   ├── 📁 assets/
│   │   └── 🎨 main.css        # 글로벌 스타일
│   │
│   ├── 📁 router/
│   │   └── 📄 index.js        # Vue Router 설정
│   │       ├── 🏠 Dashboard (/)
│   │       ├── 📋 Transactions (/transactions)
│   │       └── ➕ AddTransaction (/add)
│   │
│   ├── 📁 stores/
│   │   ├── 📄 api.js          # Axios 인스턴스 (json-server 연결)
│   │   └── 📄 transaction.js  # Pinia 스토어
│   │       ├── State: transactions[], categories[]
│   │       ├── Getters: totalIncome, totalExpense, netProfit...
│   │       └── Actions: addTransaction, deleteTransaction...
│   │
│   ├── 📁 components/
│   │   ├── 📊 StatCard.vue    # 통계 카드 (수입/지출/순이익/건수)
│   │   └── 📈 GoogleChart.vue  # Google Charts 래퍼 컴포넌트
│   │
│   └── 📁 views/
│       ├── 🏠 Dashboard.vue    # 대시보드 메인 페이지
│       ├── 📋 Transactions.vue # 거래 내역 관리 페이지
│       └── ➕ AddTransaction.vue # 거래 추가 폼
│
├── 📁 dist/                   # 빌드 결과물 (npm run build 후 생성)
└── 📁 node_modules/           # 의존성 라이브러리
```

---

## 🔌 API 명세

### json-server Mock REST API

**Base URL**: `http://localhost:3001`

#### 거래 관련 API

| 메서드 | 엔드포인트 | 설명 | 예제 |
|--------|----------|------|------|
| `GET` | `/transactions` | 모든 거래 조회 | `GET /transactions` |
| `GET` | `/transactions?category=식비` | 카테고리별 필터 | 필터링 가능 |
| `POST` | `/transactions` | 새 거래 추가 | 아래 참고 |
| `DELETE` | `/transactions/:id` | 거래 삭제 | `DELETE /transactions/1` |

#### 카테고리 API

| 메서드 | 엔드포인트 | 설명 |
|--------|----------|------|
| `GET` | `/categories` | 모든 카테고리 조회 |

### 요청/응답 예제

#### 거래 추가 요청

```javascript
// POST /transactions
{
  "id": 101,
  "date": "2026-05-07",
  "type": "expense",              // "income" 또는 "expense"
  "category": "식비",
  "description": "점심 식사",
  "amount": 12000,
  "memo": "카페 근처 식당"
}
```

#### 응답 예제

```json
[
  {
    "id": 1,
    "date": "2026-05-01",
    "type": "income",
    "category": "급여",
    "description": "월급",
    "amount": 3000000,
    "memo": "4월 월급"
  },
  {
    "id": 2,
    "date": "2026-05-02",
    "type": "expense",
    "category": "식비",
    "description": "마트 장보기",
    "amount": 45000,
    "memo": "주간 식료품"
  }
]
```

---

## 💻 사용 예시

### 예시 1️⃣: 거래 추가하기

```vue
<!-- AddTransaction.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.description" placeholder="설명">
    <select v-model="form.category">
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
    <input v-model.number="form.amount" type="number" placeholder="금액">
    <button type="submit">💾 저장</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTransactionStore } from '@/stores/transaction';

const store = useTransactionStore();
const form = ref({ category: '', description: '', amount: 0 });

const handleSubmit = async () => {
  await store.addTransaction(form.value);
  // 폼 초기화 및 리다이렉트
};
</script>
```

### 예시 2️⃣: Pinia 스토어 사용

```javascript
// stores/transaction.js
import { defineStore } from 'pinia';
import { apiClient } from './api';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
    categories: ['급여', '사업소득', '식비', '교통', '통신료'],
  }),

  getters: {
    totalIncome: (state) => 
      state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0),
    
    totalExpense: (state) =>
      state.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0),
  },

  actions: {
    async fetchTransactions() {
      const { data } = await apiClient.get('/transactions');
      this.transactions = data;
    },

    async addTransaction(transaction) {
      const { data } = await apiClient.post('/transactions', transaction);
      this.transactions.push(data);
    },

    async deleteTransaction(id) {
      await apiClient.delete(`/transactions/${id}`);
      this.transactions = this.transactions.filter(t => t.id !== id);
    },
  },
});
```

### 예시 3️⃣: 컴포넌트에서 사용

```vue
<template>
  <div class="dashboard">
    <h1>💰 가계부 대시보드</h1>
    
    <!-- 통계 카드 -->
    <div class="row">
      <StatCard 
        title="총 수입" 
        :value="store.totalIncome" 
        color="success"
      />
      <StatCard 
        title="총 지출" 
        :value="store.totalExpense" 
        color="danger"
      />
    </div>

    <!-- 차트 -->
    <GoogleChart type="pie" :data="chartData" />
  </div>
</template>

<script setup>
import { useTransactionStore } from '@/stores/transaction';

const store = useTransactionStore();

// 마운트 시 데이터 로드
onMounted(() => {
  store.fetchTransactions();
});
</script>
```

---

## 📸 스크린샷

### 1️⃣ 대시보드 화면

```
┌─────────────────────────────────────────────────────────────┐
│  💰 스마트 가계부 대시보드                                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 📈 총 수입    │  │ 📉 총 지출    │  │ 💹 순이익     │      │
│  │ ₩3,500,000   │  │ ₩1,200,000   │  │ ₩2,300,000   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 🔢 거래 건수   │  │ 📊 카테고리별  │  │ 📈 월별 추이   │      │
│  │     45건     │  │   지출 분석   │  │   (라인차트)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  📋 최근 거래 내역                                            │
├─────────────────────────────────────────────────────────────┤
│  2026-05-07  | 식비     | 점심 | ₩12,000  | ❌               │
│  2026-05-06  | 교통     | 택시 | ₩8,500   | ❌               │
│  2026-05-05  | 급여     | 월급 | ₩3M      | ❌               │
└─────────────────────────────────────────────────────────────┘
```

### 2️⃣ 거래 추가 화면

```
┌─────────────────────────────────────────┐
│  ➕ 거래 추가하기                        │
├─────────────────────────────────────────┤
│                                         │
│  📅 날짜: [2026-05-07]                 │
│                                         │
│  💰 유형: ◯ 수입  ◉ 지출               │
│                                         │
│  🏷️  카테고리: [식비        ▼]          │
│                                         │
│  📝 설명: [점심 식사             ]      │
│                                         │
│  💵 금액: [12000              ]        │
│                                         │
│  📌 메모: [강남역 근처 식당     ]      │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │  💾 저장  |  🔙 취소            │  │
│  └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### 3️⃣ 거래 내역 관리 화면

```
┌──────────────────────────────────────────────────────┐
│  📋 거래 내역 관리                                   │
├──────────────────────────────────────────────────────┤
│  🔍 [검색...]  🏷️ [카테고리 필터 ▼]  📊 [정렬 ▼]  │
├──────────────────────────────────────────────────────┤
│  날짜      │ 카테고리 │ 설명      │ 금액      │ 작업  │
├──────────────────────────────────────────────────────┤
│ 2026-05-07 │ 식비    │ 점심     │ ₩12,000  │ ❌    │
│ 2026-05-06 │ 교통    │ 택시     │ ₩8,500   │ ❌    │
│ 2026-05-05 │ 급여    │ 월급     │ +₩3M     │ ❌    │
│ 2026-05-04 │ 통신료  │ 핸드폰   │ ₩50,000  │ ❌    │
│ 2026-05-03 │ 식비    │ 저녁     │ ₩18,000  │ ❌    │
│ 2026-05-02 │ 쇼핑    │ 옷       │ ₩120,000 │ ❌    │
└──────────────────────────────────────────────────────┘
```

### 4️⃣ 차트 분석 화면

```
┌────────────────────────────────────────────────────────┐
│  📊 카테고리별 지출                                    │
│                                                        │
│       🥧 파이 차트                                     │
│      ╱            ╲                                   │
│     │   식비 45%   │                                  │
│     │   쇼핑 25%   │   교통 15% | 통신 15%           │
│      ╲            ╱                                   │
│       ─────────────                                   │
│                                                        │
├────────────────────────────────────────────────────────┤
│  📈 월별 수입/지출 추이                                │
│                                                        │
│  금액 │                                              │
│       │     ╱╲        ╱╲                            │
│  3M   │    ╱  ╲      ╱  ╲                          │
│       │   ╱    ╲    ╱    ╲                        │
│  1M   │  ╱──────╲──╱──────╲                       │
│       │ ────────────────────────── 월              │
│       1월 2월 3월 4월 5월 6월                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 🎨 주요 구현 특징

### 1. **Composition API + `<script setup>` 문법**

```vue
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTransactionStore } from '@/stores/transaction';

const store = useTransactionStore();
const searchQuery = ref('');

const filteredTransactions = computed(() => {
  return store.transactions.filter(t =>
    t.description.includes(searchQuery.value)
  );
});

onMounted(() => {
  store.fetchTransactions();
});
</script>
```

### 2. **Pinia 상태 관리**

- ✅ 중앙화된 상태 관리
- ✅ 명확한 getter/action 정의
- ✅ Vue DevTools 통합

### 3. **Axios 인스턴스 관리**

```javascript
// stores/api.js
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});
```

### 4. **Bootstrap 5 반응형 그리드**

```vue
<template>
  <div class="container-fluid">
    <div class="row g-3">
      <div class="col-lg-3 col-md-6"><!-- StatCard --></div>
      <div class="col-lg-3 col-md-6"><!-- StatCard --></div>
      <div class="col-lg-6"><!-- Chart --></div>
    </div>
  </div>
</template>
```

### 5. **Google Charts 적분**

```vue
<script setup>
import { ref, onMounted } from 'vue';

const chartData = ref([
  ['카테고리', '금액'],
  ['식비', 450000],
  ['교통', 120000],
  ['쇼핑', 200000]
]);

const chartOptions = {
  title: '카테고리별 지출',
  pieHole: 0.4,
  colors: ['#ff6b6b', '#4ecdc4', '#45b7d1']
};
</script>
```

---

## 🚀 개발 로드맵

### 현재 완료 ✅

- [x] 기본 CRUD 기능
- [x] 대시보드 & 통계
- [x] Google Charts 시각화
- [x] json-server Mock API
- [x] Pinia 상태 관리
- [x] Bootstrap 5 UI

### 계획 중 🔄

- [ ] 📱 PWA 지원 (오프라인 모드)
- [ ] 🔐 사용자 인증 (로그인/가입)
- [ ] 📊 고급 필터링 (날짜 범위, 금액 범위)
- [ ] 💾 데이터 내보내기 (CSV, Excel)
- [ ] 🎨 테마 설정 (라이트/다크 모드)
- [ ] 📈 목표 설정 & 진행률 추적
- [ ] 🔔 알림 & 예산 초과 경고
- [ ] 📱 모바일 앱 배포 (Capacitor)

### 미래 계획 💡

- [ ] 👥 가족 공유 기능
- [ ] 🤖 AI 기반 지출 분석
- [ ] 💳 신용카드 연동
- [ ] 📊 예산 플래닝 도구

---

## 🤝 기여하기

버그 리포트나 기능 제안은 [Issues](https://github.com/pisejin/ai-lovable/issues)에서 해주세요.

```bash
# 기여 프로세스
1. Fork this repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request
```

---

## 📞 연락처 & 지원

- 📧 **이메일**: [GitHub Profile](https://github.com/pisejin)
- 🐛 **버그 리포트**: [GitHub Issues](https://github.com/pisejin/ai-lovable/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/pisejin/ai-lovable/discussions)

---

## 📄 라이선스

이 프로젝트는 **MIT License** 하에 배포됩니다.
자유롭게 사용, 수정, 배포 가능합니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 🙏 감사의 말

- Vue.js 팀 (프로젝트 기반 프레임워크)
- Bootstrap 팀 (UI 프레임워크)
- Google Charts 팀 (데이터 시각화)
- 모든 오픈소스 컨트리뷰터들

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되었다면 별을 눌러주세요!

**Made with ❤️ by [pisejin](https://github.com/pisejin)**

*최종 업데이트: 2026년 5월 7일*

</div>
