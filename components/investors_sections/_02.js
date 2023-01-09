import React, {useEffect, useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {StepsData} from '../../data/cards/StepCardsData';
import Steper from '../stepers/MaterialHorizontal'; 
import Vsteper from '../stepers/VerticalMUI';
import {motion} from 'framer-motion'
import Link from 'next/link';

function HomeSection() {

  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState(false)
  const fromWeb = 'fw'

  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('steps_container'))
  },[]);

  const setElementEffect = (ele, setActive) =>{
    let ele_hight = ele?.offsetTop;
    window.addEventListener("scroll", ()=>{
      if(window.scrollY < ele_hight){return setActive(false)}
      if(window.scrollY > ele_hight - 200){
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
                <h1><span>Sácale partido  a tu dinero </span> con estos sencillos pasos</h1>
            </div>
            <div className={styles.page_section_body_s2}>
              <motion.div 
                className={active ? `${styles.steps_container} ${styles.steps_container_active}` : styles.steps_container} 
                id='steps_container'
                initial={active}
                variants={effectVariants}
                animate= {active ? "opened" : "closed"}
                transition={{delay: .5, duration: .5,  type: 'spring', stiffness: 100}}
              >
                
                {!screen ? 
                (
                  <Steper data={StepsData} activeEffect={active} active={active}/> 
                )
                  :

                (
                  <Vsteper data={StepsData} />
                )
                }
              </motion.div>
            </div>
            <div className={styles.page_section_footer}>
                <div className={styles.modal_button_secundary}>
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
