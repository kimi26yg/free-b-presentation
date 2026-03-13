'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

const plans = [
  { plan: 'Free', price: '무료', detail: '~5명', featured: false },
  { plan: 'Starter', price: '29,000원', detail: '~20명 · 1,450원/강사', featured: false },
  { plan: 'Growth', price: '99,000원', detail: '~50명 · 1,980원/강사', featured: true },
  { plan: 'Pro', price: '299,000원', detail: '~100명 · 2,990원/강사', featured: false },
  { plan: 'Enterprise', price: '협의', detail: '100명+', featured: false },
];

export default function Slide21() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        BUSINESS MODEL
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        규모가 커질수록 단가도 올라갑니다
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        써보고 · 익숙해지고 · 규모가 커지면 · 자연스럽게 올라갑니다 (PLG)
      </motion.p>

      <div className={styles.body}>
        <div className={styles.pricingGrid}>
          {plans.map((p, i) => (
            <motion.div
              key={i}
              className={`${styles.pricingCard} ${p.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className={styles.pricingPlan}>{p.plan}</div>
              <div className={styles.pricingPrice}>{p.price}</div>
              <div className={styles.pricingDetail}>{p.detail}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 12, color: 'var(--text-muted)', fontSize: '0.85rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          인당 단가 상승 구조 — 규모가 커질수록 총액뿐 아니라 인당 가치도 높게 청구됩니다
        </motion.div>
      </div>
    </div>
  );
}
