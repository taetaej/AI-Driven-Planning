export default function HarnessSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-yellow)' }}>하네스 엔지니어링</span>이란?
      </h2>

      <div className="card card--notebook" style={{ marginBottom: 32, position: 'relative' }}>
        <span className="emoji-sticker" style={{ top: -16, right: -10, transform: 'rotate(10deg)' }}>
          🐎
        </span>
        <div className="notebook-dots">
          <span className="dot" />
          <span className="dot dot--hollow" />
          <span className="dot" />
        </div>
        <div className="card-title">하네스(Harness)란?</div>
        <p className="body-text">
          AI는 본능대로 날뛰는 <strong>야생말</strong>과 같다.
          <br />
          의도대로 정확히 달리게 하려면 촘촘한 <span className="highlight">마구(Harness)</span>가 필요하다.
        </p>
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20 }}>
        해결해야 할 '날뛰는 야생마' 🐴
      </h3>

      <div className="grid-2">
        <div className="card card--pink" style={{ position: 'relative' }}>
          <span
            className="card--sticker yellow"
            style={{
              position: 'absolute',
              top: -14,
              left: 16,
              transform: 'rotate(-3deg)',
              fontSize: 14,
              padding: '6px 14px',
            }}
          >
            문제 #1
          </span>
          <div className="card-title" style={{ marginTop: 12, color: 'var(--accent-white)' }}>
            컨텍스트 부패
          </div>
          <p className="caption" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>
            Context Decay
          </p>
          <p className="body-text">작업이 길어지면 AI가 앞선 정책을 잊어버리는 현상</p>
        </div>

        <div className="card card--blue" style={{ position: 'relative' }}>
          <span
            className="card--sticker yellow"
            style={{
              position: 'absolute',
              top: -14,
              left: 16,
              transform: 'rotate(2deg)',
              fontSize: 14,
              padding: '6px 14px',
            }}
          >
            문제 #2
          </span>
          <div className="card-title" style={{ marginTop: 12, color: 'var(--accent-white)' }}>
            규칙과 울타리 부재
          </div>
          <p className="body-text">
            지능이 부족해서가 아니라, '하면 안 되는 것'에 대한 <strong>구조적 제약이 없을 때</strong> 생기는 참사
          </p>
        </div>
      </div>
    </section>
  )
}
