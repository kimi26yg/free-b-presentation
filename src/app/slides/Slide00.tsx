'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

export default function Slide00() {
  return (
    <div className={`${styles.slide} ${styles.center}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ marginBottom: 32 }}
      >
        <img src="/bee.svg" alt="free-b" style={{ width: 80, height: 80, filter: 'drop-shadow(0 0 40px rgba(245, 166, 35, 0.3))' }} />
      </motion.div>

      <motion.p
        className={styles.tag}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        인텔 AI 인재양성교육 · 앱 과정
      </motion.p>

      <motion.h1
        className={styles.title}
        style={{ fontSize: '3rem', textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        운영을 하나의 흐름으로<br />다시 설계합니다
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ marginTop: 24 }}
      >
        <span style={{
          fontSize: '2rem',
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          free-b
        </span>
      </motion.div>

      <motion.p
        className={styles.subtitle}
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        배정 · 계약 · 체크인 — 강사 운영의 자동화 AI 통합 플랫폼
      </motion.p>
    </div>
  );
}
