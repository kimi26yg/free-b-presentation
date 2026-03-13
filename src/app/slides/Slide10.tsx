'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const steps = [
  { eyebrow: 'Step 01', title: 'GPS 도착 감지 & 체크인', body: '현장 도착 시 앱이 자동으로 체크인을 제안하고 강사가 확인합니다.', icon: '📍' },
  { eyebrow: 'Step 02', title: '운영 로그 자동 기록', body: '출발 시간, 도착 시간, 체크인 시점이 운영 근거로 남습니다.', icon: '📋' },
  { eyebrow: 'Step 03', title: '정산 내역 자동 생성', body: '수업 완료 후 정산 데이터가 앱 안에서 바로 확인 가능합니다.', icon: '💰' },
];

export default function Slide10() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · CHECK-IN
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        체크인 한 번이 운영 기록과 정산 근거가 됩니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        강사의 자연스러운 도착이 운영 근거로 자동 기록됩니다
      </motion.p>

      <div className={styles.body} style={{ marginTop: 32 }}>
        <div className={styles.splitLayout}>
          {/* Left Column: Phone Visuals */}
          <div className={styles.phonePair}>
            <motion.div 
              className={styles.phoneMockup}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img src="/정산.jpg" alt="정산" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div 
              className={styles.phoneMockup}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <img src="/정산상세.jpg" alt="정산상세" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>

          {/* Right Column: Steps */}
          <div className={styles.stepStack}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={styles.stepCardVertical}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.15 }}
              >
                <div className={styles.stepEyebrow}>{step.eyebrow}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepBody}>{step.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
