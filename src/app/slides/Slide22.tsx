'use client';

import { motion } from 'framer-motion';
import styles from './slides.module.css';

export default function Slide22() {
  return (
    <div className={styles.slide}>
      <motion.p className={styles.tag} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        WEB & LANDING
      </motion.p>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        실제 동작하는 웹 대시보드와 랜딩 페이지를 확인해보세요
      </motion.h1>
      <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        아래 이미지를 클릭하면 해당 데모 페이지로 이동합니다.
      </motion.p>

      <div className={styles.body} style={{ marginTop: 20 }}>
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, height: '100%' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Dashboard iframe */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ flex: 1, borderRadius: 24, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: 'var(--bg-card)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8, zIndex: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <iframe src="https://free-b-seven.vercel.app/dashboard" title="Admin Web" style={{ width: '100%', height: 'calc(100% - 40px)', border: 'none', background: '#fff', marginTop: 40, display: 'block' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>
                <a href="https://free-b-seven.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>관리자 대시보드 (Admin Web) ↗</a>
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>운영 기록 및 정산 처리를 위한 내부망 화면</p>
            </div>
          </div>

          {/* Landing Page iframe */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ flex: 1, borderRadius: 24, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: 'var(--bg-card)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8, zIndex: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <iframe src="https://landing-omega-eight-75.vercel.app/" title="Landing Page" style={{ width: '100%', height: 'calc(100% - 40px)', border: 'none', background: '#fff', marginTop: 40, display: 'block' }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>
                <a href="https://landing-omega-eight-75.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>서비스 랜딩 (Landing Hero) ↗</a>
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>프리랜서 및 업체를 위한 홍보 페이지</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
