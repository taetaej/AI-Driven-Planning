# 디자인 정의서 — AI로 하는 기획

## 레퍼런스 무드 분석

레퍼런스 이미지(Mathschool 스타일) 기반으로 추출한 디자인 특징.

---

## 1. 컬러 시스템

| 토큰 | 용도 | 값 |
|---|---|---|
| `--bg-primary` | 페이지 배경 | `#1A1A2E` (다크 네이비/거의 블랙) |
| `--bg-page` | 페이지 외곽 배경 | `#FF69B4` (핫핑크) |
| `--accent-yellow` | 강조 버튼, 하이라이트 텍스트 | `#FFE156` (비비드 옐로) |
| `--accent-pink` | 카드 배경, 배너 | `#FF5CA8` (핑크) |
| `--accent-blue` | 보조 카드 배경 | `#7B8CFF` (퍼플 블루) |
| `--accent-white` | 텍스트, 카드 배경 | `#FFFFFF` |
| `--text-primary` | 다크 배경 위 텍스트 | `#FFFFFF` |
| `--text-dark` | 라이트 카드 위 텍스트 | `#1A1A2E` |

### 컬러 사용 원칙
- 배경은 **다크** 톤으로 통일, 콘텐츠 카드가 떠 보이는 구조
- 강조색은 **옐로 + 핑크** 2가지를 메인으로 교차 사용
- 블루/퍼플은 보조 포인트로 제한적 사용
- 전체적으로 **네온 팝(Neon Pop)** 무드

---

## 2. 타이포그래피

| 요소 | 스타일 |
|---|---|
| 히어로 타이틀 | 40–48px / Bold / White |
| 섹션 타이틀 | 28–32px / Bold / White or Yellow |
| 카드 타이틀 | 18–22px / SemiBold / Dark or White |
| 본문 텍스트 | 14–16px / Regular / White 또는 Dark |
| 캡션/라벨 | 12–13px / Medium / 50% opacity 또는 accent color |

### 타이포 특징
- 한글 폰트: **Pretendard** (가독성 + 모던)
- 영문/숫자 강조 시: **굵은 웨이트 + 옐로 컬러** 조합
- 타이틀은 과감하게 크게, 본문은 절제

---

## 3. 레이아웃 구조

### 전체 구조
- **1페이지 세로 스크롤** (Single Page)
- 최대 너비: `1200px`, 중앙 정렬
- 섹션 간 구분: 충분한 여백(`80–120px`) + 구분선 또는 배경색 변화

### 그리드
- 카드 영역: **2~4 컬럼 그리드** (반응형 → 모바일 1컬럼)
- 카드 간 갭: `16–24px`

### 섹션 흐름 (위→아래)
1. 히어로 (인트로 & 오프닝)
2. Why (기존 툴의 한계)
3. 빙산 모델 (오해와 진실)
4. 하네스 엔지니어링 (방법론)
5. 3기둥 (구축 사례)
6. 협업 방식
7. (추후) 시행착오 섹션

---

## 4. 카드 & 컴포넌트 스타일

---

### 4-1. 카드 베리에이션 (총 5종)

#### A. 기본 카드 (Standard Card)
- 용도: 일반 콘텐츠 블록 (섹션 설명, 목적 등)
- 배경: `#FFFFFF`
- 모서리: `border-radius: 20px`
- 테두리: `2px solid #1A1A2E`
- 패딩: `32px`
- 그림자: 없음 (다크 배경 대비로 충분한 깊이감)

#### B. 컬러 카드 (Color Accent Card)
- 용도: 강조 콘텐츠, 핵심 메시지
- 배경: `--accent-yellow`, `--accent-pink`, `--accent-blue` 중 택 1
- 모서리: `border-radius: 20px`
- 테두리: 없음 (배경색 자체가 강조)
- 패딩: `32px`
- 텍스트: 옐로 카드 → 다크 텍스트 / 핑크·블루 카드 → 화이트 텍스트

#### C. 노트 카드 (Notebook Card) ⭐ 레퍼런스 핵심
- 용도: 정의, 인용, 핵심 개념 설명
- 배경: `#FFFFFF`
- 모서리: `border-radius: 20px`
- 테두리: `2px solid #1A1A2E`
- **왼쪽 또는 상단에 도트 장식 (구멍 뚫린 노트 느낌)**
  - 도트: 3~5개의 원형 `width: 12px; height: 12px; border-radius: 50%`
  - 색상: `#1A1A2E` (채워진 원) 또는 `border: 2px solid #1A1A2E` (빈 원)
  - 배치: 카드 상단에 `display: flex; gap: 8px; margin-bottom: 16px`
- **선택적으로 오른쪽 가장자리에 세로 점선**
  - `border-right: 3px dashed rgba(26,26,46,0.2)`
  - 노트 찢긴 느낌 연출

#### D. 스티커 카드 (Sticker Card)
- 용도: 짧은 강조 문구, 숫자 하이라이트, 라벨
- 배경: `--accent-yellow` 또는 `--accent-pink`
- 모서리: `border-radius: 16px`
- **살짝 기울어진 회전**: `transform: rotate(-2deg)` ~ `rotate(3deg)` (카드마다 랜덤)
- 크기: 콘텐츠에 맞춤 (작은 사이즈)
- 패딩: `16px 24px`
- 폰트: Bold, 약간 큰 사이즈 (20–28px)
- **그림자**: `4px 4px 0px #1A1A2E` (하드 섀도우, 블러 없음)

#### E. 테두리 카드 (Outlined Card)
- 용도: 리스트 아이템, 비교 항목 (Axure vs Figma 등)
- 배경: `transparent` 또는 `rgba(255,255,255,0.05)`
- 모서리: `border-radius: 16px`
- 테두리: `2px solid rgba(255,255,255,0.3)` (다크 배경 위 반투명 화이트)
- 패딩: `24px`
- 호버: `border-color: --accent-yellow` + `background: rgba(255,255,255,0.08)`

---

### 4-2. 카드 내부 구성 패턴

```
┌─────────────────────────────┐
│ ● ● ●          [스티커/이모지] │  ← 도트 장식 + 우측 상단 데코
│                               │
│  카드 타이틀                    │  ← 18–22px / Bold
│                               │
│  본문 텍스트 또는 리스트          │  ← 14–16px / Regular
│  - 항목 1                      │
│  - 항목 2                      │
│                               │
│  [버튼 또는 하이라이트 영역]      │  ← 선택적
└─────────────────────────────┘
```

---

### 4-3. 장식 요소 (Decorative Elements) 상세

#### 이모지 스티커
- 카드 **우측 상단** 또는 **좌측 하단**에 `position: absolute`로 배치
- 크기: `32–48px`
- 사용 이모지: ⭐ 💛 📎 🔥 🐴 🧊 🗑️ ✨
- 살짝 회전: `transform: rotate(-15deg)` 등
- 카드 밖으로 약간 삐져나오는 배치 (`top: -12px; right: -8px`)

#### 하이라이트 마커
- 중요 텍스트 뒤에 **형광펜 효과**
- 구현: `background: linear-gradient(transparent 50%, var(--accent-yellow) 50%)`
- 또는: `box-decoration-break: clone; padding: 2px 6px; background: var(--accent-yellow)`

#### 점선 구분선
- 섹션 내부 구분: `border-top: 2px dashed rgba(255,255,255,0.2)`
- 카드 내부 구분: `border-top: 2px dashed rgba(26,26,46,0.15)`

#### 배경 그리드 패턴
- 페이지 배경에 미세한 **그리드/도트 패턴** 오버레이
- 구현: `background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`
- `background-size: 24px 24px`

---

### 4-4. 버튼

#### Primary 버튼
- 배경: `--accent-yellow`
- 텍스트: `--text-dark` / Bold
- 모서리: `border-radius: 12px`
- 패딩: `12px 28px`
- 그림자: `3px 3px 0px #1A1A2E` (하드 섀도우)
- 호버: `transform: translate(-2px, -2px)` + `box-shadow: 5px 5px 0px #1A1A2E`

#### Secondary 버튼
- 배경: `transparent`
- 테두리: `2px solid #FFFFFF`
- 텍스트: `#FFFFFF` / Medium
- 모서리: `border-radius: 12px`
- 호버: `background: rgba(255,255,255,0.1)`

---

### 4-5. 특수 컴포넌트

#### 빙산 모델 (Iceberg)
- 상단(수면 위): 밝은 컬러 카드 (`--accent-blue` 배경), 작은 높이
- 하단(수면 아래): 다크 그라데이션 카드, 큰 높이 (상단의 3~4배)
- 수면 경계: `border-top: 3px wavy var(--accent-blue)` 또는 SVG 물결선
- 비율로 10% vs 90% 시각적 표현

#### 3기둥 레이아웃
- 3컬럼 그리드, 각 기둥마다 다른 컬러 카드 (옐로 / 핑크 / 블루)
- 기둥 아이콘: 📄 (문서) / ⚙️ (자동화) / 🗑️ (GC)
- 카드 상단에 기둥 번호 스티커: `제1기둥`, `제2기둥`, `제3기둥`

---

## 5. 인터랙션 & 모션

| 요소 | 효과 |
|---|---|
| 섹션 진입 | Fade-in + 살짝 위로 슬라이드 (scroll-triggered) |
| 카드 호버 | 미세한 scale(1.02) + 그림자 추가 |
| 강조 텍스트 | 옐로 하이라이트 마커 효과 (밑줄 또는 배경) |
| 빙산 모델 | 수면 위/아래 시각적 분리 애니메이션 |

---

## 6. 무드 키워드 요약

> **다크 배경 + 네온 팝 컬러 + 스크랩북 장식 + 과감한 타이포**

- 톤: 발랄하지만 전문적
- 느낌: 교육 콘텐츠 + 테크 발표 + Y2K 감성
- 핵심: 다크 위에 컬러 카드가 떠 있는 구조, 시선을 끄는 강조색 활용
