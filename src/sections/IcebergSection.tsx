export default function IcebergSection() {
  return (
    <section className="section" style={{ alignItems: 'center' }}>
      <h2 className="section-title" style={{ textAlign: 'center' }}>
        AI 기획의 <span style={{ color: 'var(--accent-pink)' }}>오해와 진실</span>
      </h2>

      {/* 인용 블록 */}
      <div style={{
        background: 'var(--accent-yellow)',
        borderRadius: 16,
        padding: '16px 28px',
        marginBottom: 48,
        maxWidth: 600,
        textAlign: 'center',
        boxShadow: '4px 4px 0px var(--text-dark)',
      }}>
        <p style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-dark)', margin: 0 }}>
          🚨 "실망스러우시겠지만, '뚝딱' 만들어지는 마법은 없습니다."
        </p>
      </div>

      {/* 빙산 SVG + 라벨 */}
      <div style={{ position: 'relative', width: '100%', maxWidth: 700 }}>
        <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
          {/* 하늘 */}
          <rect width="520" height="200" fill="#1A1A2E" />

          {/* 바다 위 (연한 블루) */}
          <rect y="200" width="520" height="280" fill="#2a3a5c" />

          {/* 바다 물결 레이어 */}
          <path d="M0 220 Q65 200 130 220 T260 220 T390 220 T520 220 V480 H0 Z" fill="#1e3050" opacity="0.5" />
          <path d="M0 240 Q65 225 130 240 T260 240 T390 240 T520 240 V480 H0 Z" fill="#162540" opacity="0.4" />

          {/* 수면선 */}
          <path d="M0 200 Q40 190 80 200 T160 200 T240 200 T320 200 T400 200 T480 200 T520 200" stroke="var(--accent-blue)" strokeWidth="2.5" fill="none" opacity="0.7" />

          {/* 빙산 수면 위 (밝은 흰색/하늘색) */}
          <polygon points="260,60 200,140 180,195 340,195 320,140" fill="#e8f4f8" />
          <polygon points="260,60 280,100 320,140 340,195 260,195 260,60" fill="#d0e8f0" />
          <polygon points="260,60 240,90 230,130 200,140 180,195 260,195" fill="#f0f8fc" />
          {/* 빙산 꼭대기 하이라이트 */}
          <polygon points="260,60 250,90 270,85" fill="#ffffff" opacity="0.8" />

          {/* 빙산 수면 아래 (어두운 블루) */}
          <polygon points="170,205 140,280 180,380 260,440 340,380 380,280 350,205" fill="#3a6b8c" />
          <polygon points="260,205 350,205 380,280 340,380 260,440" fill="#2d5570" />
          <polygon points="260,205 170,205 140,280 180,380 260,440" fill="#4a7d9c" />
        </svg>

        {/* 수면 위 라벨 */}
        <div style={{
          position: 'absolute',
          top: '18%',
          right: '5%',
          background: 'var(--accent-yellow)',
          color: 'var(--text-dark)',
          padding: '8px 16px',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 800,
          boxShadow: '3px 3px 0px var(--text-dark)',
          transform: 'rotate(2deg)',
        }}>
          수면 위 10%
          <br />
          <span style={{ fontSize: 11, fontWeight: 600 }}>AI가 생성한 깔끔한 UI</span>
        </div>

        {/* 수면 아래 라벨 */}
        <div style={{
          position: 'absolute',
          bottom: '18%',
          left: '5%',
          background: 'var(--accent-pink)',
          color: '#fff',
          padding: '10px 18px',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 800,
          boxShadow: '3px 3px 0px rgba(0,0,0,0.3)',
          transform: 'rotate(-2deg)',
        }}>
          수면 아래 90%
          <br />
          <span style={{ fontSize: 11, fontWeight: 600 }}>기획자의 '하네스 엔지니어링'</span>
        </div>

        {/* 장식 이모지 */}
        <span style={{ position: 'absolute', top: '5%', left: '8%', fontSize: 28, transform: 'rotate(-15deg)' }}>🧊</span>
        <span style={{ position: 'absolute', bottom: '8%', right: '8%', fontSize: 24, transform: 'rotate(10deg)' }}>🏗️</span>
      </div>
    </section>
  )
}
