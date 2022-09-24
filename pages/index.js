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
import Logo from '../public/images/brand/crowd4flipping/SVG_Vector_Files/Original_Logo.svg'
import bg_buildings from '../public/images/brand/backgorund_buildings.png'

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

  {/*   <Image src={bg_buildings} width={2000} height={750} alt='dibujo de edificios' /> */}
   {/*  <svg
      id="visual"
      viewBox="0 0 900 600"
      className={styles.mountain}
      preserveAspectRatio="none"
    >
      <path
        d="M0 485L82 454L164 489L245 453L327 485L409 525L491 464L573 524L655 444L736 492L818 480L900 508L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#00c3ff"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className={styles.mountain}
      preserveAspectRatio="none"
    >
      <path
        d="M0 510L82 493L164 504L245 544L327 531L409 506L491 530L573 476L655 506L736 484L818 474L900 496L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#0081a9"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className={styles.mountain}
      preserveAspectRatio="none"
    >
      <path
        d="M0 558L82 565L164 543L245 518L327 567L409 541L491 557L573 554L655 562L736 563L818 518L900 505L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#002834"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className={styles.mountain}
      preserveAspectRatio="none"
    >
      <path
        d="M0 555L82 548L164 550L245 585L327 547L409 550L491 550L573 544L655 568L736 553L818 558L900 583L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#00c3ff"
      />
    </svg> */}
  </motion.div>
);
