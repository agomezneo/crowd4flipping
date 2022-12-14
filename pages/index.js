import styles from '../styles/Home.module.scss';
import Layout from "../components/layouts/Layout";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';

export default function Home() {
  return (
      <Layout>
        <Hero />
      </Layout>
  );
};

const Hero = () => { 
  return (
    <div className={styles.explore_page_hero}>
      <div className={styles.page_grid_container}>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={`${styles.explore_page_hero_container} ${styles.left}`}
        >
          <div className={styles.logo_container}>
            <Image src={Logo} width={900} height={400} alt='Crowd for Flipping' />
            <div className={styles.text_container}>
            <h1>La inversión inmobiliaria <span>al alcance de todos</span> </h1>
            </div>
          </div>
          <div className={styles.buttons_container}>
            <Link href="/propietario">
              <a className={styles.back_btn}>Ofrece tu propiedad</a>
            </Link>
            <Link href="/inversor">
              <a className={`${styles.back_btn} ${styles.principal_button}`}>Quiero invertir</a>
            </Link>
          </div>
        </motion.div>   
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={`${styles.explore_page_hero_container} ${styles.right}`}
        >
        </motion.div>   
      </div>
      <Mountains />
    </div>
  );
};

const Mountains = () => (
  <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}
    className={styles.mountains}
  >
  </motion.div>
);
