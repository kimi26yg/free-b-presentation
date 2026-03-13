'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './slides.module.css';

const brands = [
  { name: 'free-b', desc: '강사 · 교육 출강 운영', current: true },
  { name: 'free-fit', desc: '피트니스 트레이너 · PT 파견', current: false },
  { name: 'free-care', desc: '요양보호사 · 돌봄 인력 관리', current: false },
  { name: 'free-build', desc: '건설 · 시공 일용직 배정', current: false },
  { name: 'free-shoot', desc: '사진 · 영상 크루 섭외 운영', current: false },
  { name: 'free-event', desc: '행사 스태프 · MC 배정', current: false },
];

export default function Slide19() {
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        if (beatIndex < 1) {
          e.stopPropagation();
          e.preventDefault();
          setBeatIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (beatIndex > 0) {
          e.stopPropagation();
          e.preventDefault();
          setBeatIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true); // capture phase
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [beatIndex]);

  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        VISION
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        Free-B는 강사 배정에서 시작해 프리랜서 운영 인프라 전체로 확장합니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        핵심 구조는 하나 — 배정 · 계약 · 체크인. 업종만 다릅니다.
      </motion.p>

      <div className={styles.body} style={{ marginTop: 40 }}>
        {/* Override grid Template for 6 columns */}
        <div className={styles.timelineLayout} style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
          {brands.map((b, index) => {
            const isActive = beatIndex === 1 || index === 0;
            return (
              <motion.div
                key={b.name}
                className={`${styles.timelineItem} ${b.current ? styles.current : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isActive ? 1 : 0.2, y: isActive ? 0 : 20 }}
                transition={{ delay: beatIndex === 1 && index > 0 ? (index - 1) * 0.1 : 0 }}
              >
                <div className={styles.timelineLine} />
                <div className={styles.timelineNode} style={{ opacity: isActive ? 1 : 0.5, backgroundColor: b.current ? 'var(--accent)' : undefined, borderColor: b.current ? 'var(--accent)' : undefined }} />
                <div className={styles.timelineContent}>
                  <h3 style={{ minHeight: '1.2em' }}>{b.name}</h3>
                  <p>{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Beat indicators (optional, similar style to Slide02) */}
      <div style={{ position: 'absolute', bottom: 40, left: 64, display: 'flex', gap: 12 }}>
        {[0, 1].map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: i <= beatIndex ? 'var(--accent)' : 'rgba(255,255,255,0.2)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
