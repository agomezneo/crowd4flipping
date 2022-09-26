import styles from '../styles/Home.module.scss';
import Layout from "../components/layouts/Layout";
import SectionOne from '../components/home_sections/_01';
import SectionTwo from '../components/home_sections/_02';
import SectionThree from '../components/home_sections/_03';
import SectionFour from '../components/home_sections/_04';
import SectionFive from '../components/home_sections/_05';
import SectionSix from '../components/home_sections/_06';
import SectionSeven from '../components/home_sections/_07';
import { motion, useScroll } from "framer-motion"
import Link from "next/link";
import { BsFillTreeFill } from "react-icons/bs";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/SVG_Vector_Files/Transparent_Logo.svg'

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar />
        <Hero />
      </Layout>

    </>
  );
}

const NavBar = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className={styles.nav_bar}
    >
      {/* <BsFillTreeFill size="50px" color="#1d3319" /> */}
      <Image src={Logo} width={350} height={100} alt='logo crowd for flipping ' />
      <div initial="hidden" animate="show">
       {/*  <Link href="/parks">
          <span className={styles.nav_link}>Parks</span>
        </Link>
        <Link href="/">
          <span className={styles.nav_link}>About</span>
        </Link>
        <Link href="/">
          <span className={styles.nav_link}>Contact</span>
        </Link> */}
        <Link href="/">
          <a className={styles.back_btn}>Solicite una entrevista</a>
        </Link>
      </div>
    </motion.div>
  );
};

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
        <Link href="/inversor">
          <a className={styles.back_btn}>Soy un inversor</a>
        </Link>
        <Link href="/propietario">
          <a className={styles.back_btn}>Soy un propietario</a>
        </Link>
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
