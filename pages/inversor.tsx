import styles from '../styles/Investor&Owner_pages.module.scss'
import { useEffect, useRef, useState } from "react";
import {  motion, useScroll, useSpring, useTransform, MotionValue} from "framer-motion";
import Header from '../components/headers/header_pages';
import Section01 from '../components/investors_sections/_01';
import Section02 from '../components/investors_sections/_02';
import Section03 from '../components/investors_sections/_03';
import Section04 from '../components/investors_sections/_04';
import Section05 from '../components/investors_sections/_05';
import Section06 from '../components/investors_sections/_06';
import Section07 from '../components/investors_sections/_07';
import Section08 from '../components/investors_sections/_08';
import Footer from '../components/footers';
import { RiWhatsappLine } from 'react-icons/ri'

function useParallax(value: MotionValue<number>, distance: number) { 
  return useTransform(value, [0, 1], [-distance, distance]);
}

function HomeSection({id, css, children}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const [screen, setScreen] = useState(false)

  useEffect(() => {
    let screenWidth = window.screen.width;
    if(screenWidth < 991){
        setScreen(true)
        return
    }
}, [])

  return (
    <section className={`${styles.section} ${css}`} id={id}>  
      <div ref={ref}>
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
    restDelta: 0.1
  });

  return (
    <div className={styles.page}>

      <div className={styles.section_arrows_movil}> 
        <div className={styles.arrow_icon_container}>
          <a 
            href={`https://wa.me/34672126268?text=Hola, estoy interesad@ en participar en proyectos inmobiliarios. ¿Podrías darme más infomación?`}
            target="_blank"
          > 
            <RiWhatsappLine className={`${styles.arrow_icon} ${styles.arrow_icon_whatsapp}`} /> 
          </a>
        </div>
      </div>

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
      <HomeSection id={4} css={styles.s4}>
        <Section04 />
      </HomeSection>
     {/*  <HomeSection id={5} css={styles.s5}>
        <Section05 />
      </HomeSection> */}
      <HomeSection id={5} css={styles.s6}>
        <Section06 />
      </HomeSection>
      <HomeSection id={6} css={styles.s7}>
        <Section07 />
      </HomeSection> 
      <HomeSection id={7} css={styles.s8}>
        <Section08 />
      </HomeSection> 
      <Footer />
      <motion.div className={styles.progress}  style={{ scaleX }} />
    </div>
  );
}
