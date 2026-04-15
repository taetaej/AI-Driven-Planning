export default function DocsAsCodeSection() {
  const agents = [
    { name: 'Cursor', emoji: '🖱️' },
    { name: 'Claude Code', emoji: '🟠' },
    { name: 'Codex', emoji: '🧠' },
    { name: 'Gemini CLI', emoji: '💎' },
  ]

  return (
    <section className="section" style={{ alignItems: 'center' }}>
      <div style={{
        background: 'var(--accent-yellow)',
        borderRadius: 24,
        padding: '64px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: 800,
      }}>
        <span className="emoji-sticker" style={{ top: -10, right: -6, transform: 'rotate(15deg)', fontSize: 40 }}>
          ✨
        </span>
        <span className="emoji-sticker" style={{ bottom: -8, left: -6, transform: 'rotate(-20deg)', fontSize: 36 }}>
          🚀
        </span>

        <p style={{ fontSize: 15, fontWeight: 600, color: 'rgba(26,26,46,0.5)', marginBottom: 12 }}>
          그래서 우리의 해답은
        </p>
        <h2 style={{
          fontSize: 64,
          fontWeight: 900,
          color: 'var(--text-dark)',
          lineHeight: 1.1,
          marginBottom: 16,
          letterSpacing: -2,
        }}>
          Docs as Code
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-dark)', opacity: 0.65, marginBottom: 24 }}>
          문서를 코드처럼 작성·관리·배포하는 방법론
        </p>
        <p style={{ fontSize: 20, color: 'var(--text-dark)', fontWeight: 700, marginBottom: 32 }}>
          기획서 = 실제 동작하는 코드 → Single Source of Truth
        </p>

        {/* 선택한 Agent */}
        <div style={{
          background: 'var(--text-dark)',
          borderRadius: 16,
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 20,
        }}>
          <img
            src="https://kiro.dev/images/kiro-wordmark.png?h=0ad65a93"
            alt="Kiro"
            style={{ height: 36, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.7)', margin: 0 }}>우리가 선택한 Agent</p>
          </div>
        </div>

        {/* 다른 Agent 예시 */}
        <p style={{ fontSize: 13, color: 'rgba(26,26,46,0.45)', marginBottom: 10 }}>
          AI Agent 도구는 취향에 따라 선택
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          flexWrap: 'wrap',
        }}>
          {agents.map((a) => (
            <span key={a.name} style={{
              background: 'rgba(26,26,46,0.08)',
              padding: '6px 14px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--text-dark)',
            }}>
              {a.emoji} {a.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
