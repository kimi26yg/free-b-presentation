'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const rows = [
  { feature: '배정 AI 추천', excel: '✗', existing: '△', freeb: '✓ 점수+사유' },
  { feature: '전자서명', excel: '✗', existing: '△', freeb: '✓ 앱 내 완료' },
  { feature: 'GPS 체크인', excel: '✗', existing: '✗', freeb: '✓ 자동 기록' },
  { feature: '운영자·강사 동기화', excel: '✗', existing: '✗', freeb: '✓ 실시간' },
  { feature: '외부 계약서 인식', excel: '✗', existing: '✗', freeb: '✓ MLKit OCR' },
  { feature: '운영 로그 자동화', excel: '✗', existing: '✗', freeb: '✓ 전 구간' },
];

export default function Slide17() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        COMPETITION
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        진짜 경쟁자는 다른 앱이 아니라 엑셀과 카카오톡입니다
      </motion.h1>

      <div className={styles.body}>
        <motion.table className={styles.table} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <thead>
            <tr>
              <th>기능</th>
              <th>엑셀 + 카카오톡</th>
              <th>탈잉 · 크몽</th>
              <th style={{ color: 'var(--accent)' }}>free-b</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{r.feature}</td>
                <td><span className={styles.cross}>{r.excel}</span></td>
                <td><span className={r.existing === '△' ? styles.partial : styles.cross}>{r.existing}</span></td>
                <td><span className={styles.check}>{r.freeb}</span></td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}
