import styles from '../styles/Home.module.scss';
import Layout from "../components/layouts/Layout";
import { motion, useScroll } from "framer-motion"
import Link from "next/link";
import { BsFillTreeFill } from "react-icons/bs";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/SVG_Vector_Files/Transparent_Logo.svg'
import Header from '../components/headers/header_pages';
export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
      </Layout>

    </>
  );
}

const Hero = () => {
  return (
    <div className={styles.explore_page_hero}>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className={styles.header_content}
      >
        <h1 className={styles.title_text}>Explore <span>Crowd</span>4<span>Flipping</span> </h1>
        <p className={styles.sub_text}>
          Explore todas las opciones que te ofrece Crowd4Flipping en el mercado inmobiliario.
        </p>
        <div className={styles.buttons_container}>
          <Link href="/inversor">
            <a className={styles.back_btn}>Soy un inversor</a>
          </Link>
          <Link href="/propietario">
            <a className={styles.back_btn}>Soy un propietario</a>
          </Link>
        </div>
      </motion.div>
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
