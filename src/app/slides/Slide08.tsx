'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const features = [
  '수업 요청 수락·거절 — 한 화면에서',
  '외부 계약서 MLKit 스캔 → 앱 내 관리',
  '전자서명 앱 안에서 완료',
  'GPS 기반 출발/도착 체크인',
  '정산 내역 앱에서 바로 확인',
];

export default function Slide08() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP PLATFORM
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        강사 앱은 응답·서명·체크인을 한 흐름으로 연결합니다
      </motion.h1>

      <div className={styles.body}>
        <div className={styles.twoCol}>
          <div>
            <motion.p className={styles.subtitle} style={{ marginTop: 0, fontSize: '1.25rem' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              강사의 자연스러운 행동 하나하나가 운영 기록으로 쌓이도록 설계했습니다.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ marginTop: 16 }}>
              <div className={styles.badge} style={{ fontSize: '1.1rem', padding: '10px 24px' }}>React Native · Google MLKit · GPS · Firebase</div>
            </motion.div>
            <ul className={styles.featureList} style={{ marginTop: 32 }}>
              {features.map((f, i) => (
                <motion.li key={i} className={styles.featureItem} style={{ fontSize: '1.2rem', marginBottom: 12 }} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.08 }}>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            style={{ display: 'flex', gap: 16, justifyContent: 'center' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.imageContainer} style={{ width: 230, height: 460 }}>
              <img src="/images/IMG_4677.PNG" alt="강사 앱" />
            </div>
            <div className={styles.imageContainer} style={{ width: 230, height: 460 }}>
              <img src="/images/IMG_4678.PNG" alt="강사 앱" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
