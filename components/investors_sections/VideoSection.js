import React, {useEffect, useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {motion} from 'framer-motion'
import Link from 'next/link'; 

function HomeSection() {

  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState(false)
  const fromWeb = 'fw'

  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('video_section'))
  },[]);

  const setElementEffect = (ele, setActive) =>{
    let ele_hight = ele?.offsetTop;
    window.addEventListener("scroll", ()=>{
      if(window.scrollY < ele_hight){return setActive(false)}
      if(window.scrollY > ele_hight - 500){
        return setActive(true); 
      }
    })
  }

  useEffect(()=>{
    if(eleTarget === null)return
    setElementEffect(eleTarget, setActive)
  },[eleTarget])

  const effectVariants = {
    opened: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0, 
        y: 100
    },
}

useEffect(() => { 
    let document = window.screen.width;
    if(document < 991){
        setScreen(true)
        return
    }
}, [])

  return (
    <div className={styles.page_section}>
        <div className={`${styles.page_section_container} `}>
            <div className={`${styles.page_section_header}`}>
                <h1><span>Conoce de manera sencilla</span> como funciona Crowd4Flipping</h1>
            </div>
            <div className={`${styles.page_section_body_s2} ${styles.page_section_body_video_section}`}>
                <div className={styles.video_container_}>
                  <video src='https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/videos-corporativos%2FCF4%20ANIMACION_BAJO.mp4?alt=media&token=7d70d3e5-d84e-48eb-8172-ea4abf987b1f' playsInline controls/>
                </div>  
            </div>
            <div className={styles.page_section_footer}>
                <div className={`${styles.modal_button_secundary} ${styles.green_bg_button}`}>
                  <Link href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                    <span>Regístrate gratis</span>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection