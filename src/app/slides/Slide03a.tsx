'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

export default function Slide03a() {
  const rows = [
    { surface: '카카오톡과 전화 중심이라 연락이 느리다', root: '같은 상태를 같은 시간에 보지 못한다' },
    { surface: '계약서가 이메일로 따로 돌아다닌다', root: '배정·계약·체크인이 연결되지 않는다' },
    { surface: '강사와 운영자가 다른 앱을 쓴다', root: '운영 판단의 근거가 어디에도 남지 않는다' },
  ];
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        DISCOVERY
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        우리는 연락이 느린 게 문제가 아님을 발견했습니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        운영자와 강사는 같은 수업을 완전히 다른 정보 환경에서 경험하고 있었습니다
      </motion.p>

      <div className={styles.body} style={{ gap: 32 }}>
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          &ldquo;필요한 것은 더 빠른 연락이 아니라, 확인하지 않아도 아는 상태였습니다.&rdquo;
        </motion.blockquote>

        <div className={styles.bodyRow}>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <div className={styles.statValue}>3</div>
            <div className={styles.statLabel}>핵심 접점<br />배정 요청 · 계약 서명 · 출강 확인</div>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}>
            <div className={styles.statValue}>0</div>
            <div className={styles.statLabel}>확인 전화<br />상태가 보이면 물어볼 필요가 없습니다</div>
          </motion.div>
        </div>

        <motion.table
          className={styles.table}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{ marginTop: 24 }}
        >
          <thead>
            <tr>
              <th>처음에 보인 문제</th>
              <th>진짜 문제</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <td style={{ color: 'var(--text-muted)', textDecoration: 'line-through', textDecorationColor: 'var(--text-muted)' }}>{r.surface}</td>
                <td style={{ color: 'var(--accent)', fontWeight: 600 }}>{r.root}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
