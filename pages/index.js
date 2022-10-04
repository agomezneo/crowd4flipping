import styles from '../styles/Home.module.scss';
import Layout from "../components/layouts/Layout";
import { motion, useScroll } from "framer-motion"
import Link from "next/link";
import { BsFillTreeFill } from "react-icons/bs";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png'
import Header from '../components/headers/header_pages';
export default function Home() {

  return (
    <>
      <Layout>
        {/* <Header /> */}
        <Hero />
      </Layout>

    </>
  );
}

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
            <Image src={Logo} width={700} height={300} alt='Crowd for Flipping' />
            <div className={styles.text_container}>
            <h1>La inversión inmobiliaria <span>al alcance de todos</span> </h1>
            </div>
          </div>
          <div className={styles.buttons_container}>
            <Link href="/inversor">
              <a className={styles.back_btn}>Quiero invertir</a>
            </Link>
            <Link href="/propietario">
              <a className={styles.back_btn}>Ofrece tu propiedad</a>
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
