'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './slides.module.css';

const steps = [
  { eyebrow: "배정 직후", title: "강사에게 요청 발송", body: "요청이 기록되길 바라지만 실제 상태는 메시지창에 흩어집니다." },
  { eyebrow: "다음날 아침", title: "계약 발송 여부 확인", body: "완료 상태를 한 곳에서 볼 수 없어 다시 열어보고 다시 묻습니다." },
  { eyebrow: "수업 당일 오전", title: "출발 재확인", body: "이미 알고 있어야 할 것을 운영자가 다시 확인합니다." },
  { eyebrow: "수업 2시간 전", title: "전화로 출발 여부 체크", body: "긴장감은 커지는데 근거는 남지 않습니다." },
  { eyebrow: "수업 완료 후", title: "체크인 기록 정리", body: "반복될 일을 수기로 마무리하면서 하루가 끝납니다." },
];

export default function Slide02() {
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        if (beatIndex < steps.length - 1) {
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

    window.addEventListener('keydown', handleKeyDown, true); // true for capture phase
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [beatIndex]);

  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        TIMELINE
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        관리자의 하루
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        문제는 일이 많아서가 아니라, 같은 수업의 상태를 서로 다른 정보 환경에서 경험한다는 점입니다.
      </motion.p>

      <div className={styles.body} style={{ marginTop: 40 }}>
        <div className={styles.timelineLayout}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index <= beatIndex ? 1 : 0.2, y: index <= beatIndex ? 0 : 20 }}
              transition={{ delay: index === beatIndex ? 0.2 : 0 }}
            >
              <div className={styles.timelineLine} />
              <div className={styles.timelineNode} style={{ opacity: index <= beatIndex ? 1 : 0.5 }} />
              <div className={styles.timelineContent}>
                <p className={styles.itemEyebrow}>{step.eyebrow}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Beat indicators (optional, matching the codex style loosely) */}
      <div style={{ position: 'absolute', bottom: 40, left: 64, display: 'flex', gap: 12 }}>
        {steps.map((_, i) => (
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
