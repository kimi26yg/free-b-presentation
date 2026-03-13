'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const steps = [
  { num: '01', title: '서명 요청 발송', text: '운영자가 앱에서 계약 내용 확인 후 서명 요청을 전송합니다.' },
  { num: '02', title: '강사 앱 수신 & 서명', text: '강사는 앱 안에서 계약서를 확인하고 전자서명을 완료합니다.' },
  { num: '03', title: '상태 자동 동기화', text: '서명 완료 즉시 운영자 화면에 계약 확정 상태가 반영됩니다.' },
];

export default function Slide09() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · CONTRACT FLOW
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        서명 요청부터 완료까지, 재확인 없이 한 흐름으로 끝납니다
      </motion.h1>

      <div className={styles.body}>
        <div className={styles.twoCol}>
          <div className={styles.steps} style={{ flexDirection: 'column' }}>
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className={styles.step}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <div className={styles.stepNumber}>{s.num}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepText}>{s.text}</div>
              </motion.div>
            ))}
          </div>
          <motion.div
            style={{ display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.imageContainer} style={{ width: 350, height: 650, border: 'none', background: 'transparent' }}>
              <img src="/images/contract.PNG" alt="전자서명 화면" style={{ objectFit: 'contain', borderRadius: '16px 0 16px 16px' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
