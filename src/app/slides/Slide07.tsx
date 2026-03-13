'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const phases = [
  { num: '01', title: 'AI 추천 & 배정 확정', text: '미배정 수업에 AI 추천 강사 목록이 표시되고, 운영자가 최종 선택합니다.' },
  { num: '02', title: '계약 서명 & 확인', text: '전자서명 요청 발송 → 강사 앱 서명 → 상태 자동 동기화.' },
  { num: '03', title: '출강 & 체크인 완료', text: 'GPS 알림 → 도착 체크인 → 운영 로그 & 정산 자동 기록.' },
];

export default function Slide07() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        WEB · FULL FLOW
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        배정에서 체크인까지, 운영자는 한 화면에서 모든 상태를 봅니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        운영자는 판단하고, 시스템은 기록하고, AI는 브리핑합니다
      </motion.p>

      <div className={styles.body}>
        <div className={styles.steps}>
          {phases.map((p, i) => (
            <motion.div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 20, flex: 1 }}>
              {i > 0 && (
                <motion.div className={styles.stepArrow} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }}>→</motion.div>
              )}
              <motion.div
                className={styles.step}
                style={{ flex: 1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2 }}
              >
                <div className={styles.stepNumber}>{p.num}</div>
                <div className={styles.stepTitle}>{p.title}</div>
                <div className={styles.stepText}>{p.text}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
