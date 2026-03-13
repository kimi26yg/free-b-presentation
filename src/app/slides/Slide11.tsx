'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const before = ['종이 계약서 별도 보관', '사진 찍어서 카톡 전송', '엑셀에 수동 입력'];
const after = ['카메라로 촬영 → 즉시 인식', '앱 내 계약 DB 자동 등록', '서버 전송 없이 온디바이스 처리'];

export default function Slide11() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · AI FEATURE 1
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        외부 계약서를 찍으면 앱이 알아서 인식하고 관리합니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        온디바이스 AI로 처리해 외부 서버 전송 없이 즉시 인식됩니다
      </motion.p>

      <div className={styles.body}>
        <div className={styles.comparison}>
          <motion.div className={styles.compCol} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className={styles.compColTitle}>BEFORE</div>
            {before.map((item, i) => (
              <motion.div
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < before.length - 1 ? '1px solid var(--border)' : 'none', fontSize: '1.1rem', color: 'var(--text-muted)' }}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className={styles.cross}>✕</span> {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={`${styles.compCol} ${styles.accent}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className={styles.compColTitle}>WITH MLKit</div>
            {after.map((item, i) => (
              <motion.div
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < after.length - 1 ? '1px solid var(--border)' : 'none', fontSize: '1.1rem', color: 'var(--text-secondary)' }}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className={styles.check}>✓</span> {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className={styles.badge} style={{ fontSize: '1rem', padding: '8px 20px' }}>📷 종이 · PDF · 이미지</div>
          <div className={styles.badge} style={{ fontSize: '1rem', padding: '8px 20px' }}>🤖 Google MLKit</div>
          <div className={styles.badge} style={{ fontSize: '1rem', padding: '8px 20px' }}>🔒 온디바이스 처리</div>
        </motion.div>
      </div>
    </div>
  );
}
