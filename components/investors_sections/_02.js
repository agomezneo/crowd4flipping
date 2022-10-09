import React, {useEffect, useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {StepsData} from '../../data/cards/StepCardsData';
import Steper from '../stepers/MaterialHorizontal'; 
import {motion} from 'framer-motion'
import ModalButton from '../buttons/ModalButtonSecundary';
import InvestmentForm from '../forms/InvestmentForm';
function HomeSection() {

  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);
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
                
                <Steper data={StepsData} activeEffect={active}/> 
              </motion.div>
            </div>
            <div className={styles.page_section_footer}>
                <div className={styles.footer_left_side}></div>
                <div className={styles.footer_right_side}>

                    <a href='#8' className={styles.modal_button_secundary}>
                      <span>Lista de espera</span>
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
