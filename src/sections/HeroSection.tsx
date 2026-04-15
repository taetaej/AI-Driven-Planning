export default function HeroSection() {
  return (
    <section className="section hero-section">
      {/* 배경 장식: 곡선 라인들 */}
      <div className="hero-deco-lines">
        <svg className="hero-arc hero-arc--1" viewBox="0 0 600 200" fill="none">
          <path d="M0 200 Q300 -50 600 200" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        </svg>
        <svg className="hero-arc hero-arc--2" viewBox="0 0 700 250" fill="none">
          <path d="M0 250 Q350 -30 700 250" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 반짝이 장식 */}
      <div className="sparkle sparkle--1">✦</div>
      <div className="sparkle sparkle--2">✦</div>
      <div className="sparkle sparkle--3">✦</div>
      <div className="hero-slash">
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </div>

      {/* 메인 타이틀 */}
      <h1 className="hero-title hero-title--center">
        AI로 하는 기획
        <br />
        <span className="hero-title--accent">생산성 향상</span>과{' '}
        <span className="hero-title--pink">FE 협업</span> 사례
      </h1>

      {/* 하단 바 */}
      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <div className="hero-dots">
            <span className="hero-dot hero-dot--filled" />
            <span className="hero-dot hero-dot--filled" />
            <span className="hero-dot hero-dot--outline" />
          </div>
          <span className="hero-bottom-caption">AX팀</span>
        </div>

        {/* 공유회 목적 배지 + 내용 */}
        <div className="hero-purpose-block">
          <div className="hero-sticker-badge">
            <span>공유회 목적!</span>
          </div>
          <div className="hero-purpose">
            <div className="hero-purpose-item">
              <span className="hero-purpose-x">✕</span> 정답 제시 →{' '}
              <span className="highlight">시행착오 공유</span>로 러닝 커브 단축
            </div>
            <div className="hero-purpose-item">
              <span className="hero-purpose-x">✕</span> 특정 툴 홍보 → AI 에이전트는{' '}
              <span className="highlight">선택지</span>일 뿐
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
