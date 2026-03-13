'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

export default function Slide16() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        MARKET
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        프리랜서 시장은 폭발 중, 관리 인프라는 아직 엑셀입니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        수요는 이미 검증됐습니다. 운영 도구만 뒤처져 있습니다.
      </motion.p>

      <div className={styles.body}>
        <div className={styles.bodyRow}>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className={styles.statValue}>400만</div>
            <div className={styles.statLabel}>국내 프리랜서 인구<br />관리 인프라 없이 성장하는 시장</div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <div className={styles.statValue}>1조+</div>
            <div className={styles.statLabel}>연간 플랫폼 거래액<br />매년 50% 성장</div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <div className={styles.statValue}>12.8%</div>
            <div className={styles.statLabel}>시장 CAGR<br />글로벌 프리랜서 플랫폼 확대</div>
          </motion.div>
        </div>

        <motion.ul className={styles.featureList} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <li className={styles.featureItem}>크몽 등록 전문가 31만 명 · 5년 3배 성장 / 71%가 2030세대</li>
          <li className={styles.featureItem}>크몽·숨고 연간 거래액 1조 원 이상, 매년 50% 성장</li>
          <li className={styles.featureItem}>글로벌 프리랜서 플랫폼 시장 CAGR 12.8% (2026~2035)</li>
        </motion.ul>
      </div>
    </div>
  );
}
