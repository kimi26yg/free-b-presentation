'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const pipeline = ['미배정 수업 감지', '강사 DB 분석', '적합도 점수 산출', '추천 표시'];

const lessonData = {
  title: "영어 파닉스 기초반 (주 2회)",
  details: [
    { label: "대상", value: "초등학교 1-2학년" },
    { label: "선호 지역", value: "서울시 강남구" },
    { label: "필수 조건", value: "수/금 15:00 가능자" }
  ]
};

const candidates = [
  { name: "김민석 강사", reason: "유사 학년 대상 파닉스 수업 15회 진행", score: "98" },
  { name: "이지은 강사", reason: "거주 지역 일치, 수/금 오후 일정 가능", score: "94" },
  { name: "박준호 강사", reason: "해당 수강생 연령대 만족도 최상위", score: "89" },
];

export default function Slide06() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        WEB · AI FEATURE
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        미배정 수업에 맞는 강사를 DB에서 자동으로 추천합니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        AI는 추천 이유를 점수와 함께 보여주고, 최종 선택은 운영자가 합니다
      </motion.p>

      <div className={styles.body} style={{ marginTop: 32 }}>
        <div className={styles.matchLayout}>
          {/* Left Column: Lesson & Pipeline */}
          <div className={styles.lessonColumn}>
            <motion.div 
              className={styles.lessonCard}
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
            >
              <h3>{lessonData.title}</h3>
              <div className={styles.lessonDetails}>
                {lessonData.details.map((detail, idx) => (
                  <div key={idx} className={styles.lessonDetailRow}>
                    <span>{detail.label}</span>
                    <span className={styles.lessonDetailValue}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.pipeline}
              style={{ display: 'flex', gap: 12 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {pipeline.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                  {i > 0 && <span className={styles.pipelineArrow} style={{ color: 'var(--accent)', fontWeight: 800 }}>→</span>}
                  <div
                    className={styles.pipelineStep}
                    style={{ flex: 1, textAlign: 'center', fontSize: '0.9rem', padding: '12px 8px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px 0 8px 8px' }}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Candidates */}
          <div className={styles.candidateStack}>
            {candidates.map((candidate, idx) => (
              <motion.div 
                key={idx}
                className={styles.candidateCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.15 }}
              >
                <div className={styles.candidateInfo}>
                  <div className={styles.candidateName}>{candidate.name}</div>
                  <div className={styles.candidateReason}>{candidate.reason}</div>
                </div>
                <div className={styles.scorePill}>{candidate.score}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
