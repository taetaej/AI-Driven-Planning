export default function IcebergSection() {
  return (
    <section className="section" style={{ alignItems: 'center' }}>
      <h2 className="section-title" style={{ textAlign: 'center' }}>
        AI 기획의 <span style={{ color: 'var(--accent-pink)' }}>오해와 진실</span>
      </h2>

      {/* 인용 블록 */}
      <div style={{
        marginBottom: 40,
        textAlign: 'center',
        maxWidth: 700,
      }}>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', fontWeight: 600 }}>
          🚨 실망주의
        </p>
        <p style={{
          fontSize: 36,
          fontWeight: 900,
          color: 'var(--accent-white)',
          margin: 0,
          lineHeight: 1.3,
        }}>
          "<span style={{ color: 'var(--accent-yellow)' }}>뚝딱</span> 만들어주는
          <br />
          마법 지팡이는 없다."
        </p>
      </div>

      {/* 빙산 SVG + 라벨 */}
      <div style={{ position: 'relative', width: '100%', maxWidth: 700 }}>
        <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
          {/* 하늘 */}
          <rect width="520" height="160" fill="#1A1A2E" />

          {/* 바다 위 (연한 블루) */}
          <rect y="160" width="520" height="320" fill="#2a3a5c" />

          {/* 바다 물결 레이어 */}
          <path d="M0 180 Q65 160 130 180 T260 180 T390 180 T520 180 V480 H0 Z" fill="#1e3050" opacity="0.5" />
          <path d="M0 200 Q65 185 130 200 T260 200 T390 200 T520 200 V480 H0 Z" fill="#162540" opacity="0.4" />

          {/* 수면선 */}
          <path d="M0 160 Q40 150 80 160 T160 160 T240 160 T320 160 T400 160 T480 160 T520 160" stroke="var(--accent-blue)" strokeWidth="2.5" fill="none" opacity="0.7" />

          {/* 빙산 수면 위 (작게) */}
          <polygon points="260,120 235,155 225,158 295,158 285,155" fill="#e8f4f8" />
          <polygon points="260,120 275,140 285,155 295,158 260,158" fill="#d0e8f0" />
          <polygon points="260,120 245,138 235,155 225,158 260,158" fill="#f0f8fc" />
          <polygon points="260,120 255,135 268,133" fill="#ffffff" opacity="0.8" />

          {/* 빙산 수면 아래 (크게) */}
          <polygon points="215,165 160,260 180,380 260,450 340,380 360,260 305,165" fill="#3a6b8c" />
          <polygon points="260,165 305,165 360,260 340,380 260,450" fill="#2d5570" />
          <polygon points="260,165 215,165 160,260 180,380 260,450" fill="#4a7d9c" />
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
