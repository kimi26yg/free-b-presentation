'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const timeline = [
  { icon: '📍', label: '수업 30분 전', desc: 'GPS 활성화 — 위치 감지 시작' },
  { icon: '🚗', label: '출발 감지', desc: '자동으로 운영자에게 출발 알림 전송' },
  { icon: '📊', label: '경로 계산', desc: '도착 예정 시간을 실시간 안내' },
  { icon: '✅', label: '현장 도착', desc: '도착 · 체크인이 운영 로그로 자동 기록' },
];

export default function Slide12() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        APP · AI FEATURE 2
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        출발하면 앱이 먼저 알립니다 — 운영자가 물어보기 전에
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        출발 전 자동 감지로 확인 전화를 없앴습니다
      </motion.p>

      <div className={styles.body} style={{ gap: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)', gap: 40, alignItems: 'center' }}>
          {/* Left: Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', paddingLeft: 40 }}>
            {/* vertical line */}
            <motion.div
              style={{ position: 'absolute', left: 18, top: 20, bottom: 20, width: 2, background: 'var(--border-accent)' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 24, padding: '20px 0', position: 'relative' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.18 }}
              >
                <div style={{ position: 'absolute', left: -32, top: 22, width: 24, height: 24, borderRadius: '50%', background: 'var(--bg-card)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', zIndex: 1 }}>
                  {t.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 4 }}>{t.label}</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 500 }}>{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Live Widget */}
          <motion.div 
            className={styles.liveWidgetContainer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.liveWidgetHeader}>
              오늘 수업 현황 <span className={styles.liveBadge}><div className={styles.liveDot} /> LIVE</span>
            </div>
            
            <div className={`${styles.liveClassCard} ${styles.greenAccent}`}>
              <div className={styles.liveClassLeft}>
                <div className={styles.liveClassIcon}>📍</div>
                <div className={styles.liveClassInfo}>
                  <div className={styles.liveClassTitle}>[QA 21] 유물 기록<br />노트 수업</div>
                  <div className={styles.liveClassLoc}>국립경주박물관</div>
                </div>
              </div>
              <div className={styles.liveClassRight}>
                <div className={styles.liveClassTime}>09:00</div>
                <div className={`${styles.liveClassPill} ${styles.pillGreen}`}>계약 완료</div>
              </div>
            </div>

            <div className={`${styles.liveClassCard} ${styles.brownAccent}`}>
              <div className={styles.liveClassLeft}>
                <div className={styles.liveClassIcon}>📍</div>
                <div className={styles.liveClassInfo}>
                  <div className={styles.liveClassTitle}>[초등] 민속 생활사<br />체험교실</div>
                  <div className={styles.liveClassLoc}>롯데월드 민속박물관</div>
                </div>
              </div>
              <div className={styles.liveClassRight}>
                <div className={styles.liveClassTime}>10:00</div>
                <div className={`${styles.liveClassPill} ${styles.pillBrown}`}>조건 변경</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Stats */}
        <motion.div
          style={{ display: 'flex', gap: 32, marginTop: 40 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className={styles.statCard}>
            <div className={styles.statValue} style={{ fontSize: '2.8rem' }}>0건</div>
            <div className={styles.statLabel}>확인 전화</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue} style={{ fontSize: '2.8rem' }}>자동</div>
            <div className={styles.statLabel}>출발·도착 기록</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue} style={{ fontSize: '2.8rem' }}>실시간</div>
            <div className={styles.statLabel}>도착 예정 안내</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
