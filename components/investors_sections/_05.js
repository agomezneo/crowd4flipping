import styles from '../../styles/Investor&Owner_pages.module.scss';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

import styless from '../../styles/swiper.module.scss'
import Image from 'next/image';
import Image_ from '../../public/images/obras/foto_casa_example.png'

function HomeSection() {

  const go = () =>{
    return alert('Hello C4F ¡A por ello!')
  }
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={`${styles.page_section_header} ${styles.page_section_header_swiper}`}>
              <h1>Invierta en proyectos <strong> con  <span>Crowd</span>4<span>Flipping</span></strong></h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.swiper_container}>
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className={styless.swiper}
                >
                  
                  <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Image_} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                    <div className={styless.swiper_slide_footer}>
                      <div className={styless.swiper_button}>
                        <span>Ver proyecto</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Image_} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                    <div className={styless.swiper_slide_footer}>
                      <div className={styless.swiper_button}>
                        <span>Ver proyecto</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Image_} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                    <div className={styless.swiper_slide_footer}>
                      <div className={styless.swiper_button}>
                        <span>Ver proyecto</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Image_} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                    <div className={styless.swiper_slide_footer} onClick={go}>
                      <div className={styless.swiper_button} >
                        <span>Ver proyecto</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  

                  
                </Swiper>
              </div>

              <div className={styles.empty_div_s4}>

              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection