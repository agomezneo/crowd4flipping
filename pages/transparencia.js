import styles from '../styles/Home.module.scss';
import styless from '../styles/transparencia.module.scss';
import Layout from "../components/layouts/Layout";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Header from '../components/headers/header_pages';
import Footer from '../components/footers';

export default function Transparencia() {
  return (
      <Layout>
        <Header />
       <div className={styless.transparency_page}>
        <S1 />
        <S2 />
       </div>
        <Footer />
      </Layout>
  );
};

const S1 = () => { 
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
            <h1>Ser una empresa responsable, más allá del <span>cumplimiento de la legislación</span>, es uno de <span>nuestros principales objetivos</span>.</h1>
            </div>
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
const S2 = () => { 
  return (
      <div className={styless.transparency_s2}>
        <div className={styless.transparency_s2_texcontainer}>
            <p>A menudo, se concibe la inversión como <span>comprar un activo que se revaloriza</span>. Pero, en realidad, <span>invertir es confiar en el trabajo de alguien</span>. No olvidemos que detrás de los índices bursátiles, fondos de inversión, bonos y acciones hay empresas. Estas empresas no son máquinas programadas para fabricar dinero, <span>sino organizaciones de personas que realizan un trabajo útil para otros: sus clientes</span>. 
            <br/>
            Si esto no fuera así, la empresa en la que invertimos no podría pagar y perderíamos nuestra inversión. Básicamente, estamos arriesgando nuestro capital a cambio de tener el derecho a <span>participar en el fruto de una actividad</span>. 
            <br/>
            Uno de nuestros principales <span>VALORES</span> es la <span>TRANSPARENCIA</span>, pero ¿de qué hablamos cuando nos referimos a la transparencia? 
            </p>
        </div>
        <div className={styless.transparency_s2_items_container}>
        <div className={styless.transparencia_card}>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_01}` }></div>
            <div className={styless.transparencia_card_text}>
                <h2><span>Actualización sobre información financiera del proyecto</span>. Para tomar una decisión acertada, facilitamos el desglose de costes para realizar la inversión, contemplando diferentes escenarios: Desfavorable, moderado y favorable. 
                </h2>
            </div>
        </div>
        <div className={`${styless.transparencia_card} ${styless.transparencia_card_02}`}>
            <div className={styless.transparencia_card_text}>
                <h2><span>Estado del proyecto</span>. Además de recibir información sobre la evolución del proyecto, los inversores podrán solicitar visitas presenciales a los inmuebles. </h2>
            </div>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_02}` }></div>
        </div>
        <div className={styless.transparencia_card}>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_03}` }></div>
            <div className={styless.transparencia_card_text}>
                <h2><span>Participación proactiva</span>. En caso de escenarios de inversión no favorables, barajamos las diferentes posibilidades y son los propios inversores del proyecto quienes toman las decisiones. </h2>
            </div>
        </div>
        <div className={`${styless.transparencia_card} ${styless.transparencia_card_02}`}>
            <div className={styless.transparencia_card_text}>
                <h2>¿Eres inversor de algún proyecto? <a href='https://app.crowd4flipping.com/' ><span> ¡Solicita tu visita presencial! </span></a></h2>
            </div>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_04}` }></div>
        </div>
        </div>
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
    className={`${styless.transparency_img} `}
  >
  </motion.div>
);
