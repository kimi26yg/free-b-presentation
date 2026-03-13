'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const briefings = [
  { level: 'urgent', title: '오늘 긴급', text: '미배정 수업 2건 — 내일 오전 수업, 아직 강사 미확정' },
  { level: 'warning', title: '서명 대기', text: '계약 서명 3건 — 이달 내 완료 필요' },
  { level: 'info', title: '체크인 예정', text: '오후 2시 수업 강사 출발 미확인 — 1시간 30분 전' },
];

export default function Slide20() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        AI BRIEFING
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        운영자가 아침에 앱을 열면 오늘 할 일이 먼저 나옵니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        AI는 대신 결정하는 것이 아니라 오늘 먼저 볼 일을 정리해줍니다
      </motion.p>

      <div className={styles.body}>
        <div className={styles.briefingLayout}>
          {/* Left: Console */}
          <div className={styles.briefingConsole}>
            <div className={styles.consoleTopBar}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.consoleBody}>
              {briefings.map((b, i) => (
                <motion.div
                  key={i}
                  className={styles.consoleCard}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                >
                  <span className={styles.itemEyebrow}>{b.title}</span>
                  <h3>{b.text.split(' — ')[0]}</h3>
                  <p>{b.text.split(' — ')[1]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Quote Panel */}
          <motion.div
            className={styles.quotePanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className={styles.quoteMark}>AI</p>
            <p className={styles.quoteText}>
              운영자는 판단하고, 시스템은 기록하고, AI는 브리핑합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
