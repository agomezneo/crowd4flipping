import styles from '../styles/frame.module.css'
import { useRef } from "react";
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import  home_data  from '../data/home/home';
import Link from "next/link";
import Header from '../components/header_pages';

function useParallax(value: MotionValue<number>, distance: number) { 
  return useTransform(value, [0, 1], [-distance, distance]);
}

function HomeSection({id, imageUrl} ) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={styles.section} id={id}>
      <div ref={ref}>
        <h1>Inversor</h1>
        <Link href="/">
          <a className={styles.back_btn}>Home</a>
        </Link>
        <Image src={`${imageUrl}`} alt="A London skyscraper" className={styles.img}  width={1000} height={ 500 }/>
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function App() {

  console.log(home_data)

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 70,
    restDelta: 0.01
  });

  return (
    <>
      <Header />
      {home_data.home_data.map((item, key) => (
        <HomeSection id={item.id} imageUrl={item.imageUrl} key={key}/>
      ))}
      <motion.div className={styles.progress}  style={{ scaleX }} />
    </>
  );
}
