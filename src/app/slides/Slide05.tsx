'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const features = [
  'AI 추천 강사 목록 — 점수·사유 함께 표시',
  '배정 상태 실시간 현황판',
  '계약 서명 요청 & 상태 추적',
  '강사별 체크인 로그 & 이력',
  '미배정 수업 목록 & AI 추천 트리거',
  'AI 운영 브리핑 — 오늘 우선 이슈 자동 요약',
];

export default function Slide05() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        WEB PLATFORM
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        운영자 웹은 배정·계약·체크인을 한 화면에서 판단합니다
      </motion.h1>

      <div className={styles.body}>
        <div className={styles.twoCol}>
          <div>
            <motion.p className={styles.subtitle} style={{ marginTop: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              AI 강사 추천 · AI 운영 브리핑 — Web AI 기능 2개가 운영자 웹에 탑재됩니다.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ marginTop: 24 }}>
              <div className={styles.badge}>Next.js · TypeScript · PostgreSQL · AI API</div>
            </motion.div>
            <ul className={styles.featureList} style={{ marginTop: 24 }}>
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className={styles.imageContainer}
            style={{ height: 440 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src="/images/web_01.jpg" alt="운영자 웹 대시보드" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
