'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './slides.module.css';

function useCountUp(target: number, duration: number = 2000, delay: number = 0, suffix: string = '') {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress >= 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return value + suffix;
}

export default function Slide15() {
  const v1 = useCountUp(90, 2000, 500, '%');
  const v2 = useCountUp(83, 2000, 700, '.7%');
  const v3 = useCountUp(400, 2000, 900, '만');

  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        IMPACT
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        시스템이 바뀌면 운영 숫자가 달라집니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        상태 연결 하나로 배정 판단, 계약 누락, 체크인 완료율이 함께 개선됩니다
      </motion.p>

      <div className={styles.body}>
        <div className={styles.bodyRow}>
          <motion.div className={styles.statCard} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <div className={styles.statValue}>{v1}</div>
            <div className={styles.statLabel}>배정 시간 단축</div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
            <div className={styles.statValue} style={{ fontSize: '4rem' }}>ZERO</div>
            <div className={styles.statLabel}>수기 입력</div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
            <div className={styles.statValue}>{v2}</div>
            <div className={styles.statLabel}>강사 커뮤니케이션 불량 호소<br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Leapers 2024</span></div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
            <div className={styles.statValue}>{v3}</div>
            <div className={styles.statLabel}>국내 프리랜서 시장<br /><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>고용노동부 2024</span></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
