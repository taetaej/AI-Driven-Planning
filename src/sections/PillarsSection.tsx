export default function PillarsSection() {
  const pillars = [
    {
      num: '제1기둥',
      emoji: '📄',
      title: '컨텍스트 가이드',
      subtitle: 'Context Guide',
      color: 'var(--accent-yellow)',
      cardClass: 'card--yellow',
      items: [
        '기술 스택 및 인프라 명시 (React, TypeScript 등)',
        '표준 UI 컴포넌트 강제 매핑 (Shadcn, MUI)',
        '디자인 시스템(Font/Color) 사전 주입',
        '기획 에셋 통합 (IA, 정책서, 기능 정의, Skeleton)',
      ],
      point: "AI가 따라야 할 '가이드라인'",
    },
    {
      num: '제2기둥',
      emoji: '⚙️',
      title: '자동 제어 루프',
      subtitle: 'Automated Control',
      color: 'var(--accent-pink)',
      cardClass: 'card--pink',
      items: [
        '규칙 위반 시 자동 롤백 및 교정 루프 가동',
        'Steering(조향) 제어를 통한 실시간 규칙 준수',
        '에이전트 행동 가드레일(Guardrail) 구축',
      ],
      point: "시스템이 스스로 방향을 트는 'Steering'",
    },
    {
      num: '제3기둥',
      emoji: '🧹',
      title: '클린 코드 매니지먼트',
      subtitle: 'Clean Code Management',
      color: 'var(--accent-blue)',
      cardClass: 'card--blue',
      items: [
        'AI 생성 안티 패턴 및 코드 부채(Garbage) 정기 소거',
        '지속적인 리팩터링을 통한 코드베이스 품질 유지',
        '모델 오학습 방지 및 지식 순도 최적화',
      ],
      point: "'코드 부채 해결' + 품질 관리",
    },
  ]

  return (
    <section className="section">
      <h2 className="section-title">
        우리가 세운 <span style={{ color: 'var(--accent-yellow)' }}>3개의 기둥</span>
      </h2>

      <div className="grid-3">
        {pillars.map((p) => (
          <div key={p.num} className={`card ${p.cardClass}`} style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 380,
          }}>
            <span className="emoji-sticker" style={{ top: -18, right: -8, fontSize: 32 }}>
              {p.emoji}
            </span>
            <span className="pillar-badge">{p.num}</span>
            <div className="card-title" style={{ fontSize: 22 }}>{p.title}</div>
            <p className="caption" style={{ marginBottom: 16, opacity: 0.7 }}>{p.subtitle}</p>
            <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {p.items.map((item, i) => (
                <li key={i} className="body-text" style={{ fontSize: 14 }}>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{
              marginTop: 16,
              padding: '12px 16px',
              background: 'rgba(0,0,0,0.12)',
              borderRadius: 12,
              fontSize: 13,
              fontWeight: 700,
            }}>
              💡 {p.point}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
