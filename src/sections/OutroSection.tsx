export default function OutroSection() {
  return (
    <section className="section" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
        Next Up
      </p>
      <h2 style={{
        fontSize: 48,
        fontWeight: 900,
        color: 'var(--text-primary)',
        textAlign: 'center',
        lineHeight: 1.3,
        letterSpacing: -1,
        marginBottom: 48,
      }}>
        패널 인터뷰를 통한
        <br />
        <span style={{ color: 'var(--accent-yellow)' }}>삽질로 얻어낸 꿀팁</span> 공유 🎤
      </h2>

      <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
        {[
          { name: '신지아', num: '패널 1', color: 'var(--accent-yellow)' },
          { name: '최윤지', num: '패널 2', color: 'var(--accent-pink)' },
          { name: '최은서', num: '패널 3', color: 'var(--accent-blue)' },
        ].map((p) => (
          <div key={p.num} style={{
            background: p.color,
            color: p.color === 'var(--accent-yellow)' ? 'var(--text-dark)' : '#fff',
            padding: '20px 36px',
            borderRadius: 16,
            textAlign: 'center',
            boxShadow: '4px 4px 0px var(--text-dark)',
            transform: p.num === '패널 2' ? 'rotate(0deg)' : p.num === '패널 1' ? 'rotate(-2deg)' : 'rotate(2deg)',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.7, marginBottom: 4 }}>{p.num}</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
