import styles from '../../styles/Investor&Owner_pages.module.scss';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styless from '../../styles/swiper.module.scss'
import Image from 'next/image';
import Img from '../../public/images/obras/foto_casa_example_01.png'
import Img2 from '../../public/images/obras/foto_casa_example_02.jpg'
import Img3 from '../../public/images/obras/foto_casa_example_03.jpeg';
import axios from 'axios';

function HomeSection({projectsInStudy, projectsFinished}) {

  console.log(projectsInStudy)
  console.log(projectsFinished)
 
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>

            <div className={styles.page_section_header}>
              <h1>Algunos de los <span> proyectos realizados </span></h1>
            </div> 


            <div className={styles.page_section_body_flex}>

              <div className={styles.swiper_container}>
               
                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img} width={320} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet Cala Viñas</h1>
                      <h2> 740.000 €</h2>

                      <div className={styless.swiper_slide_body_items_container}> 
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Rentabilidad</h2>
                          <span>14%</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Tipo de operación</h2>
                          <span>House Flipping</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Número inversores</h2>
                          <span>4</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Plazo de inversión</h2>
                          <span>8 meses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img2} width={320} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2> 1.390.000 €</h2>

                      <div className={styless.swiper_slide_body_items_container}> 
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Rentabilidad</h2>
                          <span>11%</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Tipo de operación</h2>
                          <span>House Flipping</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Número inversores</h2>
                          <span>7</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Plazo de inversión</h2>
                          <span>10 meses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img3} width={320} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Costitx</h1>
                      <h2> 360.000 €</h2>

                      <div className={styless.swiper_slide_body_items_container}> 
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Rentabilidad</h2>
                          <span>12%</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Tipo de operación</h2>
                          <span>House Flipping</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Número inversores</h2>
                          <span>3</span>
                        </div>
                        <div className={styless.swiper_slide_body_item}>
                          <h2>Plazo de inversión</h2>
                          <span>5 meses</span>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>

            </div>
        </div>
    </div>
  )
}

export default HomeSection;








