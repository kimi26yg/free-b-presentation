'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const team = [
  { name: '김용관', role: '팀장 · PM · 백엔드 총괄' },
  { name: '강혜린', role: '운영관리자 웹 총괄' },
  { name: '박지혁', role: '강사앱 총괄 · OCR · 대시보드' },
  { name: '이민웅', role: '강사앱 필수기능 · API · GPS · 알림' },
];

export default function Slide24() {
  return (
    <div className={`${styles.slide} ${styles.center}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 24 }}
      >
        <img src="/bee.svg" alt="free-b" style={{ width: 64, height: 64, filter: 'drop-shadow(0 0 30px rgba(245, 166, 35, 0.3))' }} />
      </motion.div>

      <motion.h1
        className={styles.title}
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Free-B는 운영 판단을 다시 구조화하는 시스템입니다
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        배정·계약·체크인을 하나의 흐름으로 연결해, 운영자와 강사가 같은 지도를 보게 합니다
      </motion.p>

      <motion.div
        style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {['One Flow', 'Shared State', '판단은 사람, 기록은 시스템'].map((t, i) => (
          <motion.span
            key={i}
            className={styles.badge}
            style={{ fontSize: '0.9rem', padding: '8px 20px' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={styles.teamGrid}
        style={{ marginTop: 48 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {team.map((m, i) => (
          <motion.div
            key={i}
            className={styles.teamMember}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.1 }}
          >
            <div className={styles.teamName}>{m.name}</div>
            <div className={styles.teamRole}>{m.role}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
