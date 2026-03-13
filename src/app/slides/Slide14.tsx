'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const cards = [
  { icon: '📸', title: 'AI 기능 1 — MLKit 계약 인식', text: '외부 계약서를 찍으면 앱이 자동으로 인식하고 등록합니다.' },
  { icon: '📍', title: 'AI 기능 2 — GPS 스마트 알림', text: '출발하면 앱이 먼저 알립니다. 확인 전화가 사라집니다.' },
  { icon: '✋', title: '강사 경험 — 최소 행동 설계', text: '수락·서명·체크인이 자연스러운 행동 흐름이 됩니다.' },
];

export default function Slide14() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · SUMMARY
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        강사는 수락 한 번, 서명 한 번, 체크인 한 번으로 운영에 참여합니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        행정을 배우지 않아도 됩니다. 필요한 행동만 순서대로 나옵니다.
      </motion.p>

      <div className={styles.body} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 0 }}>
        <div className={styles.bodyRow}>
          {cards.map((c, i) => (
            <motion.div key={i} className={styles.card} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }}>
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
