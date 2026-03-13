'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const insights = [
  { label: 'INSIGHT 1', title: '속도가 아니라 가시성', text: '운영자가 원하는 것은 "더 빠른 연락"이 아니라 "확인하지 않아도 아는 상태"입니다.' },
  { label: 'INSIGHT 2', title: '세 단계는 하나의 여정', text: '배정·계약·체크인은 세 가지 기능이 아니라 하나의 연속된 여정입니다. 시스템이 분리하면 사람이 연결해야 합니다.' },
  { label: 'INSIGHT 3', title: '강사 UX가 운영 데이터를 만든다', text: '체크인 기록, 서명 완료, 응답 속도 — 이 데이터는 강사가 쉽게 행동해야 만들어집니다.' },
];

export default function Slide03c() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        INSIGHTS
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        핵심 인사이트 3가지
      </motion.h1>

      <div className={styles.body}>
        <div className={styles.bodyRow}>
          {insights.map((ins, i) => (
            <motion.div
              key={i}
              className={styles.insightCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <div className={styles.insightLabel}>{ins.label}</div>
              <div className={styles.insightTitle}>{ins.title}</div>
              <div className={styles.insightText}>{ins.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
