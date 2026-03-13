'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const optimizations = [
  { label: 'API 응답 속도', after: '42%', width: 42 },
  { label: '알림 연산', after: '80%', width: 80 },
  { label: '날짜 포맷 호출', after: '50%', width: 50 },
];

const techniques = [
  'API 병렬 처리로 데이터 대기 시간 단축',
  'ScrollView → FlatList 전환으로 리스트 가상화',
  'useCallback, useMemo, useRef로 재렌더링 최소화',
  'filter(), 날짜 포맷 등 중복 계산 1회 처리',
  'StyleSheet.create 위치 조정으로 렌더 오버헤드 제거',
];

export default function Slide13() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · PERFORMANCE
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        유저는 렌더링을 기다려주지 않는다
      </motion.h1>

      <div className={styles.body} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 0 }}>
        <div className={styles.twoCol} style={{ gap: 40, alignItems: 'center' }}>
          <div>
            <motion.div className={styles.badge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              최적화 기법
            </motion.div>
            <ul className={styles.featureList} style={{ marginTop: 20, gap: 16 }}>
              {techniques.map((t, i) => (
                <motion.li key={i} className={styles.featureItem} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                  <span style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>{t}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.div className={styles.badge} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              성능 개선 결과
            </motion.div>
            <div className={styles.barChart} style={{ marginTop: 24 }}>
              {optimizations.map((o, i) => (
                <motion.div key={i} className={styles.barRow} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }}>
                  <div className={styles.barLabel}>{o.label}</div>
                  <div className={styles.barTrack}>
                    <motion.div
                      className={`${styles.barFill} ${styles.barFillAccent}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${o.width}%` }}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                    >
                      약 {o.after} 감소
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
