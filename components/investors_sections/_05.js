import styles from '../../styles/Investor&Owner_pages.module.scss';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import styless from '../../styles/swiper.module.scss'
import Image from 'next/image';
import Img from '../../public/images/obras/foto_casa_example_01.png'
import Img2 from '../../public/images/obras/foto_casa_example_02.jpg'
import Img3 from '../../public/images/obras/foto_casa_example_03.jpeg'

function HomeSection() {

  const go = () =>{
    return alert('Hello C4F ¡A por ello!')
  }
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header} >
              <h1>Algunos de los <span> proyectos realizados </span></h1>
            </div>
            <div className={styles.page_section_body_flex}>
              <div className={styles.swiper_container}>
               {/*  <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className={styless.swiper}
                > */}
                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img} width={300} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                  </div>
                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img2} width={300} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                  </div>
                  <div className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img3} width={300} height={200} className={styles.swiper_image} />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                  </div>
                  {/* <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img2} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styless.swiper_slide}>
                    <div className={styless.swiper_slide_header}>
                      <Image src={Img3} width={300} height={200}  />
                    </div>
                    <div className={styless.swiper_slide_body}>
                      <h1>Chalet en Palma</h1>
                      <h2>1.360.000 €</h2>
                      <h3>Rentabilidad</h3>
                      <span>11,5%</span>
                      <p>Financiado por  <stron>2552</stron> inversores</p>
                    </div>
                  </SwiperSlide> */}
                 
       {/*          </Swiper> */}
              </div>
            </div>
            <div className={styles.page_section_footer}>
              <div className={styles.footer_left_side}></div>
                <div className={styles.footer_right_side}>

                    <a href='#7' className={styles.modal_button_secundary}>
                      <span>Quiero invertir</span>
                    </a>

                    {
                    /* 
                     TODO 
                    <ModalButton>
                      <InvestmentForm />
                    </ModalButton> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection