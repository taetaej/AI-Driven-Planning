export default function WhySection() {
  return (
    <section className="section">
      <h2 className="section-title">
        왜 <span style={{ color: 'var(--accent-pink)' }}>기존 툴</span>을 버렸나?
      </h2>

      {/* 노트북 스프링 비교 카드 */}
      <div style={{
        display: 'flex',
        borderRadius: 20,
        overflow: 'hidden',
        background: '#111',
      }}>
        {/* 왼쪽: 전통적 기획 툴 */}
        <div style={{
          flex: 1,
          background: '#fff',
          color: '#1A1A2E',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>
          <span style={{
            display: 'inline-block',
            background: 'var(--accent-blue)',
            color: '#fff',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 800,
            width: 'fit-content',
          }}>Axure / Figma</span>
          <p style={{ fontSize: 13, opacity: 0.5, margin: 0, fontWeight: 600 }}>
            "정적 이미지와 텍스트의 늪"
          </p>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <WhyItem color="var(--accent-blue)">
              인터랙션은 화려하나 본질은 <strong>'가짜 로직(Pseudo-code)'</strong>
            </WhyItem>
            <WhyItem color="var(--accent-blue)">
              상태(State)와 비즈니스 로직을 구구절절 텍스트로 설명해야 함
            </WhyItem>
            <WhyItem color="var(--accent-blue)">
              기획서 자체가 개발을 위한 데이터나 코드가 되지 못함
            </WhyItem>
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: 14,
            borderTop: '2px dashed rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span className="notebook-verdict">결론</span>
            <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.65 }}>
              문서의 내용을 코드로 '다시 번역'해야 하는 비효율
            </span>
          </div>
        </div>

        {/* 스프링 */}
        <div style={{
          width: 36,
          background: '#111',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          padding: '20px 0',
          flexShrink: 0,
        }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#222',
              border: '3px solid #555',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)',
            }} />
          ))}
        </div>

        {/* 오른쪽: AI 디자인 툴 */}
        <div style={{
          flex: 1,
          background: '#fff',
          color: '#1A1A2E',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>
          <span style={{
            display: 'inline-block',
            background: 'var(--accent-pink)',
            color: '#fff',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 800,
            width: 'fit-content',
          }}>Figma AI / Pencil?</span>
          <p style={{ fontSize: 13, opacity: 0.5, margin: 0, fontWeight: 600 }}>
            "예쁜 껍데기만 만드는 자동화"
          </p>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <WhyItem color="var(--accent-pink)">
              비주얼은 뽑아주지만 인터랙션과 깊은 로직은 담지 못함
            </WhyItem>
            <WhyItem color="var(--accent-pink)">
              우리는 단순한 '그림'이 아니라 복잡한 <span className="highlight--pink">'솔루션'</span>을 만드는 팀
            </WhyItem>
            <WhyItem color="var(--accent-pink)">
              결과물을 받아도 개발자가 DOM 구조부터 다시 설계해야 함
            </WhyItem>
          </ul>

          <div style={{
            marginTop: 'auto',
            paddingTop: 14,
            borderTop: '2px dashed rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span className="notebook-verdict">결론</span>
            <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.65 }}>
              개발자의 '번역 및 재구축' 과정이 전혀 단축되지 않음
            </span>
          </div>
        </div>
      </div>

      {/* 하단 Pain Point */}
      <div style={{
        marginTop: 32,
        background: 'rgba(255,92,168,0.1)',
        border: '2px solid var(--accent-pink)',
        borderRadius: 16,
        padding: '24px 28px',
        display: 'flex',
        gap: 24,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-pink)', marginBottom: 6 }}>
            💬 현장의 목소리
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'var(--text-primary)' }}>
            "디자이너·퍼블리셔의 부재가 곧 프론트엔드 개발자의 <strong>독박 코딩</strong>으로 이어지는 구조"
          </p>
        </div>
        <div style={{ width: 2, background: 'rgba(255,92,168,0.3)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-pink)', marginBottom: 6 }}>
            📉 비즈니스 임팩트
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'var(--text-primary)' }}>
            "기획과 개발 사이의 막대한 <strong>번역 비용</strong>이 전체 프로덕트 속도를 저해"
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyItem({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <li style={{ fontSize: 14, display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.6 }}>
      <div style={{
        width: 6,
        minHeight: 20,
        borderRadius: 3,
        background: color,
        flexShrink: 0,
        marginTop: 3,
      }} />
      <span>{children}</span>
    </li>
  )
}
