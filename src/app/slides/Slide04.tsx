'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const states = [
  { num: '01', title: '배정 확정', text: 'AI 추천으로 후보를 자동 정렬하고 추천 이유를 함께 보여줍니다.' },
  { num: '02', title: '계약 서명', text: '전자서명과 확인 시점을 같은 흐름으로 실시간 동기화합니다.' },
  { num: '03', title: '출강 체크인', text: '출발·도착·로그 기록을 운영 근거로 자동 남깁니다.' },
];

export default function Slide04() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        SOLUTION
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        배정, 계약, 체크인을 하나의 상태 흐름으로 묶었습니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        개별 기능을 따로 자동화하는 대신, 상태 전이의 연결을 먼저 설계했습니다
      </motion.p>

      <div className={styles.body}>
        <div className={styles.steps}>
          {states.map((s, i) => (
            <motion.div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 20, flex: 1 }}>
              {i > 0 && (
                <motion.div
                  className={styles.stepArrow}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  →
                </motion.div>
              )}
              <motion.div
                className={styles.step}
                style={{ flex: 1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2 }}
              >
                <div className={styles.stepNumber}>{s.num}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepText}>{s.text}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
