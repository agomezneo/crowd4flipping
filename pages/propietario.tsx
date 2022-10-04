import styles from '../styles/OwnersPage.module.scss';
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Header from '../components/headers/header_pages';
import Section01 from '../components/owners_sections/_01';
import Section02 from '../components/owners_sections/_02';
import Section03 from '../components/owners_sections/_03';

import Footer from '../components/footers';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function HomeSection({id, css, children}) {
  return (
    <section className={`${styles.section} ${css}`} id={id}>  
      <div >
          {children}
      </div>
    </section>
  );
}

export default function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 70,
    restDelta: 0.01
}); 

  return (
    <div className={styles.page}>
      <Header />
      <HomeSection id={1} css={styles.s1}>
        <Section01 />
      </HomeSection>
      <HomeSection id={2} css={styles.s2}>
        <Section02 />
      </HomeSection>
      <HomeSection id={3} css={styles.s3}>
        <Section03 />
      </HomeSection>
      <Footer />
      <motion.div className={styles.progress}  style={{ scaleX }} />
    </div>
  );
}
