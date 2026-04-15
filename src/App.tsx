import { useEffect, useRef, useState, useCallback } from 'react'
import HeroSection from './sections/HeroSection'
import WhySection from './sections/WhySection'
import DocsAsCodeSection from './sections/DocsAsCodeSection'
import IcebergSection from './sections/IcebergSection'
import HarnessSection from './sections/HarnessSection'
import PillarsSection from './sections/PillarsSection'
import CollabSection from './sections/CollabSection'
import OutroSection from './sections/OutroSection'

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const isScrolling = useRef(false)
  const totalSlides = 8

  const scrollToSlide = useCallback((index: number) => {
    const sections = wrapperRef.current?.querySelectorAll('.section')
    if (!sections || index < 0 || index >= sections.length) return
    isScrolling.current = true
    sections[index].scrollIntoView({ behavior: 'smooth' })
    setCurrent(index)
    setTimeout(() => { isScrolling.current = false }, 800)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling.current) return
      if (e.deltaY > 0 && current < totalSlides - 1) {
        scrollToSlide(current + 1)
      } else if (e.deltaY < 0 && current > 0) {
        scrollToSlide(current - 1)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return
      if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') && current < totalSlides - 1) {
        e.preventDefault()
        scrollToSlide(current + 1)
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && current > 0) {
        e.preventDefault()
        scrollToSlide(current - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [current, scrollToSlide])

  // 진입 시 모든 섹션 visible 처리 (현재 슬라이드 기준)
  useEffect(() => {
    const sections = wrapperRef.current?.querySelectorAll('.section')
    sections?.forEach((s, i) => {
      if (i <= current) s.classList.add('visible')
    })
  }, [current])

  return (
    <div className="page-wrapper" ref={wrapperRef}>
      <HeroSection />
      <WhySection />
      <DocsAsCodeSection />
      <IcebergSection />
      <HarnessSection />
      <PillarsSection />
      <CollabSection />
      <OutroSection />

      {/* 슬라이드 인디케이터 */}
      <div className="slide-indicator">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`slide-dot ${i === current ? 'slide-dot--active' : ''}`}
            onClick={() => scrollToSlide(i)}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
