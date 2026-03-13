'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';

import Slide00 from './slides/Slide00';
import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03a from './slides/Slide03a';
import Slide03c from './slides/Slide03c';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';
import Slide18 from './slides/Slide18';
import Slide19 from './slides/Slide19';
import Slide20 from './slides/Slide20';
import Slide21 from './slides/Slide21';
import Slide22 from './slides/Slide22';
import Slide24 from './slides/Slide24';

const slides = [
  Slide00, Slide01, Slide02, Slide03a, Slide03c,
  Slide04, Slide05, Slide06, Slide07, Slide08, Slide09,
  Slide10, Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20, Slide21,
  Slide22, Slide24,
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [next, prev]);

  const SlideComponent = slides[current];

  return (
    <div className={styles.presentation}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          className={styles.slideWrapper}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className={styles.nav}>
        <button
          className={`${styles.navBtn} ${current === 0 ? styles.navBtnDisabled : ''}`}
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.progress}>
          <span className={styles.counter}>{String(current).padStart(2, '0')}</span>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={false}
              animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className={styles.counterTotal}>{String(slides.length - 1).padStart(2, '0')}</span>
        </div>

        <button
          className={`${styles.navBtn} ${current === slides.length - 1 ? styles.navBtnDisabled : ''}`}
          onClick={next}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
