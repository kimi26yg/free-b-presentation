'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const cards = [
  { icon: '📞', title: '배정 불안', text: '누가 갈 수 있는지 알 수가 없었습니다. 후보는 많지만 상태가 보이지 않아 전화를 반복했습니다.' },
  { icon: '📋', title: '계약 불안', text: '서명이 됐는지 확인하려면 다시 물어야 했습니다. 계약 상태가 실시간으로 보이지 않아 누락이 반복됐습니다.' },
  { icon: '🚗', title: '체크인 불안', text: '출발했는지 알 방법이 없었습니다. 도착 시간을 모르니 대비도, 기록도 늦었습니다.' },
];

export default function Slide01() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        PROBLEM
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        관리자는 매일 반복되는 업무에 갇혀있습니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        프리랜서 83.7%가 관리자 커뮤니케이션 불량을 호소합니다 — Leapers 2024
      </motion.p>

      <div className={styles.body}>
        <div className={styles.bodyRow}>
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              <div className={styles.cardIcon}>{c.icon}</div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardText}>{c.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
