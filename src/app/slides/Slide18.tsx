'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const rows = [
  { item: '배정 확인', before: '카카오톡 답장 대기 → 전화', after: 'AI 추천 목록 확인 → 클릭 배정' },
  { item: '계약 서명', before: '이메일 발송 → 서명 여부 수동 확인', after: '앱 서명 요청 → 실시간 상태 동기화' },
  { item: '출강 확인', before: '"출발하셨나요?" 카톡 발송', after: 'GPS 감지 → 자동 알림 수신' },
  { item: '체크인 기록', before: '수업 후 엑셀 수동 입력', after: '도착 체크인 → 자동 로그 생성' },
  { item: '정산 근거', before: '기억 · 메모 · 엑셀', after: '앱 정산 내역 자동 생성' },
  { item: '운영 도구 수', before: '카톡 + 이메일 + 엑셀 + 전화', after: 'free-b 앱 하나' },
];

export default function Slide18() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        BEFORE / AFTER
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        도구가 바뀌면 운영 하루가 달라집니다
      </motion.h1>

      <div className={styles.body}>
        <motion.table className={styles.table} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <thead>
            <tr>
              <th>항목</th>
              <th>Before (현재)</th>
              <th style={{ color: 'var(--accent)' }}>After (free-b)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{r.item}</td>
                <td style={{ color: 'var(--text-muted)' }}>{r.before}</td>
                <td style={{ color: 'var(--success)' }}>{r.after}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>

        <motion.div
          style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 12 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {['수기 입력 ZERO', '배정 판단 시간 90% 단축', '확인 전화 제로'].map((t, i) => (
            <span key={i} className={styles.badge} style={{ fontSize: '0.85rem', padding: '6px 16px' }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
