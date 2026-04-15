export default function CollabSection() {
  return (
    <section className="section">
      <h2 className="section-title" style={{ textAlign: 'center' }}>
        협업은 <span style={{ color: 'var(--accent-blue)' }}>이렇게 바뀌었다</span>
      </h2>

      <div className="grid-2" style={{ gap: 28 }}>
        {/* 기획자 간 협업 */}
        <div className="card card--standard" style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span className="emoji-sticker" style={{ top: -16, right: -10, transform: 'rotate(-12deg)' }}>
            🤝
          </span>
          <div className="notebook-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot dot--hollow" />
          </div>

          <div style={{
            display: 'inline-block',
            background: 'var(--accent-blue)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 800,
            width: 'fit-content',
            marginBottom: 8,
            boxShadow: '3px 3px 0px var(--text-dark)',
            transform: 'rotate(-1deg)',
          }}>Sync & Share</div>
          <div className="card-title" style={{ fontSize: 20 }}>기획자 간 협업</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16, flex: 1 }}>
            <CollabItem
              label="Code-base 기획"
              desc="Git을 통한 형상 관리 및 버전 컨트롤"
              color="var(--accent-blue)"
            />
            <CollabItem
              label="브랜치 전략"
              desc="작업 단위별(Feature) 또는 개인별 브랜치 운영"
              color="var(--accent-blue)"
            />
            <CollabItem
              label="디자인 시스템 동기화"
              desc="공통 레이아웃 및 Shadcn 컴포넌트 사전 정의"
              color="var(--accent-blue)"
            />
            <CollabItem
              label="협업 컨벤션"
              desc=".md 파일을 통한 실시간 정책 공유 및 가이드화"
              color="var(--accent-blue)"
            />
          </div>
        </div>

        {/* FE 핸드오프 */}
        <div className="card card--standard" style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span className="emoji-sticker" style={{ top: -16, right: -10, transform: 'rotate(15deg)' }}>
            🚀
          </span>
          <div className="notebook-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot dot--hollow" />
          </div>

          <div style={{
            display: 'inline-block',
            background: 'var(--accent-pink)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 800,
            width: 'fit-content',
            marginBottom: 8,
            boxShadow: '3px 3px 0px var(--text-dark)',
            transform: 'rotate(1deg)',
          }}>The New Handoff</div>
          <div className="card-title" style={{ fontSize: 20 }}>FE 개발자와의 핸드오프</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 16, flex: 1 }}>
            <CollabItem
              label="Vercel 기반 즉시 배포"
              desc="기획 산출물을 URL로 즉시 공유 및 인터랙션 확인"
              color="var(--accent-pink)"
            />
            <CollabItem
              label="레포지토리 직접 전달"
              desc="개발자가 Repo를 Clone하여 바로 비즈니스 로직 구현 착수"
              color="var(--accent-pink)"
            />
            <CollabItem
              label="마크업/퍼블리싱 공수 제로화"
              desc="AI가 생성한 완성형 CSS/컴포넌트를 그대로 활용"
              color="var(--accent-pink)"
            />
            <CollabItem
              label="커뮤니케이션 비용 최소화"
              desc="'가짜 로직' 설명 대신 코드 자체로 소통"
              color="var(--accent-pink)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CollabItem({ label, desc, color }: { label: string; desc: string; color: string }) {
  return (
    <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: 6,
        minHeight: 36,
        borderRadius: 3,
        background: color,
        flexShrink: 0,
        marginTop: 2,
      }} />
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  )
}
